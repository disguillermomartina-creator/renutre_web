import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ConsultaSection() {
  return (
    <section
      id="consulta"
      className="relative overflow-hidden bg-gradient-to-b from-background to-sky-soft py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Image
          src="/images/rostro-floral-1.png"
          alt="Ilustración de un rostro sereno rodeado de flores"
          width={160}
          height={160}
          className="mx-auto h-28 w-28 object-contain md:h-36 md:w-36"
        />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
          Solicitá una consulta o pedí más información y empezá un camino
          distinto, real y acompañado.
        </p>

        <h2 className="mx-auto mt-8 max-w-2xl font-serif text-3xl font-semibold leading-tight text-sky-deep text-balance md:text-4xl">
          Este dolor no te define. Esta historia no termina así.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
          Estás invitado a escribir un nuevo capítulo. Desde renutre® estamos
          acá para acompañarte en cada página.
        </p>

        <Button
          size="lg"
          className="mt-8 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
        >
          Solicitar consulta
        </Button>
      </div>
    </section>
  )
}
