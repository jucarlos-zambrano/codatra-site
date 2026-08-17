import type { Metadata } from 'next'

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
import {
  conceptFaqs,
  generalFaqs,
} from '@/lib/faq/content'
import { buildHomeJsonLd } from '@/lib/seo/json-ld'
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/seo/site'

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — Cumplimiento normativo para PyMEs chilenas`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    title: `${SITE_NAME} — Cumplimiento normativo para PyMEs chilenas`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

const jsonLd = buildHomeJsonLd([...generalFaqs, ...conceptFaqs])

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
