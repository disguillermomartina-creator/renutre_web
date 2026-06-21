import { Clouds } from "@/components/clouds"
import { RenutreLogo } from "@/components/renutre-logo"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-sky-soft via-background to-background"
    >
      <Clouds />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-24 pt-16 text-center md:pt-20">
        <RenutreLogo variant="full" className="h-14 md:h-16" />
        <p className="mt-2 text-sm font-medium tracking-wide text-primary/80">
          La recuperación es posible
        </p>

        <h1 className="mt-8 font-serif text-4xl font-semibold leading-tight text-sky-deep text-balance md:text-6xl">
          Tu historia no termina acá.
          <br />
          Sanar es volver a escribirla.
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p className="text-pretty">
            Te damos la bienvenida a este espacio para padres y adolescentes que
            atraviesan un Trastorno de la Conducta Alimentaria (TCA).
          </p>
          <p className="text-pretty">
            Somos un punto de encuentro entre la ciencia, la empatía y el deseo
            profundo de vivir mejor.
          </p>
        </div>
      </div>
    </section>
  )
}
