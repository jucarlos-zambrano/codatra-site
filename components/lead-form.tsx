'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

const benefits = [
  'Demo personalizada de la plataforma',
  'Diagnóstico inicial de tu situación',
  'Acceso prioritario al Programa Piloto',
  'Sin compromiso ni costo inicial',
]

const sizeOptions = ['10 - 25', '26 - 50', '51 - 100', '101 - 200']

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="demo"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
        <div className="grid lg:grid-cols-2">
          {/* Left: value */}
          <div className="relative overflow-hidden bg-primary p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-chart-4/90"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Empieza tu preparación
              </span>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-primary-foreground">
                Solicita una demo y prepara tu empresa hoy
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
                Cuéntanos sobre tu empresa y te mostraremos cómo Codatra puede
                ayudarte a cumplir con la Ley 21.719 de forma simple.
              </p>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-primary-foreground/90"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-primary-foreground" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 sm:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
                  <CheckCircle2 className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  ¡Gracias por tu interés!
                </h3>
                <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  Hemos recibido tu solicitud. Nuestro equipo te contactará muy
                  pronto para coordinar tu demo personalizada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Cargo" htmlFor="role">
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Ej: Gerente de Operaciones"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Empresa" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    className="form-input"
                  />
                </Field>

                <Field label="Correo corporativo" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="nombre@empresa.cl"
                    className="form-input"
                  />
                </Field>

                <Field label="Cantidad de empleados" htmlFor="size">
                  <select id="size" name="size" required className="form-input" defaultValue="">
                    <option value="" disabled>
                      Selecciona un rango
                    </option>
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option} empleados
                      </option>
                    ))}
                  </select>
                </Field>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Solicitar una Demo
                </button>
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Al enviar aceptas ser contactado por Codatra. Tratamos tus
                  datos conforme a la Ley 21.719.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
