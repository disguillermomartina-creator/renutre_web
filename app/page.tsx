import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { EbookSection } from "@/components/ebook-section"
import { ConsultaSection } from "@/components/consulta-section"
import { EquilibrioSection } from "@/components/equilibrio-section"
import { CaminoSection } from "@/components/camino-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <EbookSection />
        <ConsultaSection />
        <EquilibrioSection />
        <CaminoSection />
      </main>
      <SiteFooter />
    </div>
  )
}
