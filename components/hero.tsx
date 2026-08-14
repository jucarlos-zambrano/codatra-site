import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  GitCompareArrows,
  Inbox,
  TrendingUp,
} from 'lucide-react'

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
      {/* Subtle teal background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[-10rem] -z-10 h-[30rem] w-[40rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-[var(--chart-3)] hover:shadow-md"
              >
                Solicitar una Demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#piloto"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-medium text-foreground transition-colors hover:bg-secondary"
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

          {/* Dashboard mockup */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
              {/* Deep teal app header, inspired by the login/app UI */}
              <div className="bg-gradient-to-br from-[var(--chart-3)] via-primary to-[var(--chart-1)] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-md bg-white/15 text-primary-foreground">
                      <ShieldCheck className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Panel de cumplimiento
                      </p>
                      <p className="text-[11px] text-primary-foreground/70">
                        Empresa demo · 48 empleados
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-primary-foreground">
                    En preparación
                  </span>
                </div>
              </div>

              <div className="p-5">
                {/* KPI grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Compliance Score */}
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="size-4 text-primary" aria-hidden="true" />
                      <p className="text-xs font-medium text-muted-foreground">
                        Score de cumplimiento
                      </p>
                    </div>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                      68<span className="text-lg text-muted-foreground">%</span>
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-chart-4" />
                    </div>
                  </div>

                  {/* Open Gaps */}
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-2">
                      <GitCompareArrows
                        className="size-4 text-[var(--gold)]"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-medium text-muted-foreground">
                        Brechas abiertas
                      </p>
                    </div>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                      4
                    </p>
                    <p className="mt-2 inline-flex rounded-full bg-[var(--gold-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--gold)]">
                      2 de prioridad alta
                    </p>
                  </div>
                </div>

                {/* RAT progress */}
                <div className="mt-3 rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-primary" aria-hidden="true" />
                      <p className="text-xs font-medium text-foreground">
                        Registro de Actividades (RAT)
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      14 / 20 actividades
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-chart-3 to-chart-4" />
                  </div>
                </div>

                {/* ARSOP requests */}
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <Inbox className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Solicitudes ARSOP
                    </p>
                    <p className="text-xs text-muted-foreground">
                      3 pendientes · plazo promedio 12 días
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
