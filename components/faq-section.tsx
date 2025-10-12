import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Preciso aparecer para vender?",
    answer:
      "Definitivamente NÃO. Esse é o grande diferencial do PoDI, a maior parte das estratégias ensinadas são para quem quer vender de forma discreta, sem precisar aparecer nas redes sociais.",
  },
  {
    question: "Funciona mesmo para quem nunca vendeu online?",
    answer: "Sim, o PoDI é para iniciantes, começando absolutamente do zero. A linguagem é simples e direta, com passo a passo de cada renda e estratégias para vender.",
  },
  {
    question: "Eu não sei vender, vou dar conta?",
    answer: "No PoDI eu ensino técnicas simples de persuasão, em que as vendas serão naturais, sem precisar insistir, se expor ou conversar com ninguém.",
  },
  {
    question: "Só ganha dinheiro com a internet quem tem seguidores?",
    answer:
      "Essa é a maior mentira já dita. A maioria das alunas do PoDI são mulheres comuns, com poucos seguidores. Seguidores não é sinônimo de ganhos. Você só precisa de estratégia.",
  },
  {
    question: "E se eu não tiver tempo?",
    answer:
      "Justamente por falta de tempo que você precisa do PoDI. O PoDI mostra estratégias que cabem na sua rotina, mesmo que você tenha pouco tempo.",
  },
  {
    question: "Será que vou dar conta?",
    answer:
      "No PoDI você não está sozinha, eu caminho junto com você. Além das aulas gravadas que você vai assistir quando puder, ainda temos encontros semanais e você terá acesso ao meu WhatsApp pessoal para tirar dúvidas quando quiser.",
  },
  {
    question: "E se eu ver que não é pra mim?",
    answer:
      "Sem problemas, se em até 7 dias você não gostar do conteúdo te devolvemos o dinheiro.",
  },
]

export function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-12 sm:w-16 h-1 bg-[#79450b] mx-auto mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-[#79450b]">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" defaultValue={faqs.map((_, index) => `item-${index}`)} className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#83501a] border-none rounded-xl sm:rounded-2xl px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-base sm:text-base md:text-lg font-semibold hover:no-underline text-[#fceede] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#fceede] leading-relaxed text-sm sm:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  )
}
