import Image from "next/image"
import { motion } from "framer-motion"

export function FinalCTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#fceede] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="text-center mb-8">
              <div className="inline-block rounded-3xl overflow-hidden shadow-xl bg-black mb-6">
                <Image
                  // IMPORTANTE: Use a imagem real da Flávia Raíssa aqui. Mantive o placeholder para demonstração.
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-Bqx4LSvAJGNsX0YMbmMga8Tg1To7VB.jpeg"
                  alt="Flávia Raissa, especialista em vendas online"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#79450b] mb-4 sm:mb-6">Sobre Flávia Raissa</h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-[#8c745c]">
              {/* NOVA COPY: BIOGRAFIA DA FLÁVIA (MOBILE) */}
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="font-bold">Flávia Raíssa, 35 anos, mãe, esposa</span>, moro no interior no Paraná em uma cidade pequena.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Eu comecei do zero, sem saber nada sobre o digital. Antes de viver da internet, eu era maquiadora, micropigmentadora, esteticista… trabalhava muito, atendia clientes, mas além de ganhar pouco, exigia muito do meu tempo e ficava longe da minha filha…
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                E eu sempre tive uma certeza: eu queria mais. Queria <span className="font-bold">liberdade, tempo com minha família</span>, e a chance de construir algo só meu.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Foi aí que comecei a me interessar por divulgação na internet. Aprendi a vender, a divulgar, a transformar redes sociais em fonte de renda — e o que era uma renda extra virou minha profissão.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Com o tempo, fui testando várias áreas: produtos físicos, digitais, Shopee, afiliados, marketing de influência… até entender o que realmente dá resultado e muda vidas.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Hoje, vivo do que conquistei com o celular na mão. E o <span className="font-bold">PoDI – Poder da Divulgação na Internet</span> nasceu do desejo de ensinar outras mulheres a fazer o mesmo.
              </p>
<div className="mt-6 sm:mt-8">
                {/* NOVA COPY: MISSÃO DO PODI (MOBILE) */}
                <h3 className="text-xl sm:text-xl font-bold text-[#79450b] mb-3 sm:mb-4">A missão do PoDI é para você que quer:</h3>
                <div className="space-y-2 text-sm sm:text-base text-[#8c745c]">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">Ajudar mulheres que estão <span className="font-bold">cansadas de depender dos outros</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">Que querem ter o <span className="font-bold">próprio dinheiro, realizar sonhos</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">E provar que <span className="font-bold">liberdade financeira é possível</span> para quem decide aprender e arriscar.</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-8 text-center"
              >
                <motion.a
                  href="https://pay.kiwify.com.br/G7NBrKH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden inline-block bg-gradient-to-r from-[#79450b] to-[#8c745c] hover:from-[#8c745c] hover:to-[#79450b] text-[#fceede] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all transform shadow-xl border-2 border-[#d0c1b1]/30 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#79450b] via-[#8c745c] to-[#79450b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d0c1b1]/30 to-[#d0c1b1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="transition-transform duration-300 group-hover:scale-105 relative z-10">
                  🚀 Quero Minha Liberdade Financeira Agora!
                  </span>
                </motion.a>
              </motion.div>
          </div>
        </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-stretch">
            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-black w-full max-w-lg h-full">
                <Image
                  // IMPORTANTE: Use a imagem real da Flávia Raíssa aqui. Mantive o placeholder para demonstração.
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-Bqx4LSvAJGNsX0YMbmMga8Tg1To7VB.jpeg"
                  alt="Flávia Raissa, especialista em vendas online"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
      </div>
            </div>

            <div className="space-y-4 sm:space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#79450b]">Sobre Flávia Raissa</h2>

              <div className="space-y-3 sm:space-y-4 text-[#8c745c] leading-relaxed text-sm sm:text-base">
                {/* NOVA COPY: BIOGRAFIA DA FLÁVIA (DESKTOP) */}
                <p>
                  <span className="font-bold">Flávia Raíssa, 35 anos, mãe, esposa</span>, moro no interior no Paraná em uma cidade pequena. Eu comecei do zero, sem saber nada sobre o digital. Antes de viver da internet, eu era maquiadora, micropigmentadora, esteticista… trabalhava muito, atendia clientes, mas além de ganhar pouco, exigia muito do meu tempo e ficava longe da minha filha…
                </p>

                <p>
                  E eu sempre tive uma certeza: eu queria mais. Queria <span className="font-bold">liberdade, tempo com minha família</span>, e a chance de construir algo só meu. Foi aí que comecei a me interessar por divulgação na internet. Aprendi a vender, a divulgar, a transformar redes sociais em fonte de renda — e o que era uma renda extra virou minha profissão.
                </p>

                <p>
                  Hoje, vivo do que conquistei com o celular na mão. E o <span className="font-bold">PoDI – Poder da Divulgação na Internet</span> nasceu do desejo de ensinar outras mulheres a fazer o mesmo. Criar o PoDI foi a forma que encontrei de compartilhar tudo o que aprendi ao longo desses <span className="font-bold">mais de 10 anos trabalhando com internet</span> — sem segredos, sem enrolação, com métodos reais que funcionam.
                </p>
              </div>

<div className="mt-6 sm:mt-8">
                {/* NOVA COPY: MISSÃO DO PODI (DESKTOP) */}
                <h3 className="text-lg sm:text-xl font-bold text-[#79450b] mb-3 sm:mb-4">A missão do PoDI é para você que quer:</h3>
                <div className="space-y-2 text-sm sm:text-base text-[#8c745c]">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">Ajudar mulheres que estão <span className="font-bold">cansadas de depender dos outros</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">Que querem ter o <span className="font-bold">próprio dinheiro, realizar sonhos</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#d0c1b1] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">E provar que <span className="font-bold">liberdade financeira é possível</span> para quem decide aprender e arriscar.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <a
                  href="https://pay.kiwify.com.br/G7NBrKH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#79450b] to-[#8c745c] hover:from-[#8c745c] hover:to-[#79450b] text-[#fceede] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  🚀 Quero Minha Liberdade Financeira Agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}