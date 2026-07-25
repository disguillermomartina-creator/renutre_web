:::writing{variant="standard" id="91843"}
import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "Experiencia clínica en Hospital Tránsito Cáceres, en internado y consultorio externo",
  "Experiencia en Sanatorio Morra, en internado y servicio de Neurorehabilitación",
  "Experiencia en Hospital Córdoba y en servicios de alimentación hospitalaria",
  "Especialización en el tratamiento multidisciplinario de los TCA — Tándem Psicoterapia",
  "Formación en abordaje de los TCA en jóvenes y adolescentes — La Casita",
  "Entrenamiento en psiconutrición y conducta alimentaria — Sensus",
  "Docente del Curso de Asistentes de Nutrición y Alimentación — Instituto Badra",
  "Instructora en Educación Emocional — AELEM",
]

export function CarlaSection() {
  return (
    <section id="carla" className="section-pad bg-sand">
      <div className="container-renutre grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white soft-shadow">
            <Image
              src="/images/renutre/fundadora.png"
              fill
              alt="Carla Gerónimo, licenciada en Nutrición y fundadora de Renutre"
              className="object-cover object-top"
              sizes="(min-width:1024px) 44vw,100vw"
            />
          </div>

          <div className="absolute -bottom-8 -right-5 hidden h-52 w-40 rotate-3 overflow-hidden rounded-3xl border-8 border-sand soft-shadow md:block">
            <Image
              src="/images/renutre/carla-bosque.jpg"
              fill
              alt="Carla Gerónimo en un entorno natural"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Sobre Carla</p>

          <h2 className="display-title text-5xl md:text-7xl">
            Soy Carla Gerónimo, fundadora de Renutre®.
          </h2>

          <p className="mt-5 text-lg font-semibold text-primary">
            Licenciada en Nutrición — Universidad Nacional de Córdoba · M.P. 3396
          </p>

          <div className="body-copy mt-6 space-y-4">
            <p>
              Acompaño a adolescentes, jóvenes y familias que atraviesan
              dificultades en su relación con la comida, el cuerpo o un
              Trastorno de la Conducta Alimentaria.
            </p>

            <p>
              Mi recorrido combina experiencia clínica y hospitalaria, docencia
              y formación específica en TCA, conducta alimentaria y
              psiconutrición. Trabajo desde una mirada cercana e integral,
              entendiendo que la alimentación nunca ocurre de manera aislada:
              está atravesada por emociones, vínculos, experiencias y por la
              historia de cada persona.
            </p>
          </div>

          <p className="eyebrow mb-4 mt-8">
            Trayectoria y formación especializada
          </p>

          <ul className="grid gap-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-relaxed"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-life text-white">
                  <Check size={13} />
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <p className="body-copy mt-7">
            Esta formación continua me permite acompañar cada proceso con
            sensibilidad y criterio profesional, articulando con otros
            profesionales cuando la situación lo necesita y respetando los
            tiempos y particularidades de cada persona y su familia.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-white"
          >
            Hablar con Carla
          </a>
        </div>
      </div>
    </section>
  )
}
:::
