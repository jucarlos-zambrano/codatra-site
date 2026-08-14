import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const siteUrl = 'https://codatra.cl'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Codatra — Cumplimiento de la Ley 21.719 para PyMEs en Chile',
    template: '%s | Codatra',
  },
  description:
    'Prepara tu empresa para la Ley 21.719 de Protección de Datos Personales sin ser experto legal. Software para PyMEs chilenas: evaluación de cumplimiento, Registro de Actividades de Tratamiento (RAT), análisis de brechas y gestión de solicitudes ARSOP.',
  keywords: [
    'Ley 21.719',
    'cumplimiento ley 21.719',
    'protección de datos Chile',
    'registro de actividades de tratamiento',
    'RAT',
    'ARSOP',
    'cumplimiento para PyMEs',
    'protección de datos personales',
    'software de cumplimiento',
  ],
  authors: [{ name: 'Codatra' }],
  creator: 'Codatra',
  publisher: 'Codatra',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: 'Codatra',
    title: 'Codatra — Cumplimiento de la Ley 21.719 para PyMEs',
    description:
      'Prepara tu empresa para la Ley 21.719 sin ser experto legal. Evaluación, RAT, análisis de brechas, planes de acción y gestión ARSOP para PyMEs chilenas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codatra — Cumplimiento de la Ley 21.719 para PyMEs',
    description:
      'Prepara tu empresa para la Ley 21.719 sin ser experto legal. Software de cumplimiento de protección de datos para PyMEs chilenas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-CL"
      className={`light ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
