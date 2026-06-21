import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-3 pb-16 pt-4 md:pb-24">
      {/* Animated soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="animate-blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-soft/60 blur-3xl" />
        <div className="animate-blob absolute right-0 top-40 h-72 w-72 rounded-full bg-peach/50 blur-3xl [animation-delay:3s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-mint/40 blur-3xl [animation-delay:6s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] md:grid-cols-2 md:gap-8">
        {/* Copy */}
        <div className="px-2 pt-10 md:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-border backdrop-blur">
            La recuperación es posible
          </span>

          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] text-sky-deep text-balance md:text-6xl">
            Tu historia no termina acá. Sanar es volver a escribirla.
          </h1>

          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p className="text-pretty">
              Te damos la bienvenida a este espacio para padres y adolescentes
              que atraviesan un Trastorno de la Conducta Alimentaria (TCA).
            </p>
            <p className="text-pretty">
              Somos un punto de encuentro entre la ciencia, la empatía y el
              deseo profundo de vivir mejor.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary px-7 text-primary-foreground shadow-md transition-transform hover:scale-[1.03] hover:bg-primary/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Solicitar consulta
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 bg-card/60 px-7 text-primary backdrop-blur hover:bg-card"
            >
              <a href="#recursos">Descargar E-book gratis</a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative px-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border/60">
            <Image
              src="/images/hero-familia.png"
              alt="Una madre y su hija adolescente abrazadas, acompañándose"
              width={720}
              height={860}
              priority
              className="h-full w-full object-cover"
            />
            {/* Glass info card overlay */}
            <div className="glass-strong absolute bottom-4 left-4 right-4 rounded-2xl p-4">
              <p className="text-sm font-semibold text-sky-deep">
                Acompañamiento profesional y cercano
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                Ciencia y empatía para cada etapa de la recuperación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
