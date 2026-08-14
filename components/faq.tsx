'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es la Ley 21.719 y a quién aplica?',
    answer:
      'Es la nueva ley chilena de protección de datos personales. Aplica a prácticamente todas las organizaciones que tratan datos de personas —clientes, trabajadores o proveedores—, incluidas las PyMEs, independientemente de su tamaño o rubro.',
  },
  {
    question: '¿Necesito conocimientos legales para usar Codatra?',
    answer:
      'No. Codatra está diseñado para personas sin formación jurídica. Traducimos los requisitos de la ley a un lenguaje simple y te guiamos paso a paso, con preguntas claras y plantillas listas para usar.',
  },
  {
    question: '¿Codatra es una consultora o un software?',
    answer:
      'Codatra es una plataforma de software. No reemplazamos la asesoría legal cuando la necesites, pero te permitimos avanzar de forma autónoma, ordenada y económica en la mayor parte del proceso de cumplimiento.',
  },
  {
    question: '¿Qué es el Registro de Actividades de Tratamiento (RAT)?',
    answer:
      'El RAT es un documento que describe qué datos personales trata tu empresa, con qué finalidad, bajo qué base legal y con quién se comparten. Codatra te ayuda a construirlo con plantillas y preguntas asistidas.',
  },
  {
    question: '¿Qué son las solicitudes ARSOP?',
    answer:
      'Son los derechos que pueden ejercer las personas sobre sus datos: Acceso, Rectificación, Supresión, Oposición y Portabilidad. Codatra te permite recibir, gestionar y responder estas solicitudes dentro de los plazos exigidos.',
  },
  {
    question: '¿Cuándo debo empezar a prepararme?',
    answer:
      'Cuanto antes. La ley será plenamente exigible el 1 de diciembre de 2026 y la preparación toma tiempo. Empezar hoy te permite avanzar sin apuros y llegar con tu empresa lista.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Resolvemos tus dudas sobre el cumplimiento
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
