"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Clock, Heart } from "lucide-react";
import { THERAPIES, Therapy } from "@/data/spaData";
import { TherapyModal } from "./TherapyModal";

export function ServicesSection() {
  const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);

  return (
    <section id="terapias" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#225627]/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a24f24]/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#225627]/10 text-[#225627] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            Conheça Nossas Terapias
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-light text-[#1b261b] leading-tight"
          >
            Nossas <span className="italic text-[#a24f24] font-normal">Terapias & Massagens</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 mt-4 leading-relaxed font-light"
          >
            Oferecemos um portfólio completo de massagens e terapias corporais para atender suas necessidades de bem-estar, relaxamento e cuidado.
          </motion.p>
        </div>

        {/* 14 Therapies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {THERAPIES.map((therapy, index) => (
            <motion.div
              key={therapy.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e4decb] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Image Header */}
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  {therapy.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#a24f24] rounded-full shadow-md">
                        {therapy.tag}
                      </span>
                    </div>
                  )}

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] text-amber-100 font-medium flex items-center gap-1 border border-white/20">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{therapy.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif-title text-2xl font-normal text-[#1b261b] mb-2.5 group-hover:text-[#225627] transition-colors">
                    {therapy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 font-light">
                    {therapy.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedTherapy(therapy)}
                  className="w-full py-3 px-4 rounded-2xl bg-[#225627]/10 hover:bg-[#225627] text-[#225627] hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Saiba Mais</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
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
