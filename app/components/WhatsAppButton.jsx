'use client'

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phoneNumber = "573167950366"
  const message = "Hola Quantico, necesito información sobre sus servicios de ingeniería."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 group flex items-center select-none"
      aria-label="Contactar por WhatsApp"
    >
      {/* Texto (solo desktop) */}
      <span className="hidden md:inline-block mr-3 px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 border border-slate-100 dark:border-slate-800">
        ¿Necesitas ayuda?
      </span>

      <div className="relative">
        {/* Pulso suave */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
          <FaWhatsapp size={26} className="md:w-7 md:h-7" />
        </div>
      </div>
    </a>
  )
}
