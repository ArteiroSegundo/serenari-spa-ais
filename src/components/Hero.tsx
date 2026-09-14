"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowRight, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function Hero() {
  return (
    <section 
      aria-label="Apresentação Serenari Spa"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#142b17] text-white"
    >
      {/* Background Image & Editorial Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/background-hero.png"
          alt="Ambiente acolhedor e sensorial do Serenari Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 brightness-[0.65] contrast-[1.05]"
        />
        {/* Soft, layered gradient overlays for quiet depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142b17] via-[#142b17]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142b17]/95 via-[#142b17]/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Social Proof Counter Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm"
          >
            <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 estrelas no Google">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-medium text-amber-100 tracking-wide">
              {SPA_INFO.reviewsCount}
            </span>
          </motion.div>

          {/* Subtitle Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase mb-3 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Seja bem-vindo(a) ao Serenari SPA</span>
          </motion.p>

          {/* Main Title - Pure Editorial Elegance */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.12] mb-6 tracking-tight"
          >
            Transformamos o toque em{" "}
            <span className="italic font-normal text-[#e4b27a]">
              bem-estar
            </span>{" "}
            e leveza.
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-10 max-w-2xl font-light"
          >
            {SPA_INFO.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#terapias"
              className="px-8 py-4 rounded-full bg-[#a24f24] hover:bg-[#863f1b] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Conheça Nossas Terapias</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={SPA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-amber-50 border border-white/25 font-semibold text-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Agendar via WhatsApp</span>
            </a>
          </motion.div>

          {/* Editorial Highlight Strip below Hero (Border Hairline, No Heavy Cards) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-hairline-dark grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Massoterapia Humanizada</p>
                <p className="text-[11px] text-emerald-200/70">Atendimento acolhedor e escuta atenta</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Ambiente Sensorial</p>
                <p className="text-[11px] text-emerald-200/70">Aromas e atmosfera para desconectar</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Espaço em Suzano – SP</p>
                <p className="text-[11px] text-emerald-200/70">Jardim Santa Helena, fácil acesso</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
