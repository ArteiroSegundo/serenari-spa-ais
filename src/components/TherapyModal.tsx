"use client";

import Image from "next/image";
import { X, Clock, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Therapy, SPA_INFO } from "@/data/spaData";

interface TherapyModalProps {
  therapy: Therapy | null;
  onClose: () => void;
}

export function TherapyModal({ therapy, onClose }: TherapyModalProps) {
  if (!therapy) return null;

  const whatsappMessage = `Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20*${encodeURIComponent(
    therapy.title
  )}*%20no%20Serenari%20SPA.`;

  const therapyWhatsappUrl = `https://wa.me/551151081983?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-900/10 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-200 focus:outline-none"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full bg-[#142b17]">
          <Image
            src={therapy.image}
            alt={therapy.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142b17] via-[#142b17]/40 to-transparent" />
          
          {/* Badge & Duration */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              {therapy.tag && (
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-white bg-[#a24f24] rounded-full mb-2 shadow-sm">
                  {therapy.tag}
                </span>
              )}
              <h3 className="font-serif-title text-2xl sm:text-3xl font-normal text-white drop-shadow">
                {therapy.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-amber-100 border border-white/20">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{therapy.duration}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#225627] uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
              Sobre o Tratamento
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              {therapy.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-[#fbf9f5] p-5 rounded-2xl border border-[#e4decb]">
            <h4 className="text-xs font-bold tracking-widest text-[#225627] uppercase mb-3">
              Benefícios Principais
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {therapy.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#225627] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-emerald-950/5 border-t border-emerald-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-gray-500">Agendamento direto no Serenari Spa</p>
            <p className="text-sm font-semibold text-[#225627]">Suzano/SP • Atendimento Personalizado</p>
          </div>

          <a
            href={therapyWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#225627] hover:bg-[#1a441e] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Agendar {therapy.title}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
