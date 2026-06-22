import { Button } from "@/components/ui/button"

export function CaminoSection() {
  return (
    <section id="nosotros" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        {/* Yellow CTA card */}
        <div className="flex flex-col justify-between rounded-4xl bg-sunny p-8 text-sunny-foreground md:p-10">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Este camino hacia tu bienestar
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-sunny-foreground/80">
            Empezá hoy con acompañamiento profesional, cercano y pensado para
            cada etapa de la recuperación.
          </p>
          <Button
            size="lg"
            className="mt-8 w-fit rounded-full bg-card px-7 text-sky-deep hover:bg-card/90"
          >
            Solicitar consulta
          </Button>
        </div>

        {/* Dudas card */}
        <div
          id="dudas"
          className="flex flex-col justify-between rounded-4xl border border-border bg-card p-8 md:p-10"
        >
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-sky-deep text-balance md:text-4xl">
              ¿Aún con dudas?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              ¿Será lo que necesito? ¿Es adecuado para mí? ¿Lograré mis
              objetivos con el programa? Si estás con muchas inquietudes antes
              de comenzar, contáctate ahora y te daremos toda la información que
              necesites.
            </p>
          </div>
          <Button
            size="lg"
            className="mt-8 w-fit rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
          >
            Solicitar consulta
          </Button>
        </div>
      </div>
    </section>
  )
}
