import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/home/hero-section"
import { RecognitionSection } from "@/components/home/recognition-section"
import { ServicesSection } from "@/components/home/services-section"
import { ApproachSection } from "@/components/home/approach-section"
import { LifeSection } from "@/components/home/life-section"
import { CarlaSection } from "@/components/home/carla-section"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <RecognitionSection />
        <ServicesSection />
        <ApproachSection />
        <LifeSection />
        <CarlaSection />
        <NewsletterSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
