import { Button } from "@/components/ui/button"

const includedItems = [
  { name: "Aulas gravadas para assistir a qualquer hora com acesso VITALÍCIO", originalPrice: "R$ 497" },
  { name: "Mentorias AO VIVO toda semana para trazer atualizações e tirar dúvidas", originalPrice: "R$ 997" },
  { name: "Acesso ao GRUPO VIP com dicas extras", originalPrice: "R$ 297" },
  { name: "Acesso ao WhatsApp pessoal da mentora para tirar dúvidas à qualquer momento", originalPrice: "R$ 197" }
]

export function PricingSection() {
  return (
    <section className="bg-[#6d3a0f] bg-gradient-to-br from-[#8a715b] via-[#6d3a0f] to-[#79450b] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5a3208]/30 via-transparent to-[#8a715b]/20 pointer-events-none" />
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-[#fceede]">
              {/* NOVO TÍTULO: ESCASSEZ E CONTRATE DE PREÇO */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance text-white drop-shadow-lg">
                Por apenas 12x R$30,72. POR TEMPO LIMITADO.
              </h2>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white drop-shadow-md">e TEM MAIS… entrando HOJE você ainda irá receber:</h3>
                <div className="space-y-2 sm:space-y-3">
                  {includedItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-3 sm:gap-4">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base leading-relaxed text-white/95 drop-shadow-sm">{item.name}</span>
                      </div>
                      <span className="text-white/75 line-through whitespace-nowrap text-sm sm:text-base flex-shrink-0 drop-shadow-sm">{item.originalPrice}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/20 pt-3 sm:pt-4 mb-3 sm:mb-4">
                <div className="flex justify-center items-center text-base sm:text-lg md:text-xl font-semibold gap-2">
                  <span className="text-white whitespace-nowrap drop-shadow-md">De <span className="line-through">1.997,00</span> <b>por</b> R$ 297</span>
                </div>
              </div>

            </div>

            {/* Right Pricing Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-sm w-full">
                <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
                  <span className="bg-[#fceede] text-[#79450b] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    Plano Vitalício
                  </span>
                  <div className="text-[#79450b] font-bold text-base sm:text-lg">PoDI</div>
                </div>

                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-xs sm:text-sm text-[#8c745c]">12x de</span>
                    <span className="text-4xl sm:text-5xl font-bold text-[#79450b]">R$30</span>
                    <span className="text-base sm:text-lg text-[#8c745c]">,72</span>
                  </div>
                  <p className="text-[#8c745c] mb-3 sm:mb-4 text-sm sm:text-base">ou R$297,00 à vista</p>
                  <p className="text-xs sm:text-sm text-[#8c745c]">
                    Menos de R$ 1 por dia para<br />
                    acessar toda a plataforma
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full text-base sm:text-lg py-5 sm:py-6 bg-[#79450b] hover:bg-[#8c745c] text-[#fceede] font-semibold rounded-full"
                  asChild
                >
                  <a href="https://pay.kiwify.com.br/G7NBrKH" target="_blank" rel="noopener noreferrer">
                    GARANTIR MEU ACESSO
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}