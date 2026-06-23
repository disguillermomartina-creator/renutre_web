import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const cards = [
  { image: "/images/renutre/sonrisas.jpg", title: "Estoy acompañando a mi hija o hijo", text: "Necesito comprender qué está pasando y cómo estar presente sin quedar atrapado entre el miedo, la vigilancia y el control." },
  { image: "/images/renutre/rostro-sol.jpg", title: "Siento que algo cambió en mi relación con la comida", text: "Comer, mirarme o habitar mi cuerpo dejó de sentirse simple. Quiero volver a sentir más calma y libertad." },
  { image: "/images/renutre/pies-margaritas.jpg", title: "No sé si necesitamos ayuda", text: "Hay señales que generan preocupación, pero todavía no sabemos cómo nombrar lo que está pasando." },
]

export function RecognitionSection() {
  return (
    <section id="reconocerse" className="section-pad bg-[#FCFDFB]">
      <div className="container-renutre">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Reconocer lo que pasa</p>
            <h2 className="display-title text-5xl md:text-6xl">A veces no empieza con un diagnóstico.</h2>
          </div>
          <div className="body-copy max-w-2xl text-lg">
            <p>Puede empezar con comidas que se vuelven cada vez más tensas. Con reglas, miedos o pensamientos que empiezan a ocupar demasiado espacio. Con culpa después de comer. Con la necesidad de controlar.</p>
            <p className="mt-4 font-semibold text-primary">No hace falta tener todas las respuestas para pedir orientación.</p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <article key={card.title} className={`group overflow-hidden rounded-[2rem] bg-white soft-shadow ${index === 1 ? "md:mt-12" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={card.image} fill alt="" className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:768px) 33vw,100vw" /></div>
              <div className="p-6 md:p-7"><h3 className="font-serif text-2xl leading-tight text-primary">{card.title}</h3><p className="body-copy mt-3 text-sm">{card.text}</p><a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Pedir orientación <ArrowUpRight size={16} /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
