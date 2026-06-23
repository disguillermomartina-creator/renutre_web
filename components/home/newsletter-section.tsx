"use client"

import { FormEvent, useState } from "react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function NewsletterSection() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState(
    "La guía está actualmente en preparación. Te avisaremos cuando esté disponible.",
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("loading")
    setMessage("Estamos registrando tus datos…")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          website: formData.get("website"),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "No pudimos registrar tu email.")
      }

      setStatus("success")
      setMessage(
        result.message ||
          "¡Gracias! Te avisaremos cuando la guía esté disponible.",
      )
      form.reset()
    } catch (error) {
      setStatus("error")
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá nuevamente.",
      )
    }
  }

  return (
    <section id="recursos" className="section-pad bg-sky">
      <div className="container-renutre grid gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-5">Guía gratuita + newsletter</p>

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
          aria-label="Suscripción a la guía"
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

          <div className="hidden">
            <label htmlFor="newsletter-website">Sitio web</label>
            <input
              id="newsletter-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-[#607184]">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4"
            />
            <span>
              Acepto recibir la guía y comunicaciones de Renutre®. Podré
              cancelar mi suscripción cuando lo desee.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            aria-describedby="form-note"
            className="mt-6 w-full cursor-pointer rounded-full bg-primary px-5 py-4 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? "Registrando…"
              : status === "success"
                ? "¡Ya estás en la lista!"
                : "Quiero recibir la guía"}
          </button>

          <p
            id="form-note"
            aria-live="polite"
            className={`mt-4 text-xs leading-relaxed ${
              status === "error"
                ? "text-red-700"
                : status === "success"
                  ? "text-[#426348]"
                  : "text-[#607184]"
            }`}
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}
