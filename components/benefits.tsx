import { Sparkles, PiggyBank, ShieldCheck, Gauge, FileCheck2, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Sparkles,
    title: 'Sin jerga legal',
    description:
      'Traducimos la ley a un lenguaje simple. Tomas decisiones informadas sin necesidad de un abogado a tu lado.',
  },
  {
    icon: PiggyBank,
    title: 'Más económico que una consultora',
    description:
      'Un costo predecible y accesible para PyMEs, sin honorarios por hora ni proyectos interminables.',
  },
  {
    icon: Gauge,
    title: 'Avances rápidos',
    description:
      'Obtienes un diagnóstico inicial en minutos y comienzas a cerrar brechas desde el primer día.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos riesgo de sanciones',
    description:
      'Preparas a tu empresa de forma ordenada para reducir la exposición a multas y fiscalizaciones.',
  },
  {
    icon: FileCheck2,
    title: 'Cumplimiento demostrable',
    description:
      'Generas evidencia y documentación que respalda las decisiones y el trabajo realizado por tu empresa.',
  },
  {
    icon: HeartHandshake,
    title: 'Mayor confianza',
    description:
      'Muestras a clientes y colaboradores que cuidas sus datos, fortaleciendo tu reputación.',
  },
]

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Beneficios
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Prepararte para la Ley 21.719, sin complicarte
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Codatra combina simplicidad y rigor para que tu empresa cumpla con
          tranquilidad y a su propio ritmo.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <benefit.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
