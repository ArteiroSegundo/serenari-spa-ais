"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock, CheckCircle2, ArrowUpRight, Grid } from "lucide-react";
import { THERAPIES, FEATURED_DISCOVERY_TERAPIES, Therapy } from "@/data/spaData";
import { TherapyModal } from "./TherapyModal";

export function ServicesSection() {
  const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todas as Terapias (14)" },
    { id: "relaxamento", label: "Relaxamento & Leveza" },
    { id: "terapeutica", label: "Alívio de Dores" },
    { id: "estetica", label: "Drenagem & Estética" },
    { id: "especial", label: "Experiências Especiais" }
  ];

  const filteredTherapies = activeCategory === "todas"
    ? THERAPIES
    : THERAPIES.filter((t) => t.category === activeCategory);

  return (
    <section id="terapias" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#225627]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#225627] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            <span>Nossas Terapias</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-6xl font-light text-[#1b261b] leading-[1.15]"
          >
            Experiências de toque desenhadas para a sua{" "}
            <span className="italic text-[#a24f24] font-normal">reconexão</span>.
          </motion.h2>
        </div>

        {/* ========================================================================= */}
        {/* PARTE 1: DESCOBERTA EDITORIAL (FEATURED SPREADS)                          */}
        {/* ========================================================================= */}
        <div className="space-y-24 mb-32">
          {FEATURED_DISCOVERY_TERAPIES.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Composition */}
                <div className={`lg:col-span-7 relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-lg border border-hairline">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <span className="text-xs font-serif-title text-amber-200 tracking-wider uppercase">
                        Destaque 0{idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium text-amber-100 border border-white/20">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-[#a24f24] uppercase">
                      Terapias de Assinatura
                    </span>
                    <h3 className="font-serif-title text-3xl sm:text-4xl font-normal text-[#1b261b] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                    {item.fullDescription}
                  </p>

                  {item.quote && (
                    <blockquote className="border-l-2 border-[#a24f24] pl-4 text-xs sm:text-sm font-serif-title italic text-[#225627]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  )}

                  <ul className="space-y-2 pt-2">
                    {item.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#225627] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedTherapy(item)}
                      className="px-6 py-3 rounded-full bg-[#225627] hover:bg-[#1a441e] text-white text-xs font-semibold shadow-md transition-all flex items-center gap-2 group"
                    >
                      <span>Conhecer Detalhes da Sessão</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* PARTE 2: CATÁLOGO COMPLETO DE TERAPIAS (REFINED FILTER & MINIMAL CARDS)   */}
        {/* ========================================================================= */}
        <div className="pt-16 border-t border-hairline">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#225627] mb-2">
                <Grid className="w-4 h-4 text-[#a24f24]" />
                <span>Catálogo Geral</span>
              </div>
              <h3 className="font-serif-title text-3xl font-light text-[#1b261b]">
                Todas as Nossas Terapias & Massagens
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#225627] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-hairline"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Minimal Catalog Grid (No box-carditis) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapies.map((therapy) => (
              <div
                key={therapy.id}
                className="group bg-white rounded-2xl overflow-hidden border border-hairline transition-all duration-300 flex flex-col justify-between hover:border-[#225627]/40"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={therapy.image}
                      alt={therapy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] text-amber-100 font-medium flex items-center gap-1 border border-white/20">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{therapy.duration}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-2">
                    <h4 className="font-serif-title text-xl font-normal text-[#1b261b] group-hover:text-[#225627] transition-colors">
                      {therapy.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-light line-clamp-3">
                      {therapy.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedTherapy(therapy)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#225627] text-[#225627] hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-hairline"
                  >
                    <span>Saiba Mais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Therapy Detail Modal */}
      <TherapyModal
        therapy={selectedTherapy}
        onClose={() => setSelectedTherapy(null)}
      />
    </section>
  );
}
