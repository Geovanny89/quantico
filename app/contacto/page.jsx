'use client'

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log("Formulario enviado")
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Header de la página */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Estamos para <span className="text-blue-600">Ayudarte</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            ¿Tienes dudas técnicas o necesitas una cotización formal? Nuestro equipo de ingenieros responderá tu solicitud en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Lado Izquierdo: Información de Contacto */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Información de Contacto</h2>
              <div className="space-y-8">
                <ContactInfoItem
                  icon={<Phone />}
                  title="Teléfono y WhatsApp"
                  detail="+57 316 7950366"
                  subDetail="Lunes a Viernes, 8:00 - 18:00"
                />
                <ContactInfoItem
                  icon={<Mail />}
                  title="Correo Electrónico"
                  detail="info@quanticotec.com"
                  subDetail="Soporte técnico y ventas"
                />
                <ContactInfoItem
                  icon={<MapPin />}
                  title="Ubicación"
                  detail="Cúcuta, Colombia"
                  subDetail="Cobertura y servicio a nivel nacional"
                />
              </div>
            </div>

            {/* Tarjeta de Soporte Rápido */}
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
              <MessageSquare className="mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">¿Soporte Técnico Urgente?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Si su equipo biomédico presenta una falla crítica, contáctenos directamente vía WhatsApp para atención inmediata.
              </p>

              <a
                href="https://wa.me/573000000000?text=Hola%20Quantico%2C%20tengo%20una%20URGENCIA%20T%C3%89CNICA%20con%20un%20equipo.%20Necesito%20soporte%20inmediato."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-blue-600 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
      <input
        required // <--- AGREGADO
        type="text"
        placeholder="Ej: Juan Pérez"
        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
      <input
        required // <--- AGREGADO
        type="email"
        placeholder="juan@empresa.com"
        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
      />
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Asunto / Servicio de Interés</label>
    <select 
      required // <--- AGREGADO
      defaultValue="" 
      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white appearance-none"
    >
      <option value="" disabled>Seleccione una opción</option> {/* Opción vacía por defecto */}
      <option value="calibracion">Calibración Metrológica</option>
      <option value="otro">Otro</option>
    </select>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mensaje</label>
    <textarea
      required // <--- AGREGADO
      rows="5"
      placeholder="Cuéntanos sobre tu necesidad técnica..."
      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-500 flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/10"
  >
    Enviar Mensaje <Send size={18} />
  </button>
</form>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

function ContactInfoItem({ icon, title, detail, subDetail }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white text-lg">{title}</h4>
        <p className="text-slate-700 dark:text-slate-300 font-medium">{detail}</p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">{subDetail}</p>
      </div>
    </div>
  )
}