const deliverables = [
  "Acesso aos 7 módulos do PoDI +",
  "Aulas práticas e objetivas",
  "Suporte pelo WhatsApp",
  "12 meses de acesso ao treinamento",
  "Plano de ação para começar",
]

export function ModulesSection() {
  return (
    <section className="bg-white py-14 sm:py-18 md:py-22 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-[#12110f]">
            O que você recebe?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#f8f5ee] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-raised">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3.5 border-b border-[#e6dfd1] pb-4 last:border-b-0 last:pb-0"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#12110f] text-[#e5c365] text-sm font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="font-semibold text-base sm:text-lg text-[#12110f]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
