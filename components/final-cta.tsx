import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section id="piloto" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/50 px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            No esperes al 1 de diciembre de 2026 para empezar
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Únete al Programa Piloto de Codatra y prepara tu empresa para la Ley
            21.719 con acompañamiento cercano y condiciones preferentes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Solicitar una Demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              Unirse al Programa Piloto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
