'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    /* Reducimos la altura a 65vh para que se aprecie mejor el entorno */
    <div className="group relative h-[60vh] md:h-[65vh] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
      
      {/* Imagen con Zoom suave */}
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

      {/* Overlay optimizado: Menos negro sólido, más degradado */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Contenido con tamaños balanceados */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        
        <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter drop-shadow-lg">
          QUANTICO
        </h1>
        
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-blue-400 tracking-[0.15em] uppercase drop-shadow-md">
          El poder de la calidad
        </h2>
        
        <p className="max-w-lg text-sm md:text-lg mb-8 text-slate-100 font-medium drop-shadow-sm leading-relaxed opacity-90">
          Especialistas en equipos y servicios biomédicos de alta precisión
        </p>

        <a
          href="/contacto"
          className="
            group/btn relative overflow-hidden rounded-full bg-blue-600 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-bold 
            hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95
          "
        >
          <span className="relative z-10">Contáctanos ahora</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </a>
      </div>

      {/* Botones Flotantes más pequeños para no tapar */}
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

      {/* Dots más finos */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}