import Image from "next/image"

const training = [
  {
    institution: "Tándem",
    logo: "/images/renutre/logos/tandem.png",
    title: "Tratamiento multidisciplinario de TCA",
    text: "Formación especializada en Trastornos de la Conducta Alimentaria desde una mirada interdisciplinaria, integrando nutrición, salud mental, familia y contexto.",
  },
  {
    institution: "La Casita",
    logo: "/images/renutre/logos/la-casita.png",
    title: "Abordaje de TCA en jóvenes y adolescentes",
    text: "Formación profesional orientada a la detección temprana, prevención y comprensión de los factores que favorecen la aparición y mantenimiento de los TCA.",
  },
  {
    institution: "Sensus",
    logo: "/images/renutre/logos/sensus.png",
    title: "Psiconutrición y conducta alimentaria",
    text: "Entrenamiento en psiconutrición y abordaje de enfermedades vinculadas a la conducta alimentaria, el cuerpo y las emociones.",
  },
]

const experience = [
  "Hospital Tránsito Cáceres de Allende",
  "Sanatorio Morra",
  "Hospital Córdoba",
  "Instituto Badra",
  "AELEM",
]

export function CarlaSection() {
  return (
    <section id="carla" className="bg-sand py-24 md:py-32">
      <div className="container-renutre">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/renutre/fundadora.png"
                alt="Carla Gerónimo, Licenciada en Nutrición y fundadora de Renutre"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-6 border-l border-[#18355F]/20 pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60785E]">
                Licenciada en Nutrición
              </p>
              <h3 className="mt-2 font-serif text-4xl text-[#18355F]">
                Carla Gerónimo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#52677A]">
                Universidad Nacional de Córdoba · M.P. 3396
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#52677A]">
                Atención online y presencial en Córdoba Capital.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Sobre Carla</p>

            <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
              Acompaño procesos donde la comida, el cuerpo y el control
              empezaron a ocupar demasiado espacio.
            </h2>

            <div className="body-copy mt-8 max-w-3xl space-y-5">
              <p>
                Soy Carla Gerónimo, Licenciada en Nutrición por la Universidad
                Nacional de Córdoba y fundadora de Renutre®.
              </p>

              <p>
                Mi recorrido profesional comenzó en ámbitos clínicos y
                hospitalarios, acompañando a personas con distintas condiciones
                de salud física y mental. Esa experiencia me enseñó que la
                alimentación nunca ocurre aislada: está atravesada por una
                historia, un contexto, emociones, vínculos y formas de habitar
                el cuerpo.
              </p>

              <p>
                Con el tiempo orienté gran parte de mi práctica y formación al
                abordaje de los Trastornos de la Conducta Alimentaria, la imagen
                corporal, la conducta alimentaria y la psiconutrición.
              </p>
            </div>

            <div className="mt-12 border-y border-[#18355F]/15 py-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#60785E]">
                Trayectoria clínica, hospitalaria y docente
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {experience.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium text-[#18355F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="eyebrow mb-4">Formación especializada</p>

              <h3 className="font-serif text-4xl leading-tight text-[#18355F] md:text-5xl">
                Conducta alimentaria, TCA y psiconutrición.
              </h3>

              <p className="body-copy mt-5 max-w-3xl">
                Me formé junto a instituciones y equipos especializados en
                salud mental, conducta alimentaria, prevención y abordajes
                interdisciplinarios, incorporando herramientas para acompañar a
                adolescentes, jóvenes y familias con respeto, criterio clínico y
                sensibilidad.
              </p>

              <div className="mt-10 divide-y divide-[#18355F]/12 border-y border-[#18355F]/12">
                {training.map((item) => (
                  <article
                    key={item.institution}
                    className="grid gap-6 py-8 md:grid-cols-[170px_1fr]"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.logo}
                        alt={`Logo de ${item.institution}`}
                        width={220}
                        height={100}
                        className="max-h-16 w-auto object-contain opacity-80 grayscale"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60785E]">
                        {item.institution}
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-[#18355F]">
                        {item.title}
                      </h4>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#52677A]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <blockquote className="mt-14 max-w-3xl border-l border-[#18355F]/25 pl-6">
              <p className="font-serif text-3xl leading-tight text-[#18355F] md:text-4xl">
                No se trata de cambiar tu cuerpo. Se trata de volver a
                habitarlo con respeto, confianza y libertad.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
