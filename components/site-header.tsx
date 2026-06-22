import Image from "next/image"
import { Menu, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const nav = [
  ["Inicio", "#inicio"], ["Acompañamiento", "#acompanamiento"], ["Nuestro enfoque", "#enfoque"],
  ["Recursos", "#recursos"], ["Sobre Carla", "#carla"], ["Contacto", "#contacto"],
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#18355F]/10 bg-[#F8FAF7]/92 backdrop-blur-xl">
      <div className="container-renutre flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <Image src="/images/renutre/logo-renutre.svg" width={132} height={48} alt="Renutre" priority />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-[#18355F]/78 transition hover:text-primary">{label}</a>)}
        </nav>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#536B52] lg:flex">
          <MessageCircle size={18} /> Hablar por WhatsApp
        </a>
        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-[#18355F]/15 p-3" aria-label="Abrir menú"><Menu size={22} /></summary>
          <div className="absolute right-0 top-14 w-[min(88vw,320px)] rounded-3xl border bg-white p-5 soft-shadow">
            <nav className="grid gap-1" aria-label="Navegación móvil">
              {nav.map(([label, href]) => <a key={href} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-mist">{label}</a>)}
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-full bg-forest px-4 py-3 text-center text-sm font-semibold text-white">Hablar por WhatsApp</a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}
