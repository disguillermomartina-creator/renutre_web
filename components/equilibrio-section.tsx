import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EquilibrioSection() {
  return (
    <section id="enfoque" className="bg-sky-soft py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        {/* Photo */}
        <div className="order-1 md:order-none">
          <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
            <Image
              src="/images/fundadora.png"
              alt="Fundadora de renutre"
              width={640}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Equilibrio para vivir mejor
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-sky-deep text-balance md:text-4xl">
            Sé amable contigo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            Queremos que logres un equilibrio para que vivas mejor y más feliz,
            sin perder el disfrute y tu autenticidad, que es lo que te hace
            único.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Fundé renutre® porque considero que tu salud y bienestar son
            innegociables. Hoy vivimos en un momento de inmensa confusión sobre
            qué elegir para mejorar nuestro estilo de vida, por eso quería
            ofrecer un servicio simple, accesible y efectivo para que las
            personas logren sentirse bien consigo mismas.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
            >
              Comienza ahora
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 bg-transparent px-7 text-primary hover:bg-primary/10"
            >
              <a href="#dudas">Ponte en contacto</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
