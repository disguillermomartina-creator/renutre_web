import Image from "next/image"
const principles = ["Ciencia y actualización profesional", "Escucha sin juicios", "Trabajo con la familia", "Respeto por los tiempos"]
export function ApproachSection() {
  return (
    <section id="enfoque" className="bg-sky">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-[max(5vw,4rem)] lg:py-28"><div className="max-w-xl"><p className="eyebrow mb-5">Nuestro enfoque</p><h2 className="display-title text-5xl md:text-7xl">No se trata solamente de comer. Se trata de recuperar una vida que vuelva a sentirse propia.</h2><p className="body-copy mt-7">En Renutre® entendemos que una relación difícil con la comida no ocurre de manera aislada. Puede afectar la forma de habitar el cuerpo, compartir con otros, disfrutar y vivir la cotidianeidad.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{principles.map((p)=><div key={p} className="border-t border-primary/25 pt-3 text-sm font-semibold">{p}</div>)}</div></div></div>
        <div className="relative min-h-[520px] lg:min-h-[820px]"><Image src="/images/renutre/petalos-cielo.jpg" fill alt="Manos elevadas al cielo lanzando pétalos de colores" className="object-cover object-center" sizes="(min-width:1024px) 50vw,100vw" /></div>
      </div>
    </section>
  )
}
