"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Feather, ShieldCheck } from "lucide-react";
import { ACROSTIC_POEM, SPA_INFO } from "@/data/spaData";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#142b17] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#225627] rounded-full blur-[140px] opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a24f24] rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - History & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Nossa Essência em Suzano/SP
            </div>

            <h2 className="font-serif-title text-4xl sm:text-5xl font-light text-white leading-tight">
              Transformando o toque em{" "}
              <span className="italic text-[#e4b27a] font-normal">reconexão e leveza</span>.
            </h2>

            <div className="space-y-4 text-emerald-100/90 text-base sm:text-lg leading-relaxed font-light">
              <p>
                O <strong className="text-amber-200 font-semibold">Serenari Spa</strong> nasceu com um propósito claro: transformar o toque em bem-estar. Somos um espaço de massoterapia humanizada em Suzano–SP, criado para oferecer mais do que um momento de alívio — proporcionamos experiências completas de cuidado com o corpo e com a mente.
              </p>
              <p>
                Acreditamos que autocuidado é um direito, não um luxo. Cada detalhe importa: o ambiente sensorial, o acolhimento respeitoso, os aromas terapêuticos e a escuta atenta das necessidades de cada corpo.
              </p>
              <p className="text-amber-100 italic border-l-2 border-[#a24f24] pl-4 font-serif-title text-xl">
                &ldquo;No Serenari, não oferecemos apenas massagens. Entregamos reconexão, presença e leveza.&rdquo;
              </p>
            </div>

            {/* Core Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white/10 text-amber-300">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-white">Massoterapia Humanizada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white/10 text-amber-300">
                  <Feather className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-white">Leveza & Presença</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white/10 text-amber-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-white">Cuidado Integral</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Acrostic Poem Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/15 shadow-2xl relative"
          >
            <div className="absolute top-6 right-6 opacity-20 w-16 h-16 relative">
              <Image
                src={SPA_INFO.logoAboutUs}
                alt="Serenari Symbol"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-serif-title text-2xl text-amber-200 mb-6 flex items-center gap-2">
              <span>Acróstico Serenari</span>
            </h3>

            <div className="space-y-3.5">
              {ACROSTIC_POEM.map((line, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#a24f24] text-white font-bold text-sm shrink-0 font-serif-title shadow-sm group-hover:scale-110 transition-transform">
                    {line.letter}
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-100/90 font-light leading-snug pt-1">
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
