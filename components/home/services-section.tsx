import { HeartHandshake, Salad, UserRound, Monitor, UsersRound, MessageCircle } from "lucide-react"
import { services } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
const icons = [HeartHandshake, Salad, UserRound, Monitor, UsersRound, MessageCircle]
export function ServicesSection() {
  return (
    <section id="acompanamiento" className="section-pad bg-mist">
      <div className="container-renutre">
        <div className="mx-auto max-w-3xl text-center"><p className="eyebrow mb-4">Formas de acompañamiento</p><h2 className="display-title text-5xl md:text-6xl">Un acompañamiento que cuida, orienta y ordena.</h2><p className="body-copy mx-auto mt-6 max-w-2xl">Cada historia es distinta. El primer paso no es aplicar una fórmula, sino escuchar, comprender y construir un camino posible para esa persona y su entorno.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border bg-[#60785E]/18 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => { const Icon = icons[index]; return <article key={service.title} className="bg-[#F8FAF7] p-7 md:p-8"><Icon className="text-forest" strokeWidth={1.5} size={29}/><h3 className="mt-5 font-serif text-2xl leading-tight">{service.title}</h3><p className="body-copy mt-3 text-sm">{service.text}</p></article> })}
        </div>
        <div className="mt-10 text-center"><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:-translate-y-0.5"><MessageCircle size={19}/> Hablar por WhatsApp</a></div>
      </div>
    </section>
  )
}
