"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, Quote, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, SPA_INFO } from "@/data/spaData";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = TESTIMONIALS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="depoimentos" className="py-28 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#225627] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            <span>Depoimentos & Experiências</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-6xl font-light text-[#1b261b] leading-[1.15]"
          >
            As pessoas <span className="italic text-[#a24f24] font-normal">amam esse lugar</span>.
          </motion.h2>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#225627]">
              {SPA_INFO.reviewsCount}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROVA SOCIAL PROTAGONISTA (PROTAGONIST FEATURED QUOTE SPREAD)              */}
        {/* ========================================================================= */}
        <div className="relative bg-[#142b17] text-white rounded-3xl p-8 sm:p-14 mb-16 shadow-2xl border border-hairline-dark overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none" />

          <div className="max-w-4xl space-y-8 relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Protagonist Large Quote */}
            <motion.blockquote
              key={featured.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif-title text-2xl sm:text-4xl font-light text-white leading-relaxed italic"
            >
              &ldquo;{featured.comment}&rdquo;
            </motion.blockquote>

            {/* Author Meta & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/15">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300 shrink-0 bg-emerald-50">
                  <Image
                    src={featured.avatar}
                    alt={featured.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {featured.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{featured.badge}</span>
                  </p>
                </div>
              </div>

              {/* Slide Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Avaliação anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-amber-200 font-mono">
                  0{activeIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Próxima avaliação"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY REVIEWS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.filter((_, i) => i !== activeIndex).slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-hairline shadow-sm space-y-4 hover:border-[#225627]/40 transition-colors"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed line-clamp-3 italic">
                &ldquo;{item.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-hairline">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#225627]">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1b261b]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-light">
                    Google Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
