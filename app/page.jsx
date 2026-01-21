'use client'

import { useEffect, useState } from "react"
import HeroCarousel from "./components/HeroCarousel"
import { ShieldCheck, Zap, Activity, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("modal-calibracion")
    if (!seen) {
      setShowModal(true)
      sessionStorage.setItem("modal-calibracion", "true")
    }
  }, [])

  return (
    <div className="flex flex-col w-full relative">

      {/* ================= MODAL CALIBRACIÓN ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md px-4">
          <div className="relative max-w-xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-2xl">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 dark:hover:text-white text-xl"
            >
              ✕
            </button>

            <span className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
              Servicio Destacado
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
              Calibración y <br />
              <span className="text-blue-600">Metrología Biomédica</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Asegure la exactitud y confiabilidad de sus equipos críticos bajo
              estándares metrológicos y trazabilidad certificada.
            </p>

            <div className="flex gap-4">
              <Link
                href="/servicios/calibracion"
                className="flex-1 text-center py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition"
              >
                Ver Servicio
              </Link>

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-4 border border-slate-300 dark:border-slate-700 rounded-2xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Más tarde
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ===================================================== */}

      {/* 1. HERO */}
      <section className="w-full">
        <HeroCarousel />
      </section>

      {/* 2. DIFERENCIALES */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<ShieldCheck size={44} />}
            title="Ingeniería Certificada"
            desc="Respaldo técnico especializado para garantizar la seguridad operativa de sus activos médicos."
          />
          <FeatureCard 
            icon={<Activity size={44} />}
            title="Gestión de Activos"
            desc="Trazabilidad completa y reportes digitales de cada intervención técnica realizada."
          />
          <FeatureCard 
            icon={<Zap size={44} />}
            title="Eficiencia Técnica"
            desc="Optimización de tiempos de respuesta para asegurar la continuidad de su servicio."
          />
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-6 relative overflow-hidden transition-colors duration-500">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Nuestros <span className="text-blue-600">Servicios</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Soluciones integrales de ingeniería para maximizar el rendimiento
                de su tecnología biomédica.
              </p>
            </div>

            <Link 
              href="/servicios" 
              className="group flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-lg hover:text-blue-700 dark:hover:text-white transition-all"
            >
              Explorar todo 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Calibración y Metrología"
              tag="Precisión"
              img="/foto3.jpg"
              href="/servicios/calibracion"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================= SUBCOMPONENTES ================= */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 w-20 h-20 flex items-center justify-center rounded-3xl">
        {icon}
      </div>
      <div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

function ServiceCard({ title, tag, img, href }) {
  return (
    <Link href={href} className="group relative h-[500px] rounded-[2.5rem] overflow-hidden flex items-end p-8 md:p-12 shadow-2xl">
      <img 
        src={img} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 brightness-[0.5] group-hover:brightness-[0.3]" 
      />
      <div className="relative z-10 w-full">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
          {tag}
        </span>
        <h3 className="text-white text-3xl md:text-4xl font-black mb-6 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="h-1.5 w-16 bg-blue-500 group-hover:w-full transition-all duration-700 ease-in-out" />
      </div>
    </Link>
  )
}
