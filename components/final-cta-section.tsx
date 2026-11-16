"use client"

import Image from "next/image"
import { CHECKOUT_URL } from "@/lib/constants"

export function FinalCTASection() {
  return (
    <section className="bg-[#f8f5ee] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="text-center mb-8">
              <div className="inline-block rounded-3xl overflow-hidden shadow-xl bg-black mb-6">
                <Image
                  src="/flavia-yuan-1.jpg"
                  alt="Flávia Raíssa e Yuan Martins"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#12110f] mb-2">
                Quem vai te ensinar?
              </h2>
              <p className="text-lg font-semibold text-[#9a721c]">Flávia Raíssa e Yuan</p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-[#5c564b]">
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="font-bold text-[#12110f]">Flávia Raíssa</span> trabalha há mais de 12 anos com o digital, acumulando experiência em vendas online, criação de conteúdo e divulgação de produtos.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="font-bold text-[#12110f]">Yuan Martins</span>, esposo da Flávia, entrou para o mercado digital ao perceber seu grande potencial e hoje atua ao seu lado, principalmente na parte de cadastros e configurações das plataformas.
              </p>
              <p className="leading-relaxed text-sm sm:text-base font-semibold text-[#12110f]">
                Juntos, vão ensinar você a dar seus primeiros passos no digital de maneira simples e prática!
              </p>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-xl font-bold text-[#12110f] mb-3 sm:mb-4">
                  A missão do PoDI + é para você que quer:
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-[#5c564b]">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Aprender a trabalhar com <span className="font-bold text-[#12110f]">Shein e Shopee</span> aparecendo ou não;
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Gravar e editar vídeos pelo celular, <span className="font-bold text-[#12110f]">mesmo começando do zero</span>;
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Seguir um <span className="font-bold text-[#12110f]">plano de ação prático de 4 semanas</span> no seu ritmo.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#12110f] text-[#e5c365] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-xl active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  QUERO COMEÇAR AGORA
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-stretch">
            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-black w-full max-w-lg h-full">
                <Image
                  src="/flavia-yuan-1.jpg"
                  alt="Flávia Raíssa e Yuan Martins"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12110f]">
                  Quem vai te ensinar?
                </h2>
                <p className="text-xl sm:text-2xl font-semibold text-[#9a721c] mt-2">
                  Flávia Raíssa e Yuan
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-[#5c564b] leading-relaxed text-sm sm:text-base">
                <p>
                  <span className="font-bold text-[#12110f]">Flávia Raíssa</span> trabalha há mais de 12 anos com o digital, acumulando experiência em vendas online, criação de conteúdo e divulgação de produtos.
                </p>

                <p>
                  <span className="font-bold text-[#12110f]">Yuan Martins</span>, esposo da Flávia, entrou para o mercado digital ao perceber seu grande potencial e hoje atua ao seu lado, principalmente na parte de cadastros e configurações das plataformas.
                </p>

                <p className="font-semibold text-[#12110f]">
                  Juntos, vão ensinar você a dar seus primeiros passos no digital de maneira simples e prática!
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#12110f] mb-3 sm:mb-4">
                  A missão do PoDI + é para você que quer:
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-[#5c564b]">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Aprender a trabalhar com <span className="font-bold text-[#12110f]">Shein e Shopee</span> aparecendo ou não;
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Gravar e editar vídeos pelo celular, <span className="font-bold text-[#12110f]">mesmo começando do zero</span>;
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a721c] flex-shrink-0 mt-0.5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Seguir um <span className="font-bold text-[#12110f]">plano de ação prático de 4 semanas</span> no seu ritmo.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#12110f] text-[#e5c365] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-xl active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  QUERO COMEÇAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
