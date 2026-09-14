"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowRight, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#142b17]">
      {/* Background Image with Dark & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-hero.png"
          alt="Serenari Spa Ambiente de Bem-Estar"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.75]"
        />
        {/* Layered gradients for legibility and visual elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142b17] via-[#142b17]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142b17]/90 via-[#142b17]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-inner"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-amber-100 tracking-wide">
              {SPA_INFO.reviewsCount}
            </span>
          </motion.div>

          {/* Subtitle / Welcome badge */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase mb-3 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Seja bem-vindo(a) ao Serenari SPA
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.12] mb-6 drop-shadow-sm"
          >
            Transformamos o toque em{" "}
            <span className="italic font-normal text-[#e4b27a] underline decoration-[#a24f24]/60 decoration-wavy decoration-1 underline-offset-8">
              bem-estar
            </span>{" "}
            e leveza.
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-8 max-w-2xl font-light"
          >
            {SPA_INFO.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#terapias"
              className="px-7 py-4 rounded-full bg-[#a24f24] hover:bg-[#863f1b] text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
            >
              <span>Conheça Nossas Terapias</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={SPA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-amber-50 border border-white/25 font-semibold text-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Agendar via WhatsApp</span>
            </a>
          </motion.div>

          {/* Highlight Cards below Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15 pt-8"
          >
            <div className="flex items-center gap-3 text-emerald-100/90">
              <div className="p-2.5 rounded-full bg-white/10 text-amber-300 border border-white/10">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Massoterapia Humanizada</p>
                <p className="text-[11px] text-emerald-200/70">Atendimento acolhedor e escuta atenta</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-emerald-100/90">
              <div className="p-2.5 rounded-full bg-white/10 text-amber-300 border border-white/10">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Aromas & Sensorial</p>
                <p className="text-[11px] text-emerald-200/70">Ambiente preparado para desconectar</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-emerald-100/90">
              <div className="p-2.5 rounded-full bg-white/10 text-amber-300 border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Suzano – SP</p>
                <p className="text-[11px] text-emerald-200/70">Jardim Santa Helena, fácil acesso</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
