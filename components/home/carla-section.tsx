```tsx
import Image from "next/image"

const experience = [
  {
    institution: "Hospital Tránsito Cáceres de Allende",
    detail:
      "Experiencia en internado y consultorio externo, acompañando pacientes con distintas necesidades clínicas.",
  },
  {
    institution: "Sanatorio Morra",
    detail:
      "Experiencia en internado y Neurorehabilitación, dentro de un contexto vinculado a la salud mental y al trabajo interdisciplinario.",
  },
  {
    institution: "Hospital Córdoba",
    detail:
      "Experiencia profesional en servicios de alimentación y nutrición hospitalaria.",
  },
  {
    institution: "Instituto Badra",
    detail:
      "Docente del Curso de Asistentes de Nutrición y Alimentación.",
  },
]

const training = [
  {
    institution: "Tándem Psicoterapia",
    title: "Tratamiento multidisciplinario de los TCA",
    text:
      "Formación especializada en el abordaje de los Trastornos de la Conducta Alimentaria desde una perspectiva interdisciplinaria, integrando nutrición, salud mental, contexto familiar y acompañamiento centrado en la persona.",
  },
  {
    institution: "La Casita",
    title: "Abordaje de los TCA en jóvenes y adolescentes",
    text:
      "Formación orientada a comprender los factores que favorecen la aparición y el mantenimiento de los TCA, la detección temprana, la prevención y el trabajo coordinado entre profesionales, pacientes y familias.",
  },
  {
    institution: "Sensus",
    title: "Psiconutrición y conducta alimentaria",
    text:
      "Entrenamiento en psiconutrición y enfermedades vinculadas a la conducta alimentaria, promoviendo una relación más flexible, consciente y respetuosa con la comida, el cuerpo y las emociones.",
  },
]

export function CarlaSection() {
  return (
    <section
      id="carla"
      className="overflow-hidden bg-[#F3EBDD] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Presentación principal */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
              Sobre Carla
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-[2.75rem] leading-[0.98] tracking-[-0.03em] text-[#18355F] sm:text-6xl lg:text-7xl">
              Acompaño procesos donde la comida, el cuerpo y el control empezaron
              a ocupar demasiado espacio.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#52677A] md:text-lg">
              <p>
                Soy Carla Gerónimo, Licenciada en Nutrición por la Universidad
                Nacional de Córdoba, M.P. 3396, y fundadora de Renutre®.
              </p>

              <p>
                Mi recorrido comenzó en ámbitos clínicos y hospitalarios,
                acompañando a personas con diferentes condiciones de salud física
                y mental. Esa experiencia me enseñó que la alimentación nunca
                ocurre de manera aislada: está atravesada por una historia, un
                contexto, emociones, vínculos y formas de habitar el cuerpo.
              </p>

              <p>
                Con el tiempo orienté gran parte de mi práctica y formación al
                abordaje de los Trastornos de la Conducta Alimentaria, la imagen
                corporal, la psiconutrición y el acompañamiento de adolescentes,
                jóvenes y familias.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#18355F]/15 pt-6">
              <span className="text-sm font-semibold text-[#18355F]">
                Universidad Nacional de Córdoba
              </span>
              <span className="text-sm font-semibold text-[#18355F]">
                M.P. 3396
              </span>
              <span className="text-sm font-semibold text-[#18355F]">
                Atención online y presencial
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#DDECF3] md:-left-10 md:-top-10 md:h-44 md:w-44" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/renutre/fundadora.png"
                  alt="Carla Gerónimo, Licenciada en Nutrición y fundadora de Renutre"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              <div className="relative -mt-8 ml-5 max-w-sm border-l-2 border-[#60785E] bg-[#F3EBDD] px-5 py-4 sm:ml-10">
                <p className="font-serif text-2xl leading-tight text-[#18355F]">
                  “La recuperación también se construye en la forma en que
                  volvemos a relacionarnos con nosotros mismos.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trayectoria */}
        <div className="mt-24 border-y border-[#18355F]/15 py-10 md:mt-32 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
                Trayectoria profesional
              </p>

              <h3 className="mt-4 max-w-md font-serif text-4xl leading-tight text-[#18355F] md:text-5xl">
                Experiencia clínica, hospitalaria y docente.
              </h3>
            </div>

            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {experience.map((item) => (
                <article
                  key={item.institution}
                  className="border-t border-[#18355F]/15 pt-5"
                >
                  <h4 className="text-base font-bold text-[#18355F]">
                    {item.institution}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#52677A]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Formación especializada */}
        <div className="mt-24 md:mt-32">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
                Formación especializada
              </p>

              <h3 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-[#18355F] md:text-5xl">
                Conducta alimentaria, TCA y psiconutrición.
              </h3>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#52677A]">
                Elegí profundizar mi formación junto a instituciones
                especializadas en salud mental, conducta alimentaria y abordajes
                interdisciplinarios, para acompañar cada proceso con mayor
                comprensión, criterio clínico y sensibilidad.
              </p>
            </div>

            <div className="border-t border-[#18355F]/15">
              {training.map((item, index) => (
                <article
                  key={item.institution}
                  className="grid gap-4 border-b border-[#18355F]/15 py-8 md:grid-cols-[52px_1fr] md:gap-7 md:py-10"
                >
                  <span className="font-serif text-3xl text-[#8FA48A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#60785E]">
                      {item.institution}
                    </p>

                    <h4 className="mt-3 font-serif text-2xl leading-tight text-[#18355F] md:text-3xl">
                      {item.title}
                    </h4>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#52677A] md:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Enfoque */}
        <div className="mt-24 grid gap-10 bg-[#DDECF3] px-6 py-12 sm:px-10 md:mt-32 md:px-14 md:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
            Mi enfoque
          </p>

          <div>
            <blockquote className="max-w-4xl font-serif text-3xl leading-tight text-[#18355F] md:text-5xl">
              No se trata de cumplir una regla perfecta. Se trata de recuperar
              confianza, presencia y libertad.
            </blockquote>

            <p className="mt-7 max-w-3xl text-base leading-7 text-[#52677A]">
              En Renutre® trabajo desde una nutrición que no se reduce a
              indicaciones alimentarias. Busco comprender qué está atravesando
              cada persona y construir herramientas posibles para su vida real,
              respetando sus tiempos y articulando con otros profesionales cuando
              el proceso lo necesita.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```
