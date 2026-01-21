'use client'

import { ShieldCheck, FileText, Lock, UserCheck, ArrowLeft, Microscope } from "lucide-react"
import Link from "next/link"

export default function Privacidad() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/20 -z-10" />

      <article className="max-w-4xl mx-auto px-6 py-20">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al sitio técnico
        </Link>

        <header className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-10">
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <Microscope size={32} />
            <span className="font-bold tracking-widest uppercase text-sm">Protocolo de Confidencialidad</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Política de Tratamiento de <span className="text-blue-600">Datos Personales</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            En <span className="font-bold text-slate-900 dark:text-slate-200">Quantico Tecnología</span>, la privacidad y la seguridad de la información técnica de nuestros clientes son nuestra máxima prioridad. Este documento garantiza que sus datos se manejan bajo estricta reserva profesional.
          </p>
        </header>

        <div className="space-y-12">
          <PrivacySection 
            icon={<FileText className="text-blue-600" size={24} />}
            title="1. Recolección de Información"
            content="Recopilamos únicamente los datos necesarios para la prestación de servicios de calibración y mantenimiento: nombre de contacto, NIT de la institución, correo corporativo, teléfono y la hoja de vida técnica de los equipos intervenidos."
          />

          <PrivacySection 
            icon={<ShieldCheck className="text-blue-600" size={24} />}
            title="2. Finalidad del Tratamiento"
            content="La información se utiliza exclusivamente para la emisión de certificados de calibración, recordatorios de mantenimiento preventivo, soporte técnico post-servicio y cumplimiento de normativas de salud vigentes."
          />

          <PrivacySection 
            icon={<Lock className="text-blue-600" size={24} />}
            title="3. Política de No Compartición"
            content="Quantico Tecnología no vende, no alquila y no comparte información con terceros. Sus datos y los resultados de las calibraciones son privados y solo son accesibles por el personal técnico autorizado y el cliente titular."
          />

          <PrivacySection 
            icon={<UserCheck className="text-blue-600" size={24} />}
            title="4. Derechos de Habeas Data"
            content="Como titular, usted tiene derecho a conocer, actualizar o solicitar la supresión de sus datos de nuestra base de datos en cualquier momento, enviando una solicitud formal a info@quanticotec.com."
          />
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
              Esta política cumple con la <strong>Ley 1581 de 2012</strong> de la República de Colombia. 
              <br />
              Última revisión: Enero {currentYear} | Cúcuta, Colombia.
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}

function PrivacySection({ icon, title, content }) {
  return (
    <section className="flex gap-6 items-start">
      <div className="hidden md:flex p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  )
}