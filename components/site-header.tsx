"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenutreLogo } from "@/components/renutre-logo"

const navLinks = [
  { label: "Mi enfoque", href: "#enfoque" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Recursos", href: "#recursos" },
  { label: "Blog", href: "#blog" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#inicio" aria-label="renutre — inicio">
          <RenutreLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#consulta">Consulta Online</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#consulta" onClick={() => setOpen(false)}>
                Consulta Online
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
