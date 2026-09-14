"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Clock, Phone, MessageCircle, Instagram, Facebook, Mail } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function LocationContact() {
  return (
    <section id="contato" className="py-28 bg-[#142b17] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#225627] rounded-full blur-[140px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-widest border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Venha nos Fazer uma Visita!
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-white leading-[1.15]">
            Agende Seu <span className="italic text-[#e4b27a] font-normal">Momento de Cuidado</span>.
          </h2>

          <p className="text-base text-emerald-100/80 font-light leading-relaxed">
            Entre em contato agora mesmo e descubra como podemos cuidar de você. Sua jornada de bem-estar começa aqui em Suzano/SP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-hairline-dark shadow-2xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-serif-title text-2xl text-amber-200 border-b border-white/15 pb-4">
                Informações de Contato
              </h3>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#a24f24] text-white shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Nosso Espaço em Suzano/SP
                  </h4>
                  <p className="text-sm text-emerald-50 mt-1 font-light leading-relaxed">
                    {SPA_INFO.address}
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#225627] text-white shrink-0 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-sm text-emerald-50 mt-1 font-light">
                    Segunda a Sábado: 09:00hr - 19:00hr
                  </p>
                  <p className="text-xs text-amber-200/70 font-light mt-0.5">
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              {/* Telefone e Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-amber-300 shrink-0 border border-white/15">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Telefone & Atendimento
                  </h4>
                  <p className="text-sm text-emerald-50 mt-1 font-semibold">
                    {SPA_INFO.phone}
                  </p>
                  <p className="text-xs text-emerald-200/70 font-light mt-0.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-300" />
                    <span>{SPA_INFO.email}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-6 border-t border-white/15">
              <a
                href={SPA_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-[#225627] hover:bg-[#1a441e] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Agendar Agora no WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SPA_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href={SPA_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 flex items-center justify-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white/5 p-2 rounded-2xl border border-hairline-dark shadow-2xl relative min-h-[420px]"
          >
            <iframe
              title="Localização Serenari Spa em Suzano/SP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.077672288005!2d-46.3130283!3d-23.5387114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce77e5e1a1a5bd%3A0x8e8334460fbd364a!2sR.%20Mal.%20Rondon%2C%20192%20-%20Jardim%20Santa%20Helena%2C%20Suzano%20-%20SP%2C%2008674-060!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1rem", minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
