import Image from "next/image"

const clinicalItems = [
  "Hospital Tránsito Cáceres de Allende: experiencia en internado y consultorio externo.",
  "Sanatorio Morra: experiencia en internado y servicio de Neurorehabilitación.",
  "Hospital Córdoba: experiencia en servicios de alimentación y nutrición hospitalaria.",
  "Instituto Badra: docente del Curso de Asistentes de Nutrición y Alimentación.",
]

const trainingItems = [
  "Tándem Psicoterapia: especialización en tratamiento multidisciplinario de los Trastornos de la Conducta Alimentaria.",
  "La Casita: formación en abordaje de TCA en jóvenes y adolescentes, detección temprana, prevención y trabajo interdisciplinario.",
  "Sensus: entrenamiento en psiconutrición y conducta alimentaria, con foco en una relación más flexible, consciente y respetuosa con la comida y el cuerpo.",
  "AELEM: instructora en Educación Emocional.",
]

export function CarlaSection() {
  return (
    <section id="carla" className="section-pad bg-sand">
      <div className="container-renutre">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white soft-shadow">
              <Image
                src="/images/renutre/fundadora.png"
                fill
                alt="Carla Gerónimo, licenciada en Nutrición y fundadora de Renutre"
                className="object-cover object-top"
                sizes="(min-width:1024px) 48vw,100vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-5">Sobre Carla</p>

            <h2 className="display-title text-5xl md:text-7xl">
              Hola, soy Carla Gerónimo.
            </h2>

            <p className="mt-5 text-lg font-semibold text-primary">
              Licenciada en Nutrición — Universidad Nacional de Córdoba · M.P. 3396
            </p>

            <div className="body-copy mt-7 space-y-5">
              <p>
                Soy la fundadora de Renutre®, un espacio de acompañamiento para
                adolescentes, jóvenes y familias que atraviesan dificultades en
                su relación con la comida, el cuerpo o un Trastorno de la
                Conducta Alimentaria.
              </p>

              <p>
                Mi recorrido profesional comenzó en ámbitos clínicos y
                hospitalarios. Con el tiempo orienté gran parte de mi práctica y
                formación al abordaje de los TCA, la imagen corporal, la
                conducta alimentaria y la psiconutrición.
              </p>

              <p>
                Trabajo desde una mirada cercana e integral, entendiendo que la
                alimentación nunca ocurre de manera aislada: está atravesada por
                emociones, vínculos, historia personal y contexto familiar.
              </p>
            </div>

            <div className="mt-8 h-px w-28 bg-[#18355F]/35" />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-5">Trayectoria profesional</p>

            <h3 className="font-serif text-4xl leading-tight text-[#18355F] md:text-5xl">
              Experiencia clínica, hospitalaria y docente.
            </h3>

            <div className="body-copy mt-7 space-y-5">
              <p>
                Mi experiencia en instituciones de salud y espacios de formación
                fortaleció una forma de trabajo basada en la escucha, el criterio
                clínico y la articulación con otros profesionales.
              </p>

              <ul className="space-y-4">
                {clinicalItems.map((item) => (
                  <li key={item} className="border-t border-[#18355F]/15 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="eyebrow mb-5 mt-12">Formación especializada</p>

            <h3 className="font-serif text-4xl leading-tight text-[#18355F] md:text-5xl">
              Conducta alimentaria, TCA y psiconutrición.
            </h3>

            <div className="body-copy mt-7 space-y-5">
              <p>
                Durante los últimos años profundicé mi formación junto a equipos
                e instituciones especializadas en salud mental, conducta
                alimentaria y abordajes interdisciplinarios.
              </p>

              <ul className="space-y-4">
                {trainingItems.map((item) => (
                  <li key={item} className="border-t border-[#18355F]/15 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h4 className="mt-14 font-serif text-5xl text-[#18355F] md:text-6xl">
              Carla
            </h4>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative lg:-mt-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white soft-shadow">
                <Image
                  src="/images/renutre/carla-bosque.jpg"
                  fill
                  alt="Carla Gerónimo en un entorno natural"
                  className="object-cover"
                  sizes="(min-width:1024px) 48vw,100vw"
                />
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-xl text-center">
              <p className="font-serif text-3xl leading-tight text-[#18355F] md:text-4xl">
                No se trata de cumplir una regla perfecta. Se trata de recuperar
                confianza, presencia y libertad.
              </p>

              <div className="mx-auto mt-7 h-px w-28 bg-[#18355F]/35" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
