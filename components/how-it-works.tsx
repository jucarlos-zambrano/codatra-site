const steps = [
  {
    step: '01',
    title: 'Evalúa tu situación',
    description:
      'Responde una evaluación guiada en lenguaje simple. En minutos obtienes una fotografía clara de tu nivel de cumplimiento actual.',
  },
  {
    step: '02',
    title: 'Documenta tus datos',
    description:
      'Construye tu Registro de Actividades de Tratamiento (RAT) con plantillas y preguntas asistidas, sin partir desde una hoja en blanco.',
  },
  {
    step: '03',
    title: 'Identifica tus brechas',
    description:
      'Codatra analiza tus respuestas y detecta automáticamente los puntos donde tu empresa aún no cumple con la Ley 21.719.',
  },
  {
    step: '04',
    title: 'Ejecuta tu plan de acción',
    description:
      'Recibe un plan priorizado con tareas concretas y responsables, para avanzar de forma ordenada hasta estar preparado.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Cómo funciona
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          De la incertidumbre al cumplimiento, en cuatro pasos
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Un camino guiado y ordenado. Tú avanzas a tu ritmo y Codatra te
          acompaña en cada etapa.
        </p>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.step} className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-primary">
                  {step.step}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 items-center justify-center text-border lg:flex"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
