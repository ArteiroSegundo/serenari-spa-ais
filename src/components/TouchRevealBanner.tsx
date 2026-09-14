"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function TouchRevealBanner() {
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTouchPos({ x, y });
  };

  const handleMouseLeave = () => {
    setTouchPos(null);
  };

  return (
    <section 
      aria-label="Manifesto do Toque Serenari"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-20 bg-[#142b17] text-white overflow-hidden border-y border-hairline-dark select-none"
    >
      {/* Dynamic Touch Warm Glow Effect */}
      {touchPos && (
        <div
          className="pointer-events-none absolute w-96 h-96 rounded-full bg-[#a24f24]/30 blur-3xl transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${touchPos.x - 192}px, ${touchPos.y - 192}px)`,
          }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Filosofia Serenari</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide text-white leading-tight"
        >
          &ldquo;O TOQUE <span className="italic font-normal text-[#e4b27a]">TRANSFORMA</span>.&rdquo;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-emerald-100/80 font-light max-w-xl mx-auto leading-relaxed pt-2"
        >
          Não oferecemos apenas massagens. Entregamos uma pausa consciente para a mente e um abraço cuidadoso para o corpo.
        </motion.p>
      </div>
    </section>
  );
}
