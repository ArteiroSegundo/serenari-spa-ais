"use client";

import { MessageCircle } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#142b17] text-amber-100 text-xs font-semibold shadow-lg border border-emerald-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Fale Conosco no WhatsApp
      </span>

      {/* Button */}
      <a
        href={SPA_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center border-2 border-white"
        aria-label="Iniciar conversa no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/20" />
      </a>
    </div>
  );
}
