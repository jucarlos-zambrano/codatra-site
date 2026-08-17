'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import {
  conceptFaqs,
  generalFaqs,
  type FaqItem,
} from '@/lib/faq/content'

function FaqAccordion({
  items,
  sectionId,
  openKey,
  onToggle,
}: {
  items: FaqItem[]
  sectionId: string
  openKey: string | null
  onToggle: (key: string) => void
}) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((faq, index) => {
        const key = `${sectionId}-${index}`
        const isOpen = openKey === key

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => onToggle(key)}
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
              <div className="space-y-4 px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Faq() {
  const [openKey, setOpenKey] = useState<string | null>('general-0')

  function handleToggle(key: string) {
    setOpenKey((current) => (current === key ? null : key))
  }

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

        <div className="mt-12">
          <FaqAccordion
            items={generalFaqs}
            sectionId="general"
            openKey={openKey}
            onToggle={handleToggle}
          />
        </div>

        <div className="mt-16">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Apoyo educativo
            </span>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Términos que suelen generar dudas
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Definiciones simples de conceptos que escucharás al preparar tu
              cumplimiento, sin repetir lo esencial de las preguntas anteriores.
            </p>
          </div>

          <div className="mt-10">
            <FaqAccordion
              items={conceptFaqs}
              sectionId="concepts"
              openKey={openKey}
              onToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
