"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Feather, ShieldCheck } from "lucide-react";
import { ACROSTIC_POEM, SPA_INFO } from "@/data/spaData";

export function AboutSection() {
  return (
    <section id="sobre" className="py-28 bg-[#142b17] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#225627] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a24f24] rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PARTE 1: HISTÓRIA & ESSÊNCIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-widest border border-white/15">
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
              <p className="text-amber-100 italic border-l-2 border-[#a24f24] pl-4 font-serif-title text-xl pt-1">
                &ldquo;No Serenari, não oferecemos apenas massagens. Entregamos reconexão, presença e leveza.&rdquo;
              </p>
            </div>

            {/* Core Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">Massoterapia Humanizada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                  <Feather className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">Leveza & Presença</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/10 text-amber-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">Cuidado Integral</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <Image
                src="/sobre-nos/04.jpg"
                alt="Espaço Serenari Spa Suzano"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142b17] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Suzano / SP
                </p>
                <p className="font-serif-title text-xl text-white">
                  Seu refugio urbano de descanso
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PARTE 2: ACRÓSTICO EDITORIAL (S-E-R-E-N-A-R-I COMO PEÇA DE DESIGN) */}
        <div className="pt-16 border-t border-white/15">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Identidade em Versos
            </span>
            <h3 className="font-serif-title text-3xl sm:text-4xl font-light text-white">
              O Acróstico <span className="italic text-[#e4b27a]">Serenari</span>
            </h3>
          </div>

          {/* Editorial Vertical Typography Grid - No Carditis */}
          <div className="max-w-4xl mx-auto space-y-6">
            {ACROSTIC_POEM.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex items-center gap-6 py-3 border-b border-white/10 hover:border-amber-400/50 transition-colors"
              >
                <span className="font-serif-title text-3xl sm:text-4xl font-bold text-[#e4b27a] w-10 text-center shrink-0 group-hover:scale-110 transition-transform">
                  {line.letter}
                </span>

                <div className="w-8 h-[1px] bg-[#a24f24] shrink-0" />

                <p className="text-sm sm:text-lg text-emerald-100/90 font-light tracking-wide leading-relaxed group-hover:text-white transition-colors">
                  {line.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
