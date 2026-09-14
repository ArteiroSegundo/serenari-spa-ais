"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/spaData";

export function GallerySection() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeItemIndex !== null ? GALLERY_ITEMS[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section id="galeria" className="py-28 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#225627] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            <span>Nosso Espaço em Suzano/SP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-6xl font-light text-[#1b261b] leading-[1.15]"
          >
            Um Santuário de <span className="italic text-[#a24f24] font-normal">Paz & Acolhimento</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 mt-4 font-light leading-relaxed"
          >
            Cada detalhe do nosso espaço foi desenhado para acolher o seu corpo e desacelerar a sua mente.
            <span className="block text-xs font-medium text-[#225627] mt-1.5">
              (Clique em qualquer imagem para ampliar em tela cheia)
            </span>
          </motion.p>
        </div>

        {/* Editorial Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              onClick={() => setActiveItemIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-hairline shadow-sm hover:shadow-xl transition-all duration-500 ${
                item.colSpan || ""
              }`}
            >
              <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-gray-100`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.96] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    Ambiente 0{item.id}
                  </span>
                  <p className="text-sm font-medium leading-snug drop-shadow font-serif-title">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Sleek Custom Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveItemIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-serif-title text-amber-100">
                {activeItem.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                {(activeItemIndex ?? 0) + 1} de {GALLERY_ITEMS.length} • Suzano / SP
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
