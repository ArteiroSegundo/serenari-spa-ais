"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Compass, HeartHandshake, CheckCircle } from "lucide-react";
import { PURPOSE_PILLARS } from "@/data/spaData";

export function PurposeSection() {
  return (
    <section id="proposito" className="py-24 bg-[#f4f0e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#225627]/10 text-[#225627] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            Nosso Propósito
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-light text-[#1b261b] leading-tight"
          >
            Pilares que Guiam a Nossa <span className="italic text-[#a24f24] font-normal">Jornada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-600 mt-4 font-light"
          >
            Os pilares que guiam nosso trabalho diário e fortalecem nossa relação com clientes e parceiros.
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-[#e4decb] shadow-md relative overflow-hidden group hover:border-[#225627] transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#225627]/10 text-[#225627] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="font-serif-title text-2xl font-normal text-[#1b261b] mb-3">
              Missão
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              {PURPOSE_PILLARS.mission}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-[#e4decb] shadow-md relative overflow-hidden group hover:border-[#a24f24] transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#a24f24]/10 text-[#a24f24] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="font-serif-title text-2xl font-normal text-[#1b261b] mb-3">
              Visão
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              {PURPOSE_PILLARS.vision}
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#225627] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/20 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10 text-amber-300">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-title text-2xl font-normal text-white">
                  Nossos Valores
                </h3>
                <p className="text-xs text-emerald-100/80">O compromisso inegociável em cada atendimento</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PURPOSE_PILLARS.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">{val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
