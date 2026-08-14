import { ClipboardCheck, Database, GitCompareArrows, ListTodo, UserCog } from 'lucide-react'

const modules = [
  {
    icon: ClipboardCheck,
    name: 'Evaluación de Cumplimiento',
    description:
      'Un diagnóstico guiado que mide, en lenguaje claro, qué tan preparada está tu empresa frente a la Ley 21.719.',
    features: ['Cuestionario asistido', 'Puntaje de cumplimiento', 'Resultados por área'],
    featured: true,
  },
  {
    icon: Database,
    name: 'Registro de Actividades (RAT)',
    description:
      'Documenta qué datos personales tratas, con qué finalidad y con quién los compartes, usando plantillas listas.',
    features: ['Plantillas prellenadas', 'Base legal por actividad', 'Exportable'],
  },
  {
    icon: GitCompareArrows,
    name: 'Análisis de Brechas',
    description:
      'Detecta automáticamente dónde no cumples y qué necesitas corregir para alcanzar el estándar exigido.',
    features: ['Detección automática', 'Priorización por riesgo', 'Recomendaciones'],
  },
  {
    icon: ListTodo,
    name: 'Planes de Acción',
    description:
      'Convierte las brechas en tareas concretas, con responsables y plazos, para avanzar de forma ordenada.',
    features: ['Tareas priorizadas', 'Responsables y fechas', 'Seguimiento del avance'],
  },
  {
    icon: UserCog,
    name: 'Gestión de ARSOP',
    description:
      'Recibe y responde solicitudes de Acceso, Rectificación, Supresión, Oposición y Portabilidad dentro de plazo.',
    features: ['Bandeja de solicitudes', 'Flujos por tipo', 'Trazabilidad completa'],
  },
]

export function Modules() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            La plataforma
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas, en módulos claros
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada módulo cubre una parte esencial del cumplimiento y trabaja de
            forma integrada dentro de una sola plataforma.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module.name}
              className={`flex flex-col rounded-2xl border p-7 transition-all hover:shadow-lg hover:shadow-primary/5 ${
                module.featured
                  ? 'border-primary/40 bg-card ring-1 ring-primary/20'
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <module.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {module.name}
              </h3>
              <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {module.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {module.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
