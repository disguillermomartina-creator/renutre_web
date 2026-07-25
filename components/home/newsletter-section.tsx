"use client"

import { FormEvent, useState } from "react"

const whatsappNumber = "549351295302"

export function NewsletterSection() {
  const [message, setMessage] = useState(
    "Completá tus datos y te llevamos a WhatsApp para solicitar la guía.",
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()

    if (!email) {
      setMessage("Ingresá tu email para poder solicitar la guía.")
      return
    }

    const whatsappText = [
      "Hola Renutre, quiero recibir la guía gratuita para familias.",
      "",
      `Nombre: ${name || "No indicado"}`,
      `Email: ${email}`,
      "",
      "También me interesa recibir recursos y reflexiones de renutre® sobre TCA, conducta alimentaria y acompañamiento familiar.",
    ].join("\n")

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappText,
    )}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    setMessage(
      "Te abrimos WhatsApp con el mensaje preparado. Solo tenés que enviarlo.",
    )

    form.reset()
  }

  return (
    <section id="recursos" className="section-pad bg-sky">
      <div className="container-renutre grid gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-5">Guía gratuita + recursos</p>

          <h2 className="display-title text-5xl md:text-7xl">
            Una guía para acompañar con más calma y claridad.
          </h2>

          <p className="body-copy mt-6 max-w-2xl">
            Estamos preparando una guía gratuita para madres, padres y familias
            que necesitan comprender qué puede estar pasando y cómo empezar a
            acompañar sin perderse en el intento.
          </p>

          <ul className="body-copy mt-7 grid gap-2 text-sm sm:grid-cols-2">
            <li>• Comprender qué es y qué no es un TCA</li>
            <li>• Reconocer señales que merecen atención</li>
            <li>• Acompañar sin que todo se convierta en control</li>
            <li>• Cuidar el vínculo familiar</li>
            <li>• Cuidar también la propia salud emocional</li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="self-center rounded-[2rem] bg-white p-7 soft-shadow md:p-9"
          aria-label="Solicitud de guía por WhatsApp"
        >
          <label htmlFor="newsletter-name" className="text-sm font-bold">
            Nombre
          </label>

          <input
            id="newsletter-name"
            name="name"
            type="text"
            autoComplete="given-name"
            maxLength={80}
            className="mt-2 w-full rounded-2xl border bg-[#F8FAF7] px-4 py-3.5"
            placeholder="Tu nombre"
          />

          <label
            htmlFor="newsletter-email"
            className="mt-5 block text-sm font-bold"
          >
            Email
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="mt-2 w-full rounded-2xl border bg-[#F8FAF7] px-4 py-3.5"
            placeholder="tu@email.com"
          />

          <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-[#607184]">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4"
            />

            <span>
              Acepto enviar estos datos por WhatsApp para recibir la guía y
              comunicaciones de renutre®.
            </span>
          </label>

          <button
            type="submit"
            aria-describedby="form-note"
            className="mt-6 w-full cursor-pointer rounded-full bg-primary px-5 py-4 font-bold text-white transition hover:opacity-90"
          >
            Solicitar la guía por WhatsApp
          </button>

          <p
            id="form-note"
            aria-live="polite"
            className="mt-4 text-xs leading-relaxed text-[#607184]"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}
