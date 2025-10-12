'use client'

import Image from "next/image"
import { motion } from "framer-motion"

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
    image: "/testimonials/7.png",
    alt: "Depoimento Instagram - Canteguerra",
  },
  {
    image: "/testimonials/10.jpeg",
    alt: "Depoimento Instagram - Canteguerra",
  },
  {
    image: "/testimonials/12.jpeg",
    alt: "Depoimento Instagram - Canteguerra",
  },

]

export function TestimonialsSection() {
  return (
    <section className="bg-[#432818] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#fceede]">
            Da uma olhada no <br /> que as alunas do <br /> PoDI estão falando
          </h2>

          <p className="text-lg sm:text-xl text-[#fceede]/80 mt-4">
            Centenas de mulheres já transformaram suas vidas com o PoDI
          </p>
        </motion.div>

        {/* Testimonials Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={400}
                height={600}
                className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
