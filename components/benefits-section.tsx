const benefits = [
  {
    icon: "🛍️",
    title: "Shopee e Shein",
    description: "Aprenda desde o cadastro como afiliada até a criação e divulgação dos seus links.",
  },
  {
    icon: "✨",
    title: "Venda aparecendo",
    description: "Aprenda a criar conteúdos, despertar o interesse e divulgar produtos de maneira estratégica.",
  },
  {
    icon: "🤫",
    title: "Venda sem aparecer",
    description: "Descubra formas de divulgar produtos sem precisar mostrar o rosto.",
  },
  {
    icon: "📱",
    title: "Na prática",
    description: "Aprenda a gravar e editar vídeos utilizando seu celular, mesmo sem experiência.",
  },
  {
    icon: "🗓️",
    title: "Plano de ação",
    description: "Um passo a passo de quatro semanas para você colocar tudo em prática.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#12110f]">
            O que você vai aprender?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5c564b] text-pretty leading-relaxed px-2">
            Mais prático. Mais direto. Mais atualizado. Mais oportunidades para você!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f8f5ee] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-raised [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-raised-hover [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-[#12110f]">{benefit.title}</h3>
              <p className="text-sm sm:text-sm text-[#5c564b] leading-relaxed mb-3">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
