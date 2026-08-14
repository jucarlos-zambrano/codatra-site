import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Countdown } from '@/components/countdown'
import { WhyLaw } from '@/components/why-law'
import { Problems } from '@/components/problems'
import { HowItWorks } from '@/components/how-it-works'
import { Modules } from '@/components/modules'
import { Benefits } from '@/components/benefits'
import { Faq } from '@/components/faq'
import { LeadForm } from '@/components/lead-form'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Codatra',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Plataforma de software que ayuda a las PyMEs chilenas a cumplir con la Ley 21.719 de Protección de Datos Personales: evaluación de cumplimiento, Registro de Actividades de Tratamiento (RAT), análisis de brechas, planes de acción y gestión de solicitudes ARSOP.',
      offers: {
        '@type': 'Offer',
        category: 'Cumplimiento de protección de datos',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es la Ley 21.719 y a quién aplica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es la nueva ley chilena de protección de datos personales. Aplica a prácticamente todas las organizaciones que tratan datos de personas, incluidas las PyMEs, independientemente de su tamaño o rubro.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito conocimientos legales para usar Codatra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Codatra está diseñado para personas sin formación jurídica. Traducimos los requisitos de la ley a un lenguaje simple y te guiamos paso a paso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué son las solicitudes ARSOP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Son los derechos que pueden ejercer las personas sobre sus datos: Acceso, Rectificación, Supresión, Oposición y Portabilidad. Codatra permite recibir, gestionar y responder estas solicitudes dentro de plazo.',
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Countdown />
        <WhyLaw />
        <Problems />
        <HowItWorks />
        <section id="modulos">
          <Modules />
        </section>
        <Benefits />
        <Faq />
        <LeadForm />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
