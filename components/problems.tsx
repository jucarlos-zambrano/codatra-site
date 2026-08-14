import { HelpCircle, FileWarning, Clock, DollarSign, ListChecks, MailQuestion } from 'lucide-react'

const problems = [
  {
    icon: HelpCircle,
    title: '“No sé por dónde empezar”',
    description:
      'La ley usa lenguaje técnico y no queda claro qué debe hacer una PyME en concreto para cumplir.',
  },
  {
    icon: FileWarning,
    title: 'No hay registro de los datos',
    description:
      'Las empresas no tienen documentado qué datos personales tratan, para qué los usan ni con quién los comparten.',
  },
  {
    icon: DollarSign,
    title: 'Las consultoras son caras',
    description:
      'Contratar asesoría legal especializada resulta costoso y poco escalable para equipos pequeños.',
  },
  {
    icon: ListChecks,
    title: 'No se sabe qué falta',
    description:
      'Sin un diagnóstico claro, es imposible identificar las brechas ni priorizar qué resolver primero.',
  },
  {
    icon: MailQuestion,
    title: 'Solicitudes sin proceso',
    description:
      'Cuando una persona ejerce sus derechos (ARSOP), no existe un procedimiento definido para responder a tiempo.',
  },
  {
    icon: Clock,
    title: 'El tiempo corre',
    description:
      'La fecha de exigibilidad se acerca y postergar la preparación aumenta el riesgo y la presión.',
  },
]

export function Problems() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            El problema
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Los desafíos que enfrentan las PyMEs para cumplir
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Reconocemos los obstáculos más comunes. Codatra fue diseñado para
            resolver cada uno de ellos de forma simple.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <problem.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
