const benefits = [
  {
    icon: "🔗",
    title: "Afiliação a Produtos Digitais",
    description: "Aprenda a promover produtos digitais e ganhar comissões sem precisar criar nada do zero",
  },
  {
    icon: "📦",
    title: "Afiliação a Produtos Físicos",
    description: "Descubra como lucrar divulgando produtos físicos de grandes marcas e lojas",
  },
  {
    icon: "🏢",
    title: "Trabalhe com Grandes Marcas",
    description: "Aprenda a trabalhar com marcas como Renner, Nike, Adidas, Casas Bahia e muito mais",
  },
  {
    icon: "🛍️",
    title: "Ganhe Comissões com Shopee",
    description: "Estratégias para ganhar comissões todos os dias divulgando produtos da Shopee",
  },
  {
    icon: "📱",
    title: "Profissão Influenciadora",
    description: "Aprenda a se tornar uma influenciadora ou usar as redes sociais para atrair mais clientes",
  },
  {
    icon: "💰",
    title: "Múltiplas Fontes de Renda",
    description: "Diversifique seus ganhos com várias estratégias de monetização ensinadas no curso",
  },
  {
    icon: "🎯",
    title: "Suporte Completo",
    description: "Acesso ao WhatsApp pessoal e encontros semanais para tirar todas as suas dúvidas",
  },
  {
    icon: "🛡️",
    title: "Garantia de 7 Dias",
    description: "Teste sem riscos. Se não gostar, devolvemos 100% do seu investimento",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-12 sm:w-16 h-1 bg-[#79450b] mx-auto mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#79450b]">
            Tudo que você vai encontrar no PoDI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8c745c] text-pretty leading-relaxed px-2">
            Múltiplas estratégias de renda para você começar a ganhar dinheiro online
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#fceede] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-[#79450b]">{benefit.title}</h3>
              <p className="text-sm sm:text-sm text-[#8c745c] leading-relaxed mb-3">{benefit.description}</p>
            
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
          <p className="text-[#79450b] font-semibold text-base sm:text-lg mb-2">+ Novos conteúdos adicionados regularmente</p>
          <p className="text-[#8c745c] text-sm sm:text-base">
            Sua assinatura inclui acesso a todos os futuros lançamentos sem custo adicional
          </p>
        </div> */}
      </div>
    </section>
  )
}
