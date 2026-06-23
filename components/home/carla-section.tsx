import Image from "next/image"

const clinicalExperience = [
{
institution: "Hospital Tránsito Cáceres de Allende",
description:
"Experiencia en internado y consultorio externo, acompañando a personas con distintas necesidades clínicas y nutricionales.",
},
{
institution: "Sanatorio Morra",
description:
"Experiencia en internado y en el servicio de Neurorehabilitación, dentro de un contexto vinculado a la salud mental y al trabajo interdisciplinario.",
},
{
institution: "Hospital Córdoba",
description:
"Experiencia profesional en servicios de alimentación, nutrición hospitalaria y acompañamiento en contextos clínicos.",
},
{
institution: "Instituto Badra",
description:
"Docente del Curso de Asistentes de Nutrición y Alimentación durante 2026.",
},
]

const specializedTraining = [
{
institution: "Tándem Psicoterapia",
title: "Tratamiento multidisciplinario de los TCA",
description:
"Especialización orientada al abordaje de los Trastornos de la Conducta Alimentaria desde una perspectiva multidisciplinaria, integrando nutrición, salud mental, contexto familiar y acompañamiento centrado en la persona.",
},
{
institution: "La Casita",
title: "Abordaje de los TCA en jóvenes y adolescentes",
description:
"Formación profesional enfocada en comprender los factores que intervienen en la aparición y el mantenimiento de los TCA, la detección temprana, la prevención y el trabajo coordinado entre profesionales, pacientes y familias.",
},
{
institution: "Sensus",
title: "Psiconutrición y conducta alimentaria",
description:
"Entrenamiento en psiconutrición y abordaje de enfermedades vinculadas a la conducta alimentaria, promoviendo una relación más flexible, consciente y respetuosa con la comida, el cuerpo y las emociones.",
},
]

export function CarlaSection() {
return ( <section
   id="carla"
   className="overflow-hidden bg-[#F3EBDD] py-20 sm:py-24 lg:py-32"
 > <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12"> <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"> <div> <div className="relative mx-auto max-w-[560px]"> <div
             aria-hidden="true"
             className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#DDECF3] sm:-left-8 sm:-top-8 sm:h-40 sm:w-40"
           />

```
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

          <div className="relative -mt-6 ml-5 max-w-md bg-[#F3EBDD] px-5 py-5 sm:ml-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#60785E]">
              Licenciada en Nutrición
            </p>

            <h3 className="mt-2 font-serif text-3xl leading-tight text-[#18355F]">
              Carla Gerónimo
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#52677A]">
              Universidad Nacional de Córdoba · M.P. 3396
            </p>

            <p className="mt-1 text-sm leading-6 text-[#52677A]">
              Atención online y presencial en Córdoba Capital.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
          Sobre Carla
        </p>

        <h2 className="mt-5 max-w-4xl font-serif text-[2.8rem] leading-[0.98] tracking-[-0.035em] text-[#18355F] sm:text-6xl lg:text-7xl">
          Acompaño procesos donde la comida, el cuerpo y el control
          empezaron a ocupar demasiado espacio.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#52677A] md:text-lg">
          <p>
            Soy Carla Gerónimo, Licenciada en Nutrición por la Universidad
            Nacional de Córdoba, M.P. 3396, y fundadora de Renutre®.
          </p>

          <p>
            Mi recorrido profesional comenzó en ámbitos clínicos y
            hospitalarios, acompañando a personas con distintas condiciones
            de salud física y mental. Esa experiencia me enseñó que la
            alimentación nunca ocurre de manera aislada: está atravesada por
            una historia, un contexto, emociones, vínculos y formas de
            habitar el cuerpo.
          </p>

          <p>
            Con el tiempo orienté gran parte de mi práctica y formación al
            abordaje de los Trastornos de la Conducta Alimentaria, la imagen
            corporal, la conducta alimentaria y la psiconutrición.
          </p>

          <p>
            Hoy acompaño a adolescentes, jóvenes y familias desde una mirada
            cercana, profesional e interdisciplinaria, respetando los
            tiempos, necesidades y particularidades de cada proceso.
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
            Nutrición clínica
          </span>

          <span className="text-sm font-semibold text-[#18355F]">
            Formación especializada en TCA
          </span>
        </div>
      </div>
    </div>

    <div className="mt-24 border-y border-[#18355F]/15 py-12 md:mt-32 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
            Trayectoria profesional
          </p>

          <h3 className="mt-4 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-[#18355F] md:text-5xl">
            Experiencia clínica, hospitalaria y docente.
          </h3>

          <p className="mt-6 max-w-md text-base leading-7 text-[#52677A]">
            Mi recorrido en instituciones de salud y educación fortaleció
            una forma de trabajo basada en la escucha, el criterio clínico y
            la articulación con otros profesionales.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {clinicalExperience.map((item) => (
            <article
              key={item.institution}
              className="border-t border-[#18355F]/15 pt-5"
            >
              <h4 className="text-lg font-bold leading-tight text-[#18355F]">
                {item.institution}
              </h4>

              <p className="mt-3 text-sm leading-7 text-[#52677A]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-24 md:mt-32">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
            Formación especializada
          </p>

          <h3 className="mt-4 max-w-lg font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-[#18355F] md:text-5xl">
            Conducta alimentaria, TCA y psiconutrición.
          </h3>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#52677A]">
            Durante los últimos años orienté gran parte de mi desarrollo
            profesional al estudio y abordaje de los Trastornos de la
            Conducta Alimentaria, la relación con la comida y los factores
            emocionales que influyen en ella.
          </p>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#52677A]">
            Me formé junto a equipos interdisciplinarios y referentes
            especializados en conducta alimentaria, psiconutrición y salud
            mental, incorporando herramientas para acompañar a adolescentes,
            jóvenes y familias.
          </p>
        </div>

        <div className="border-t border-[#18355F]/15">
          {specializedTraining.map((item, index) => (
            <article
              key={item.institution}
              className="grid gap-4 border-b border-[#18355F]/15 py-8 md:grid-cols-[64px_1fr] md:gap-8 md:py-10"
            >
              <span className="font-serif text-3xl text-[#8FA48A]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#60785E]">
                  {item.institution}
                </p>

                <h4 className="mt-3 max-w-2xl font-serif text-2xl leading-tight text-[#18355F] md:text-3xl">
                  {item.title}
                </h4>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#52677A] md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-24 bg-[#DDECF3] px-6 py-12 sm:px-10 md:mt-32 md:px-14 md:py-16 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60785E]">
          Mi enfoque
        </p>

        <div>
          <blockquote className="max-w-4xl font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-[#18355F] md:text-5xl">
            No se trata de cumplir una regla perfecta. Se trata de recuperar
            confianza, presencia y libertad.
          </blockquote>

          <p className="mt-7 max-w-3xl text-base leading-7 text-[#52677A]">
            En Renutre® trabajo desde una nutrición que no se reduce a
            indicaciones alimentarias. Busco comprender qué está atravesando
            cada persona y construir herramientas posibles para su vida
            real, respetando sus tiempos y articulando con otros
            profesionales cuando el proceso lo necesita.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

)
}
