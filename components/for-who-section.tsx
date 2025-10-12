const steps = [
  {
    number: "1",
    title: "Escolha sua caminho",
    description: "Descubra estratégias simples e comprovadas para começar a ganhar dinheiro online sem aparecer.",
  },
  {
    number: "2",
    title: "Pratique diariamente",
    description: "Aplique as técnicas ensinadas com apenas alguns minutos do seu dia, no seu próprio ritmo.",
  },
  {
    number: "3",
    title: "Entre continuamente",
    description: "Receba suporte contínuo através de mentorias ao vivo e comunidade exclusiva durante 1 ano.",
  },
]

export function ForWhoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-purple-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Transformação simplificada em 3 passos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center text-3xl font-bold text-purple-primary mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
