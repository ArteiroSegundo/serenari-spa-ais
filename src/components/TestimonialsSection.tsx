"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS, SPA_INFO } from "@/data/spaData";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#225627]/10 text-[#225627] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            Depoimentos Reais
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-light text-[#1b261b] leading-tight"
          >
            O que Nossos <span className="italic text-[#a24f24] font-normal">Clientes Dizem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-600 mt-3 font-light"
          >
            A satisfação de quem confia em nosso trabalho é nossa maior motivação.
          </motion.p>

          {/* Google Rating Counter Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#225627] text-white shadow-lg border border-emerald-700"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold tracking-wide">
              {SPA_INFO.reviewsCount}
            </span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-[#e4decb] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#225627]/10 group-hover:text-[#225627]/20 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-4 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#225627] shrink-0 bg-emerald-50">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1b261b]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-[#225627] font-medium flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-[#225627]" />
                    <span>{testimonial.badge}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
