"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function Footer() {
  return (
    <footer className="bg-[#0f1f11] text-white pt-16 pb-12 border-t border-[#225627]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="relative w-52 h-14">
              <Image
                src={SPA_INFO.logoHeader}
                alt="Serenari Spa"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
              Transformando o toque em bem-estar em Suzano/SP. Experiências acolhedoras de cuidado integral com o corpo e a mente.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80 font-light">
              <li><a href="#terapias" className="hover:text-amber-200 transition-colors">Nossas Terapias</a></li>
              <li><a href="#sobre" className="hover:text-amber-200 transition-colors">Sobre o Serenari SPA</a></li>
              <li><a href="#galeria" className="hover:text-amber-200 transition-colors">Nosso Espaço</a></li>
              <li><a href="#proposito" className="hover:text-amber-200 transition-colors">Missão, Visão e Valores</a></li>
              <li><a href="#depoimentos" className="hover:text-amber-200 transition-colors">Avaliações dos Clientes</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Corporate */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Dados da Empresa
            </h4>
            <div className="space-y-1.5 text-xs text-emerald-100/80 font-light">
              <p><strong className="text-white font-medium">Razão Social:</strong> {SPA_INFO.razaoSocial}</p>
              <p><strong className="text-white font-medium">CNPJ:</strong> {SPA_INFO.cnpj}</p>
              <p className="flex items-center gap-1 mt-2">
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>{SPA_INFO.email}</span>
              </p>
              <p className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{SPA_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Col 4: Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Unidade Suzano / SP
            </h4>
            <div className="space-y-2 text-xs text-emerald-100/80 font-light">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{SPA_INFO.address}</span>
              </p>
              <p className="text-[11px] text-amber-200/60 pt-1">
                {SPA_INFO.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60 font-light">
          <p>© 2026 Serenari Spa. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <a href="#termos" className="hover:text-amber-200 transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#privacidade" className="hover:text-amber-200 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
