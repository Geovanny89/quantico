'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const images = [
  { src: '/c1.jpg', alt: 'Equipos biomédicos' },
  { src: '/cp7.jpg', alt: 'Mantenimiento médico' },
  { src: '/c3.jpg', alt: 'Tecnología hospitalaria' },
  { src: '/c4.jpg', alt: 'Calibración certificada' },
  { src: '/c5.jpg', alt: 'Soporte técnico especializado' }
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1)
  const next = () => setIndex((index + 1) % images.length)

  return (
    <div className="group relative h-[60vh] md:h-[65vh] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl">

      {/* Imagen fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          fill
          priority
          className="object-cover transition-all duration-[2000ms] ease-out scale-100 group-hover:scale-110"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* CONTENIDO */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">

          {/* ✅ LOGO CON ANIMACIÓN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Image
              src="/logo2.png"
              alt="Quantico Logo"
              width={160}
              height={160}
              priority
              className="w-28 md:w-40 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* ❌ TEXTO SIN ANIMACIÓN */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter drop-shadow-lg">
              QUANTICO
            </h1>

            <h2 className="text-lg md:text-2xl font-bold mb-4 text-blue-400 tracking-[0.15em] uppercase drop-shadow-md">
              El poder de la calidad
            </h2>

            <p className="max-w-lg text-sm md:text-lg mb-6 text-slate-100 font-medium leading-relaxed opacity-90">
              Especialistas en equipos y servicios biomédicos de alta precisión
            </p>

            <a
              href="https://wa.me/573167950366?text=Hola%20Quantico,%20necesito%20información%20sobre%20sus%20servicios%20biomédicos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative overflow-hidden rounded-full bg-[#25D366] px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-bold 
                         hover:bg-[#20ba5a] hover:shadow-lg transition-all active:scale-95"
            >
              Contáctanos ahora
            </a>
          </div>

        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/40"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/40"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
