import Image from "next/image"

const clinicalExperience = [
  {
    title: "Hospital Tránsito Cáceres de Allende",
    text: "Experiencia en internado y consultorio externo, acompañando pacientes con distintas necesidades clínicas.",
  },
  {
    title: "Sanatorio Morra",
    text: "Experiencia en internado y servicio de Neurorehabilitación, en contacto con equipos de salud mental y abordajes interdisciplinarios.",
  },
  {
    title: "Hospital Córdoba",
    text: "Experiencia en servicios hospitalarios y acompañamiento nutricional en contextos clínicos.",
  },
  {
    title: "Instituto Badra",
    text: "Docente en el Curso de Asistentes de Nutrición y Alimentación.",
  },
]

const specializedTraining = [
  {
    institution: "Tándem",
    logo: "/images/renutre/logos/tandem.png",
    title: "Especialización en tratamiento multidisciplinario de TCA",
    description:
      "Formación orientada al abordaje de los Trastornos de la Conducta Alimentaria desde una mirada interdisciplinaria, integrando nutrición, salud mental, contexto familiar y acompañamiento centrado en la persona.",
  },
  {
    institution: "La Casita",
    logo: "/images/renutre/logos/la-casita.png",
    title: "Abordaje de TCA en jóvenes y adolescentes",
    description:
      "Formación profesional enfocada en comprender los factores que favorecen la aparición y mantenimiento de los TCA, la detección temprana, la prevención y el trabajo coordinado entre profesionales, pacientes y familias.",
  },
  {
    institution: "Sensus",
    logo: "/images/renutre/logos/sensus.png",
    title: "Psiconutrición y conducta alimentaria",
    description:
      "Entrenamiento en psiconutrición y abordaje de enfermedades vinculadas a la conducta alimentaria, promoviendo una relación más flexible, consciente y respetuosa con la comida, el cuerpo y las emociones.",
  },
]

export function CarlaSection() {
  return (
    <section id="carla" className="section-pad bg-sand">
      <div className="container-renutre">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="relative">
            <div className="sticky top-28">
              <div className="overflow-hidden rounded-[2rem] bg-white soft-shadow">
                <Image
                  src="/images/renutre/fundadora.png"
                  alt="Carla Gerónimo, Licenciada en Nutrición y fundadora de Renutre"
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-white/85 p-6 soft-shadow">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#60785E]">
                  Licenciada en Nutrición
                </p>

                <h3 className="mt-2 font-serif text-3xl text-[#18355F]">
                  Carla Gerónimo
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#52677A]">
                  Universidad Nacional de Córdoba · M.P. 3396
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#52677A]">
                  Atención online y presencial en Córdoba Capital.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Sobre Carla</p>

            <h2 className="display-title text-5xl md:text-7xl">
              Acompaño procesos donde la comida, el cuerpo y el control
              empezaron a ocupar demasiado espacio.
            </h2>

            <div className="body-copy mt-7 space-y-5">
              <p>
                Soy Carla Gerónimo, Licenciada en Nutrición por la Universidad
                Nacional de Córdoba y fundadora de Renutre®.
              </p>

              <p>
                Mi recorrido profesional comenzó en ámbitos clínicos y
                hospitalarios, donde acompañé a personas con distintas
                condiciones de salud física y mental desde una mirada integral.
                Esa experiencia me permitió comprender que la alimentación nunca
                ocurre aislada: siempre está atravesada por una historia, un
                contexto, emociones, vínculos y formas de habitar el cuerpo.
              </p>

              <p>
                Con el tiempo orienté gran parte de mi práctica y formación al
                abordaje de los Trastornos de la Conducta Alimentaria, la imagen
                corporal, la conducta alimentaria y la psiconutrición.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[#18355F]/10 bg-white/75 p-6 md:p-8">
              <p className="eyebrow mb-5">Trayectoria clínica y docente</p>

              <div className="grid gap-4 md:grid-cols-2">
                {clinicalExperience.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl bg-[#F8FAF7] p-5"
                  >
                    <h3 className="text-base font-bold text-[#18355F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#52677A]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
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

              <div className="mt-8 grid gap-5">
                {specializedTraining.map((item) => (
                  <article
                    key={item.institution}
                    className="grid gap-6 rounded-[1.75rem] border border-[#18355F]/10 bg-white p-6 soft-shadow md:grid-cols-[190px_1fr] md:items-center"
                  >
                    <div className="flex min-h-32 items-center justify-center rounded-2xl bg-[#F8FAF7] p-5">
                      <Image
                        src={item.logo}
                        alt={`Logo de ${item.institution}`}
                        width={240}
                        height={120}
                        className="max-h-24 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#60785E]">
                        {item.institution}
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-[#18355F]">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-[#52677A]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] bg-[#18355F] p-8 text-white md:p-10">
              <p className="font-serif text-3xl leading-tight md:text-4xl">
                No se trata de cambiar tu cuerpo. Se trata de volver a habitarlo
                con respeto, confianza y libertad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
