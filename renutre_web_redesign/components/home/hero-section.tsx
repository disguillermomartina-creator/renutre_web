import Image from "next/image"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-[#18355F]/8">
      <div className="container-renutre grid min-h-[760px] items-center gap-10 py-12 lg:grid-cols-[.88fr_1.12fr] lg:py-16">
        <div className="relative z-10 max-w-xl lg:pr-6">
          <p className="eyebrow mb-5">La recuperación es posible</p>
          <h1 className="display-title text-[clamp(3.8rem,7vw,7.2rem)] text-primary">Volver a sentir <em className="font-normal">libertad.</em></h1>
          <p className="body-copy mt-8 text-lg">Acompañamos a adolescentes, jóvenes y familias que atraviesan dificultades en su relación con la comida, el cuerpo o un Trastorno de la Conducta Alimentaria.</p>
          <p className="body-copy mt-4">Un espacio profesional, cercano y sin juicios para comprender qué está pasando y empezar a transitarlo con más claridad y acompañamiento.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#recursos" className="rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5">Recibir la guía gratuita</a>
            <a href="#acompanamiento" className="rounded-full border border-primary px-6 py-3.5 text-center text-sm font-bold text-primary transition hover:bg-sky">Conocer el acompañamiento</a>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-[#52697C]"><MapPin size={17} className="text-forest" /> Atención online y presencial en Córdoba Capital.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.75rem] bg-sky soft-shadow lg:min-h-[650px]">
          <Image src="/images/renutre/mano-flores.jpg" alt="Una mano acaricia flores blancas bajo un cielo celeste" fill priority className="object-cover object-[55%_42%]" sizes="(min-width: 1024px) 56vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18355F]/12 via-transparent to-white/5" />
        </div>
      </div>
    </section>
  )
}
