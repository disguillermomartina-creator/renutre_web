import { NextResponse } from "next/server"

const BREVO_ENDPOINT = "https://api.brevo.com/v3/contacts"

type NewsletterPayload = {
  name?: string
  email?: string
  website?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterPayload

    const name = body.name?.trim() ?? ""
    const email = body.email?.trim().toLowerCase() ?? ""
    const website = body.website?.trim() ?? ""

    // Campo trampa para bots.
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Ingresá un email válido." },
        { status: 400 },
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    const listId = Number(process.env.BREVO_LIST_ID)

    if (!apiKey || !Number.isInteger(listId)) {
      console.error("Faltan las variables BREVO_API_KEY o BREVO_LIST_ID")

      return NextResponse.json(
        { error: "El formulario no está configurado correctamente." },
        { status: 500 },
      )
    }

    const brevoResponse = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: name
          ? {
              FIRSTNAME: name,
            }
          : undefined,
        listIds: [listId],
        updateEnabled: true,
      }),
      cache: "no-store",
    })

    if (!brevoResponse.ok) {
      const brevoError = await brevoResponse.text()
      console.error("Brevo error:", brevoResponse.status, brevoError)

      return NextResponse.json(
        {
          error:
            "No pudimos registrar tu email. Intentá nuevamente en unos minutos.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      success: true,
      message:
        "¡Gracias! Te avisaremos cuando la guía esté disponible.",
    })
  } catch (error) {
    console.error("Newsletter error:", error)

    return NextResponse.json(
      {
        error:
          "Ocurrió un error inesperado. Intentá nuevamente en unos minutos.",
      },
      { status: 500 },
    )
  }
}
