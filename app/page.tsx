"use client"

import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { StatsSection } from "@/components/stats-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ModulesSection } from "@/components/modules-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ForWhoSection } from "@/components/for-who-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { UrgencyBanner } from "@/components/urgency-banner"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TransformationPillarsSection } from "@/components/transformation-pillars-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import InboundHero from "@/components/inbound-hero"
import { QuestionsSection } from "@/components/questions-section"
import { CHECKOUT_URL } from "@/lib/constants"

const sampleStats = [
  {
    id: "1",
    text: "Assista a Qualquer Hora",
    accentImg: "/flavia2compress.jpg",
  },
  {
    id: "2",
    text: "12 Meses de Acesso",
    accentImg: "/flavia.webp",
  },
  {
    id: "3",
    text: "Métodos Validados",
    accentImg: "/flavia3compress.jpg",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <HeroSection />

      <InboundHero
        headline="O que é o PoDI +?"
        description={
          <>
            O <strong>PoDI + (Poder da Divulgação na Internet)</strong> é o treinamento onde você aprende a trabalhar com <strong>Shein e Shopee</strong>, gravar e editar vídeos aparecendo ou não — mesmo começando do zero, sem experiência.
            <br />
            <br />
            Aprenda no seu ritmo, de onde estiver, e descubra novas possibilidades de trabalhar pela internet. <strong>Mais prático. Mais direto. Mais atualizado. Mais oportunidades para você!</strong>
          </>
        }
        stats={sampleStats}
        onLearnMore={() => window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer")}
      />

      {/* <StatsSection /> */}
      {/* <PainPointsSection /> */}
      <FAQSection />
      <TransformationPillarsSection />
      {/* <ModulesSection /> */}
      <TestimonialsSection />
      {/* <SocialProofSection /> */}
      <BenefitsSection />
      {/* <ForWhoSection /> */}
      <PricingSection />
      <GuaranteeSection />
      <FinalCTASection />
      <QuestionsSection />
      <WhatsAppButton />
    </main>
  )
}
