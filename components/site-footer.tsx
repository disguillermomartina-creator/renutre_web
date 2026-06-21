import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenutreLogo } from "@/components/renutre-logo"

const footerLinks = [
  { label: "Nuestra filosofía", href: "#enfoque" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Confía en tu forma", href: "#enfoque" },
  { label: "Blog", href: "#blog" },
]

export function SiteFooter() {
  return (
    <footer id="blog" className="bg-sky-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <RenutreLogo invert className="h-6" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Aprende a llevar una relación funcional con la comida y a
              reconciliarte con tu cuerpo.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button
              asChild
              className="rounded-full bg-card px-6 text-sky-deep hover:bg-card/90"
            >
              <Link href="#consulta">Solicitar consulta</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-1.5">
            renutre 2019 · Creado con
            <Heart className="size-3 fill-current" aria-hidden="true" />
            en Córdoba, Argentina · 2025.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="rounded-md bg-primary-foreground/15 px-2 py-1 font-medium">
              mercado pago
            </span>
            <Link href="#" className="hover:text-primary-foreground">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-primary-foreground">
              Términos y condiciones
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-primary-foreground/55">
          El nombre y logotipo de renutre son marcas registradas. Los contenidos
          de renutre tienen derechos reservados.
        </p>
      </div>
    </footer>
  )
}
