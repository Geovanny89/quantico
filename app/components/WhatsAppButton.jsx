'use client'
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Reemplaza con tu número real (código de país + número sin espacios)
  const phoneNumber = "+573167950366"; 
  const message = "Hola Quantico, necesito información sobre sus servicios de ingeniería.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* Etiqueta flotante (aparece en hover) */}
      <span className="mr-3 px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 border border-slate-100 dark:border-slate-800">
        ¿Necesitas ayuda?
      </span>

      {/* Botón Circular con efecto de pulso */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
        <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} fill="currentColor" />
        </div>
      </div>
    </a>
  );
}