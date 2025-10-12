'use client'

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

const sampleStats = [
  {
    id: "1",
    number: "12+",
    label: "Anos de Experiência",
    accentImg: "/flavia2.jpg",
  },
  {
    id: "2",
    number: "100+",
    label: "Alunos",
    accentImg: "/flavia.jpg",
  },
  {
    id: "3",
    number: "5+",
    label: "MÉTODOS EM 1 CURSO",
    accentImg: "/flavia3.jpg",
  },
]
export default function Home() {


  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <HeroSection />

      <InboundHero
        headline="O que é o PoDI?"
        description={
          <>
            O PoDI - Poder da Divulgação na Internet é uma <strong>mentoria de renda extra</strong> para quem deseja aprender a ganhar dinheiro só usando celular e internet. As rendas ensinadas no PoDI podem se tornar sua <strong>renda principal ou complemento no ganho mensal</strong>. São rendas para você trabalhar a qualquer hora e por pouco tempo do seu dia.
            <br /><br />
            É ideal para você que quer <strong>mais tempo com seus filhos</strong>, poder trabalhar de casa ou de onde você quiser, não depender de patrão, ter seu próprio dinheiro e liberdade de tempo. O PoDI reúne <strong>estratégias validadas</strong> e caminhos práticos que realmente funcionam para transformar a internet em fonte de lucro.
          </>
        }
        stats={sampleStats}
        onLearnMore={() => console.log("Learn more clicked")}
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
