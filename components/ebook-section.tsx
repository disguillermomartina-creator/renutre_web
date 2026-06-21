import Image from "next/image"
import { BookOpen, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const puntos = [
  "Entender qué es (y qué no) un TCA",
  "Primeros pasos para acompañar sin controlar",
  "Herramientas emocionales para vos como madre/padre",
  "Cómo cuidar tu salud mental mientras acompañás",
]

export function EbookSection() {
  return (
    <section id="recursos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Visual */}
            <div className="relative flex items-center justify-center bg-sky-soft p-10 md:p-12">
              <Image
                src="/images/ebook.png"
                alt="Portada del E-book para padres: Acompañar sin perderte"
                width={420}
                height={520}
                className="h-auto w-full max-w-xs drop-shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                <BookOpen className="size-3.5" />
                Descargá gratis el E-book para padres
              </div>

              <h2 className="mt-5 font-serif text-2xl font-semibold leading-snug text-sky-deep text-balance md:text-3xl">
                Acompañar sin perderte: primeros pasos para sostener a tu hija
                en la recuperación de un TCA
              </h2>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                  ¿Qué vas a encontrar?
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {puntos.map((punto) => (
                    <li key={punto} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">
                        {punto}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-secondary/60 p-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                  Resumen
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Cuando una hija se enfrenta a un TCA, toda la familia entra en
                  crisis. Esta es una pequeña guía inicial para padres que
                  enfrentan el desafío de acompañar a una hija con TCA.
                </p>
              </div>

              <Button
                size="lg"
                className="mt-7 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Download className="size-4" />
                Descargar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
