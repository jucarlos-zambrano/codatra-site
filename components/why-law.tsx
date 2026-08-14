import { Scale, Users, TrendingUp, AlertTriangle } from 'lucide-react'

const points = [
  {
    icon: Scale,
    title: 'Nuevas obligaciones legales',
    description:
      'La Ley 21.719 moderniza la protección de datos personales en Chile y exige a las empresas tratar la información de personas con reglas claras y responsabilidad demostrable.',
  },
  {
    icon: Users,
    title: 'Aplica a casi todas las empresas',
    description:
      'Si manejas datos de clientes, trabajadores o proveedores —correos, RUT, contratos o remuneraciones— la ley te aplica, sin importar el tamaño de tu PyME.',
  },
  {
    icon: AlertTriangle,
    title: 'Sanciones relevantes',
    description:
      'El incumplimiento puede derivar en multas significativas y en la fiscalización de una nueva Agencia de Protección de Datos. Prepararse a tiempo reduce el riesgo.',
  },
  {
    icon: TrendingUp,
    title: 'Confianza como ventaja',
    description:
      'Cumplir no es solo evitar multas: demuestra a tus clientes y socios que tu empresa cuida sus datos, lo que fortalece tu reputación y tus relaciones comerciales.',
  },
]

export function WhyLaw() {
  return (
    <section
      id="por-que-importa"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Contexto
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Por qué la nueva ley de protección de datos importa para tu empresa
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          La Ley 21.719 cambia la forma en que las organizaciones en Chile deben
          gestionar los datos personales. Entender qué implica es el primer paso
          para prepararte con tranquilidad.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {points.map((point) => (
          <article
            key={point.title}
            className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <point.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {point.title}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {point.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
