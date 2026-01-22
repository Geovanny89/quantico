'use client'

import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado")
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Header de la página */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-12 md:py-20 px-4 md:px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Estamos para <span className="text-blue-600">Ayudarte</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            ¿Tienes dudas sobre un producto o necesitas una cotización? Nuestro equipo responderá tu solicitud en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Lado Izquierdo: Información de Contacto */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 md:mb-10 text-center lg:text-left">
              Información de Contacto
            </h2>
            <div className="space-y-8 md:space-y-10">
              <ContactInfoItem
                icon={<Phone size={20} />}
                title="Teléfono y WhatsApp"
                detail="+57 316 7950366"
                subDetail="Lunes a Viernes, 8:00 - 18:00"
              />
              <ContactInfoItem
                icon={<Mail size={20} />}
                title="Correo Electrónico"
                detail="jeyssonsg@quanticotec.com"
                subDetail="Atención al cliente y ventas"
              />
              <ContactInfoItem
                icon={<MapPin size={20} />}
                title="Ubicación"
                detail="Cúcuta, Colombia"
                subDetail="Cobertura y envíos a nivel nacional"
              />
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
                    <input
                      required
                      type="email"
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Asunto / Interés</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white appearance-none text-sm md:text-base"
                  >
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="ventas">Información de Productos</option>
                    <option value="cotizacion">Solicitar Cotización</option>
                    <option value="vendedor">Quiero ser Vendedor</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mensaje</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white resize-none text-sm md:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 md:py-5 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl md:rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-500 flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/10 text-sm md:text-base"
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
    <div className="flex flex-row gap-4 md:gap-6 items-start group">
      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">{title}</h4>
        <p className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base break-words">{detail}</p>
        <p className="text-slate-500 dark:text-slate-500 text-xs md:text-sm mt-1">{subDetail}</p>
      </div>
    </div>
  )
}