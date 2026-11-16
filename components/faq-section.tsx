import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso aparecer para vender?",
    answer:
      "Não! No PoDI + você aprende tanto a vender aparecendo quanto a vender sem aparecer, descobrindo formas de divulgar produtos sem precisar mostrar o rosto.",
  },
  {
    question: "Funciona mesmo para quem nunca vendeu online?",
    answer:
      "Sim, o PoDI + é para iniciantes, começando absolutamente do zero, sem experiência. A linguagem é simples e direta, com um plano de ação passo a passo de quatro semanas.",
  },
  {
    question: "Eu não sei vender, vou dar conta?",
    answer:
      "No PoDI + você aprende a criar conteúdos, despertar o interesse e divulgar produtos da Shopee e Shein de maneira estratégica e natural.",
  },
  {
    question: "Só ganha dinheiro com a internet quem tem seguidores?",
    answer:
      "Essa é a maior mentira já dita. A maioria das alunas são mulheres comuns, com poucos seguidores. Seguidores não é sinônimo de ganhos — você só precisa de estratégia.",
  },
  {
    question: "E se eu não tiver tempo?",
    answer:
      "O PoDI + tem aulas práticas e objetivas para você aprender no seu ritmo, de onde estiver, usando apenas o seu celular.",
  },
  {
    question: "Será que vou dar conta?",
    answer:
      "No PoDI + você não está sozinha: além dos 7 módulos e do plano de ação de 4 semanas, você conta com suporte pelo WhatsApp e 12 meses de acesso ao treinamento.",
  },
  {
    question: "E se eu ver que não é pra mim?",
    answer:
      "Sem problemas, se em até 7 dias você não gostar do conteúdo te devolvemos o dinheiro.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-[#12110f]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" defaultValue={faqs.map((_, index) => `item-${index}`)} className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg sm:text-base md:text-xl font-semibold hover:no-underline text-[#e5c365] py-4 px-4 sm:px-6 bg-[#12110f]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#12110f] leading-relaxed text-base sm:text-base bg-[#f8f5ee] px-4 sm:px-6 py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
