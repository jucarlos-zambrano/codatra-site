import type { FaqItem } from '@/lib/faq/content'
import { faqsToJsonLd } from '@/lib/faq/content'
import {
  JSON_LD_ORGANIZATION_DESCRIPTION,
  JSON_LD_SOFTWARE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo/site'

export function buildHomeJsonLd(faqs: FaqItem[]) {
  const organizationId = `${SITE_URL}/#organization`
  const websiteId = `${SITE_URL}/#website`
  const softwareId = `${SITE_URL}/#software`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        description: JSON_LD_ORGANIZATION_DESCRIPTION,
        areaServed: {
          '@type': 'Country',
          name: 'Chile',
        },
        knowsAbout: [
          'Cumplimiento normativo',
          'Gestión de información',
          'Gobierno de la información',
          'Evidencia de cumplimiento',
          'Ley 21.719',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: JSON_LD_ORGANIZATION_DESCRIPTION,
        inLanguage: 'es-CL',
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description: JSON_LD_SOFTWARE_DESCRIPTION,
        provider: { '@id': organizationId },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'PyMEs chilenas',
        },
        offers: {
          '@type': 'Offer',
          category: 'Cumplimiento normativo',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqsToJsonLd(faqs),
      },
    ],
  }
}
