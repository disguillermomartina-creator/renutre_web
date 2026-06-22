import Image from "next/image"
const stories = [
  { image:"/images/renutre/sonrisas.jpg", title:"Volver a compartir", text:"Sin que cada encuentro termine organizado alrededor de la comida, el miedo o la preocupación." },
  { image:"/images/renutre/lluvia-mano.jpg", title:"Volver a sentir", text:"El agua, el aire, el movimiento y las emociones sin tener que controlarlo todo." },
  { image:"/images/renutre/correr.jpg", title:"Volver a habitar el cuerpo", text:"No como un proyecto que hay que corregir, sino como un lugar que merece cuidado y escucha." },
]
export function LifeSection() {
  return (
    <section className="section-pad bg-[#FCFDFB]">
      <div className="container-renutre"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4">Volver a la vida</p><h2 className="display-title max-w-3xl text-5xl md:text-7xl">Recuperarse también es volver a esto.</h2></div><p className="font-serif text-2xl italic text-primary">Volver a la mesa. Una y otra vez.</p></div>
        <div className="mt-12 grid auto-rows-[210px] gap-5 md:grid-cols-12 md:auto-rows-[180px]">
          {stories.map((s,i)=><article key={s.title} className={`group relative overflow-hidden rounded-[2rem] ${i===0?"md:col-span-5 md:row-span-2":i===1?"md:col-span-4 md:row-span-3":"md:col-span-3 md:row-span-2"}`}><Image src={s.image} fill alt="" className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:768px) 45vw,100vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#0E253F]/85 via-[#0E253F]/5 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="font-serif text-3xl">{s.title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">{s.text}</p></div></article>)}
          <div className="relative hidden overflow-hidden rounded-[2rem] md:col-span-3 md:row-span-1 md:block"><Image src="/images/renutre/auto-movimiento.jpg" fill alt="" className="object-cover" /></div>
          <div className="relative hidden overflow-hidden rounded-[2rem] md:col-span-5 md:row-span-1 md:block"><Image src="/images/renutre/oreja-luz.jpg" fill alt="" className="object-cover object-center" /></div>
          <div className="relative hidden overflow-hidden rounded-[2rem] md:col-span-4 md:row-span-1 md:block"><Image src="/images/renutre/salto-campo.jpg" fill alt="" className="object-cover object-[50%_45%]" /></div>
        </div>
      </div>
    </section>
  )
}
