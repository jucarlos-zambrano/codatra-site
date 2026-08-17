import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo/site'

const lastUpdated = '16 de agosto de 2026'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description:
    'Términos de servicio del sitio web de Codatra. Condiciones de uso, alcance del sitio, propiedad intelectual y contacto.',
  alternates: {
    canonical: `${SITE_URL}/terminos`,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: `${SITE_URL}/terminos`,
    siteName: SITE_NAME,
    title: 'Términos de Servicio',
    description: 'Condiciones de uso del sitio web de Codatra.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Términos de Servicio',
    description: 'Condiciones de uso del sitio web de Codatra.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosPage() {
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
              Términos de Servicio
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Estas condiciones regulan el uso del sitio web de Codatra. Léelas
              con calma: están escritas para ser claras y directas.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Última actualización: {lastUpdated}
            </p>
          </header>

          <div className="mt-10 space-y-12 text-pretty leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                1. Qué es este sitio
              </h2>
              <p className="mt-4">
                Este sitio web presenta Codatra, una plataforma chilena orientada
                a apoyar a organizaciones en cumplimiento normativo, gobierno de
                la información y protección de datos. Hoy, uno de nuestros
                principales casos de uso es ayudar a prepararse para la Ley
                21.719.
              </p>
              <p className="mt-4">
                A través de este sitio puedes conocer la plataforma, revisar
                información sobre nuestros servicios y contactarnos mediante el
                formulario disponible en la página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                2. Uso informativo del sitio
              </h2>
              <p className="mt-4">
                El contenido publicado en este sitio tiene fines informativos y
                comerciales generales. Te ayuda a entender qué hace Codatra y
                cómo podemos apoyar a tu organización.
              </p>
              <p className="mt-4">
                La información aquí disponible no constituye asesoría legal,
                tributaria ni de cumplimiento normativo personalizada. Cuando
                necesites una recomendación específica para tu empresa, deberás
                evaluarla con los profesionales que correspondan.
              </p>
              <p className="mt-4">
                Al utilizar este sitio, te comprometes a hacerlo de buena fe y a
                no utilizarlo con fines ilícitos, fraudulentos o que perjudiquen
                a Codatra o a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                3. Qué incluye y qué no incluye hoy
              </h2>
              <p className="mt-4">Actualmente, a través de este sitio web:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Puedes revisar información sobre Codatra</li>
                <li>Puedes enviar una solicitud de contacto o demo</li>
              </ul>
              <p className="mt-4">Este sitio no permite, por ahora:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Realizar pagos en línea</li>
                <li>Crear cuentas de usuario</li>
                <li>Contratar suscripciones directamente</li>
                <li>Acceder a un marketplace</li>
                <li>Utilizar una API pública</li>
              </ul>
              <p className="mt-4">
                Si en el futuro habilitamos nuevas funcionalidades, actualizaremos
                estos términos para reflejarlo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                4. Formulario de contacto
              </h2>
              <p className="mt-4">
                Si nos envías datos a través del formulario, declaras que la
                información entregada es veraz y que tienes facultad para
                proporcionarla. El tratamiento de esos datos se rige por nuestra{' '}
                <Link
                  href="/privacidad"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Política de Privacidad
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                5. Propiedad intelectual
              </h2>
              <p className="mt-4">
                Los contenidos de este sitio —textos, diseño, marca, logotipos,
                gráficos y demás elementos— pertenecen a Codatra o se utilizan
                con la autorización correspondiente.
              </p>
              <p className="mt-4">
                No está permitido copiar, reproducir, distribuir, modificar o
                reutilizar estos contenidos con fines comerciales sin
                autorización previa por escrito de Codatra, salvo uso personal y
                no comercial razonable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                6. Limitación de responsabilidad
              </h2>
              <p className="mt-4">
                Procuramos mantener la información del sitio actualizada y
                precisa, pero no garantizamos que esté libre de errores o que
                refleje en todo momento cambios normativos, comerciales o
                técnicos recientes.
              </p>
              <p className="mt-4">
                Codatra no será responsable por daños derivados del uso de este
                sitio, de decisiones tomadas exclusivamente con base en su
                contenido, ni por interrupciones temporales de disponibilidad
                ajenas a nuestro control razonable.
              </p>
              <p className="mt-4">
                En la medida permitida por la ley aplicable, el uso de este sitio
                es bajo tu propia responsabilidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                7. Enlaces a terceros
              </h2>
              <p className="mt-4">
                Este sitio puede incluir enlaces a sitios o servicios de
                terceros. Codatra no controla ni responde por el contenido,
                políticas o prácticas de esos sitios externos. Te recomendamos
                revisar sus condiciones antes de utilizarlos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                8. Modificaciones de estos términos
              </h2>
              <p className="mt-4">
                Podemos actualizar estos Términos de Servicio cuando cambien
                nuestros servicios, funcionalidades del sitio o requisitos
                legales aplicables. Publicaremos la versión vigente en esta
                página e indicaremos la fecha de la última actualización.
              </p>
              <p className="mt-4">
                El uso continuado del sitio después de una actualización
                implica la aceptación de los términos revisados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                9. Contacto
              </h2>
              <p className="mt-4">
                Si tienes preguntas sobre estos Términos de Servicio, escríbenos a:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:contacto@codatra.cl"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  contacto@codatra.cl
                </a>
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
