"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("serenari_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("serenari_cookie_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-6 duration-300">
      <div className="bg-[#142b17]/95 backdrop-blur-md p-5 rounded-2xl border border-[#317338] shadow-2xl text-white flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 text-amber-300 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Política de Cookies
            </h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
              Nós utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossos{" "}
              <a href="#termos" className="underline text-amber-200 hover:text-white">Termos de Uso</a> e nossa{" "}
              <a href="#privacidade" className="underline text-amber-200 hover:text-white">Política de Privacidade</a>.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
          <button
            onClick={() => setShow(false)}
            className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 text-xs transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4" />
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-xl bg-[#a24f24] hover:bg-[#863f1b] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Concordar e Continuar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
