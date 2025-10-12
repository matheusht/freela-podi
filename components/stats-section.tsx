export function StatsSection() {
  const stats = [
    {
      number: "12+",
      label: "Anos de Experiência",
    },
    {
      number: "100+",
      label: "Alunas já faturando de casa",
    },
    {
      number: "R$ 25.000+",
      label: "Faturados com o método",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="w-16 h-1 bg-purple-primary mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Números que importam</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-purple-light rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
