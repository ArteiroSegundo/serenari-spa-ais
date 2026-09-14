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
    <section id="galeria" className="py-24 bg-[#fbf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#225627]/10 text-[#225627] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#a24f24]" />
            Nosso Espaço em Suzano/SP
          </div>

          <h2 className="font-serif-title text-4xl sm:text-5xl font-light text-[#1b261b] leading-tight">
            Um Santuário de <span className="italic text-[#a24f24] font-normal">Paz & Acolhimento</span>
          </h2>

          <p className="text-base text-gray-600 mt-4 font-light">
            Conheça as instalações preparadas nos mínimos detalhes para a sua experiência de bem-estar.
            <span className="block text-xs font-medium text-[#225627] mt-2">
              (Clique nas imagens para ampliar)
            </span>
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-[#e4decb]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium leading-snug drop-shadow">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
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

          {/* Image Container */}
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
                {(activeItemIndex ?? 0) + 1} de {GALLERY_ITEMS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
