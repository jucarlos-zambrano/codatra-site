import { ShieldCheck } from 'lucide-react'

const footerNav = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Módulos', href: '#modulos' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Solicitar Demo', href: '#demo' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Sobre la Ley 21.719', href: '#por-que-importa' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Programa Piloto', href: '#piloto' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Contacto', href: '#demo' },
      { label: 'Política de privacidad', href: '#' },
      { label: 'Términos de servicio', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Codatra
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Software de cumplimiento de la Ley 21.719 de Protección de Datos
              Personales para PyMEs chilenas.
            </p>
          </div>

          {footerNav.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codatra. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho en Chile para PyMEs chilenas.
          </p>
        </div>
      </div>
    </footer>
  )
}
