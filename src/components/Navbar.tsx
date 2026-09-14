"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { SPA_INFO } from "@/data/spaData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nossas Terapias", href: "#terapias" },
    { label: "Sobre o Spa", href: "#sobre" },
    { label: "Nosso Espaço", href: "#galeria" },
    { label: "Propósito", href: "#proposito" },
    { label: "Avaliações", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#225627]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#317338]/40"
          : "bg-gradient-to-b from-[#142b17]/90 via-[#142b17]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-44 h-12 sm:w-52 sm:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={SPA_INFO.logoHeader}
                alt="Serenari Spa"
                fill
                priority
                className="object-contain filter drop-shadow"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-amber-50/90 hover:text-amber-200 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#a24f24] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SPA_INFO.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 text-xs font-semibold text-amber-100 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-2 rounded-full border border-white/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{SPA_INFO.phone}</span>
            </a>

            <a
              href={SPA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-white bg-[#a24f24] hover:bg-[#863f1b] px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar Agora</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-amber-100 bg-white/10 hover:bg-white/20 border border-white/20 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a441e] border-b border-[#317338] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-amber-50 hover:text-amber-300 py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Sparkles className="w-4 h-4 text-amber-400/50" />
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${SPA_INFO.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-amber-100 bg-white/10 py-3 rounded-xl border border-white/20"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{SPA_INFO.phone}</span>
            </a>

            <a
              href={SPA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#a24f24] py-3.5 rounded-xl shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar Seu Momento via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
