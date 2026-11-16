"use client"

import Image from "next/image"

const testimonials = [
  {
    image: "/testimonials/1.jpeg",
    alt: "Depoimento Instagram - Rafaela Lopes",
  },
  {
    image: "/testimonials/2.jpeg",
    alt: "Depoimento Instagram - Pensei Arranjas",
  },
  {
    image: "/testimonials/3.jpeg",
    alt: "Depoimento WhatsApp - Paula Braccesi",
  },
  {
    image: "/testimonials/4.png",
    alt: "Depoimento Instagram - Taiana Disaro",
  },
  {
    image: "/testimonials/6.png",
    alt: "Depoimento Instagram - Andreza Farias",
  },
  {
    image: "/testimonials/9.png",
    alt: "Depoimento Instagram - Rosangela Hayden",
  },
  {
    image: "/testimonials/13.jpeg",
    alt: "Depoimento Instagram - Canteguerra",
  },
  {
    image: "/testimonials/10.jpeg",
    alt: "Depoimento Instagram - Canteguerra",
  },
  {
    image: "/testimonials/14.jpeg",
    alt: "Depoimento Instagram - Canteguerra",
  },
  {
    image: "/testimonials/8.png",
    alt: "Depoimento Instagram - Canteguerra",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#12110f] py-14 sm:py-18 md:py-22 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8f5ee] text-balance">
            Dá uma olhada no que as alunas do PoDI estão falando
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#f8f5ee]/75 mt-3">
            Centenas de mulheres já transformaram suas vidas com o PoDI
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={400}
                height={600}
                className="w-full h-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
