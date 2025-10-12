import { motion } from "framer-motion"

const modules = [
  {
    icon: "🎯",
    title: "O atalho para sua primeira venda em 24h",
    description:
      "Sem gastar R$1,00 em tráfego. Aprenda a se cadastrar e vender produtos físicos e digitais sem precisar aparecer.",
  },
  {
    icon: "📱",
    title: "Redes Sociais que Atraem Clientes no Automático",
    description:
      "Domine Instagram, Reels e Stories com estratégias que fazem pessoas te procurarem todos os dias querendo comprar.",
  },
  {
    icon: "✨",
    title: "Segredos dos Influenciadores Milionários",
    description:
      "As técnicas que criadores de conteúdo usam para fechar parcerias de R$ 5.000+ e multiplicar seus ganhos.",
  },
  {
    icon: "💰",
    title: "5 Fontes de Renda que Funcionam Enquanto Você Dorme",
    description: "Diversifique seus ganhos e nunca mais dependa de apenas uma fonte de renda. Segurança financeira real.",
  },
  {
    icon: "👥",
    title: "Rede de Apoio de Mulheres Vencedoras",
    description:
      "Grupo exclusivo no WhatsApp com networking, motivação diária e troca de experiências com outras mães empreendedoras.",
  },
  {
    icon: "🎓",
    title: "Suporte VIP de 1 ano para acelerar seus resultados",
    description: "Mentorias ao vivo toda semana para tirar dúvidas, receber direcionamentos e não te deixar parar.",
  },
]

export function ModulesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-b from-white to-[#fceede]/30 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-12 sm:w-16 h-1 bg-[#79450b] mx-auto mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#79450b]">Pilares de Transformação</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8c745c] text-pretty leading-relaxed px-2">
            Uma mentoria completa com tudo que você precisa para transformar a internet em fonte de renda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="bg-[#fceede] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{module.icon}</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#79450b]">{module.title}</h3>
              <p className="text-[#8c745c] leading-relaxed text-sm sm:text-base">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
