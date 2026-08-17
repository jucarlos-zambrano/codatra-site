import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo/site'

const lastUpdated = '16 de agosto de 2026'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad del sitio web de Codatra. Información sobre datos recopilados, finalidades, conservación y derechos al contactarnos.',
  alternates: {
    canonical: `${SITE_URL}/privacidad`,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: `${SITE_URL}/privacidad`,
    siteName: SITE_NAME,
    title: 'Política de Privacidad',
    description:
      'Transparencia sobre el tratamiento de datos personales en el sitio web de Codatra.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidad',
    description:
      'Transparencia sobre el tratamiento de datos personales en el sitio web de Codatra.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-b border-border/60">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <header className="border-b border-border pb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Legal
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Queremos que entiendas qué datos recopilamos, para qué los usamos y
              cómo puedes contactarnos. Esta política aplica al sitio web de
              Codatra.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Última actualización: {lastUpdated}
            </p>
          </header>

          <div className="mt-10 space-y-12 text-pretty leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                1. Quiénes somos
              </h2>
              <p className="mt-4">
                Codatra es una plataforma tecnológica chilena orientada a apoyar
                a organizaciones en cumplimiento normativo, gobierno de la
                información y protección de datos. Trabajamos especialmente con
                PyMEs que necesitan ordenar sus procesos de forma clara y
                demostrable.
              </p>
              <p className="mt-4">
                Hoy, uno de nuestros principales casos de uso es ayudar a
                prepararse para la Ley 21.719 de Protección de Datos Personales.
                Esa ley es una prioridad comercial importante, pero no define
                por completo quiénes somos ni hacia dónde evoluciona la
                plataforma.
              </p>
              <p className="mt-4">
                Si nos contactas a través de este sitio, trataremos tu
                información con cuidado, transparencia y buena fe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                2. Qué información recopilamos
              </h2>
              <p className="mt-4">
                Cuando completas el formulario de contacto o solicitas una demo,
                podemos recopilar la siguiente información:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Nombre</li>
                <li>Cargo</li>
                <li>Empresa</li>
                <li>Correo electrónico</li>
                <li>Industria</li>
                <li>Cantidad de empleados</li>
              </ul>
              <p className="mt-4">
                Solo te pedimos datos relevantes para entender tu consulta y
                responder de forma útil. No solicitamos información sensible
                innecesaria a través de este formulario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                3. Para qué utilizamos la información
              </h2>
              <p className="mt-4">Utilizamos tus datos personales para:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Responder tus consultas</li>
                <li>Coordinar demostraciones de la plataforma</li>
                <li>Enviarte información sobre Codatra cuando la hayas solicitado</li>
                <li>Gestionar potenciales relaciones comerciales</li>
              </ul>
              <p className="mt-4">
                <strong className="font-medium text-foreground">
                  No vendemos tus datos personales.
                </strong>{' '}
                Tampoco los compartimos con terceros para fines comerciales
                propios de esos terceros.
              </p>
              <p className="mt-4">
                No realizamos campañas masivas de marketing con la información
                que nos entregas a través del formulario. Nuestro contacto está
                orientado a responder tu interés de forma directa y relevante.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                4. Cómo protegemos la información
              </h2>
              <p className="mt-4">
                Aplicamos medidas razonables para resguardar la información que
                nos confías. Limitamos el acceso a quienes dentro de Codatra
                necesitan utilizarla para responder tu solicitud, y procuramos
                que los sistemas donde se almacena cuenten con controles de
                seguridad adecuados.
              </p>
              <p className="mt-4">
                Ningún sistema es completamente infalible, pero tratamos de
                actuar con el mismo estándar de cuidado que promovemos en
                materia de protección de datos y buenas prácticas organizacionales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                5. Conservación de los datos
              </h2>
              <p className="mt-4">
                Conservamos tu información mientras exista una relación activa
                contigo o mientras sea necesaria para responder tu consulta,
                coordinar una demo o evaluar una posible relación comercial.
              </p>
              <p className="mt-4">
                Cuando ya no sea necesaria para esos fines, la eliminaremos o
                la mantendremos bloqueada por el tiempo que corresponda, de
                acuerdo con obligaciones legales aplicables o necesidades
                operativas razonables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                6. Derechos de las personas
              </h2>
              <p className="mt-4">
                Como titular de tus datos personales, puedes solicitar, entre
                otros:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Conocer qué información tenemos sobre ti</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de tus datos cuando corresponda</li>
                <li>Oponerte a ciertos tratamientos, cuando aplique</li>
              </ul>
              <p className="mt-4">
                En Chile, estos derechos se encuentran reconocidos en la
                normativa de protección de datos personales, incluida la Ley
                21.719. Te atenderemos de forma clara y sin complicaciones
                innecesarias.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                7. Cómo ejercer una solicitud
              </h2>
              <p className="mt-4">
                Si deseas ejercer alguno de tus derechos, actualizar tu
                información o hacer una consulta sobre privacidad, escríbenos a:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:contacto@codatra.cl"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  contacto@codatra.cl
                </a>
              </p>
              <p className="mt-4">
                Indica tu nombre, el correo con el que nos contactaste y el
                detalle de tu solicitud. Responderemos en un plazo razonable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                8. Actualizaciones de esta política
              </h2>
              <p className="mt-4">
                Podemos actualizar esta política cuando cambien nuestros
                procesos, funcionalidades del sitio o requisitos legales
                aplicables. Publicaremos la versión vigente en esta misma
                página e indicaremos la fecha de la última actualización.
              </p>
              <p className="mt-4">
                Te recomendamos revisarla periódicamente si nos has entregado
                tus datos o mantienes contacto con nosotros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                9. Contacto
              </h2>
              <p className="mt-4">
                Para cualquier duda sobre esta política o sobre el tratamiento
                de tus datos personales, puedes escribirnos a:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:contacto@codatra.cl"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  contacto@codatra.cl
                </a>
              </p>
              <p className="mt-4">
                Estamos disponibles para ayudarte con transparencia y cercanía.
              </p>
            </section>
          </div>

          <footer className="mt-14 border-t border-border pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              ← Volver al inicio
            </Link>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
