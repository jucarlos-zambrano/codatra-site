import { ArrowRight, CheckCircle2, ShieldCheck, FileText, GitCompareArrows } from 'lucide-react'

const heroChecklist = [
  'Sin conocimientos legales previos',
  'Guiado paso a paso',
  'Pensado para PyMEs chilenas',
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Vigencia total: 1 de diciembre de 2026
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Cumplimiento de la{' '}
              <span className="bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
                Ley 21.719
              </span>{' '}
              para PyMEs, sin ser experto legal.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Codatra es la plataforma de software que ayuda a tu empresa a
              entender, preparar y demostrar el cumplimiento de la nueva Ley de
              Protección de Datos Personales en Chile. En lenguaje simple y con
              un plan claro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Solicitar una Demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#piloto"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Unirse al Programa Piloto
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {heroChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Estado de cumplimiento
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Empresa demo · 48 empleados
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  68% listo
                </span>
              </div>

              <div className="mt-4">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-chart-4" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { icon: ShieldCheck, label: 'Evaluación de cumplimiento', value: 'Completada' },
                  { icon: FileText, label: 'Registro de Actividades (RAT)', value: 'En progreso' },
                  { icon: GitCompareArrows, label: 'Análisis de brechas', value: '4 pendientes' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                      <row.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {row.label}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
