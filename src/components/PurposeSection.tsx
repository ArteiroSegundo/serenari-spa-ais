"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake } from "lucide-react";
import { MANIFESTO_PILLARS } from "@/data/spaData";

export function PurposeSection() {
  return (
    <section id="proposito" className="py-28 bg-[#f4f0e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#225627]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            <span>Manifesto Serenari</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-6xl font-light text-[#1b261b] leading-[1.15]"
          >
            Os pilares do nosso <span className="italic text-[#a24f24] font-normal">compromisso humano</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-600 font-light leading-relaxed"
          >
            Não acreditamos em tratamentos padronizados. Existimos para oferecer uma pausa consciente, escuta genuína e cuidado tátil em Suzano.
          </motion.p>
        </div>

        {/* Manifesto Editorial Grid (No Box-Carditis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 border-t border-hairline pt-12">
          {MANIFESTO_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4 relative"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#a24f24] font-mono">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-title text-2xl font-normal text-[#1b261b]">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                {pillar.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#225627]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#a24f24]" />
                <span>{pillar.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-20 pt-10 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>Serenari Spa — Espaço de Massoterapia Humanizada em Suzano / SP</p>
          <span className="text-[#225627] font-semibold">Autocuidado é um direito, não um luxo.</span>
        </div>

      </div>
    </section>
  );
}
