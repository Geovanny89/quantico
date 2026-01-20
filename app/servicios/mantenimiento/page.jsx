'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Settings, ShieldCheck, Zap, ArrowRight, Activity, Award } from 'lucide-react'

export default function MantenimientoPreventivo() {
  const beneficios = [
    {
      title: 'Conservación de Instrumentos',
      desc: 'Sistemas de preservación activa para prolongar la vida útil de activos biomédicos de alta complejidad.',
      icon: <ShieldCheck size={32}  />,
      tag: 'Longevidad'
    },
    {
      title: 'Rendimiento Óptimo',
      desc: 'Ajuste de parámetros críticos según protocolos originales de fábrica para garantizar precisión absoluta.',
      icon: <Activity size={32} c />,
      tag: 'Precisión'
    },
    {
      title: 'Eficiencia Operativa',
      desc: 'Mitigación de riesgos por inoperatividad y optimización del consumo energético del equipamiento.',
      icon: <Zap size={32}  />,
      tag: 'Ahorro'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center overflow-hidden bg-slate-900 py-12 group">
  
  {/* Contenedor animado */}
  <div className="absolute inset-0 transition-transform duration-[3000ms] ease-out group-hover:scale-105">
   <Image
  src="/foto1.jpg"
  alt="Mantenimiento Preventivo"
  fill
  priority
  className="object-cover brightness-[0.85] dark:brightness-[0.75]"
/>
  </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 md:via-slate-950/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
            <Award size={14} /> Servicio Técnico Oficial
          </div>
          {/* text-4xl para mobile, text-7xl para desktop */}
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
            MANTENIMIENTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              PREVENTIVO
            </span>
          </h1>
          <p className="max-w-xl text-base md:text-xl text-slate-300 font-light leading-relaxed">
            Ingeniería especializada en la conservación y optimización técnica de infraestructura hospitalaria e industrial.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN TÉCNICA: De 12 columnas a 1 en mobile --- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Columna Izquierda: Narrativa */}
          <div className="lg:col-span-7">
            <h2 className="text-[10px] md:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
              Estándares de Calidad
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">
              Garantizamos la continuidad de <br className="hidden md:block" /> su operación médica.
            </h3>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Nuestro protocolo de mantenimiento preventivo es un sistema integral de diagnóstico anticipado que detecta fallas potenciales antes de ser críticas.
              </p>
            </div>

            {/* Grid de checks: 1 columna en mobile, 2 en sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8">
              {[
                'Protocolos de Calidad Funcional',
                'Técnicos Senior Certificados',
                'Soporte Multimarca Especializado',
                'Informes Técnicos Digitales'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Beneficios */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900/50 
                           border border-slate-200 dark:border-slate-800
                           hover:border-blue-500/50 transition-all duration-500
                           backdrop-blur-xl shadow-lg dark:shadow-none"
              >
                <div className="absolute top-4 right-6 opacity-10 text-slate-900 dark:text-white font-black text-2xl md:text-4xl">
                  0{i + 1}
                </div>
                <div className="mb-4 md:mb-6 inline-flex p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-blue-500/10 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  {/* Icono más pequeño en mobile */}
                  <div className="scale-75 md:scale-100">{b.icon}</div>
                </div>
                <span className="block text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                  {b.tag}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 transition-colors group-hover:text-blue-600">
                  {b.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL: Optimizado para pulgares en mobile --- */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-slate-900 dark:bg-blue-600 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-2 leading-tight">
                ¿Listo para optimizar <br className="hidden md:block" /> su tecnología?
              </h2>
              <p className="text-blue-100/70 text-sm md:text-base font-light">Agende una consultoría técnica con nuestros expertos.</p>
            </div>
            
            <Link
              href="/contacto"
              className="w-full lg:w-auto group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-xl"
            >
              Contactar Ahora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-blue-600" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}