import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/CookieConsent";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serenarispa.com.br"),
  title: "Serenari SPA | Massoterapia Humanizada em Suzano – SP",
  description:
    "Transformamos o toque em bem-estar. Oferecemos massagem relaxante, terapêutica, pedras quentes, shiatsu, drenagem linfática e estética corporal em Suzano/SP. Agende seu momento pelo WhatsApp (11) 5108-1983.",
  keywords: [
    "Serenari Spa",
    "Spa Suzano",
    "Massagem Suzano",
    "Massoterapia Humanizada",
    "Massagem Relaxante",
    "Massagem Terapêutica",
    "Drenagem Linfática",
    "Pedras Quentes",
    "Shiatsu",
    "Ventosaterapia",
    "Reflexologia Podal",
    "Revitalização Facial",
    "Suzano SP"
  ],
  authors: [{ name: "Serenari Spa" }],
  openGraph: {
    title: "Serenari SPA | Reconexão, Presença e Leveza",
    description:
      "Transformamos o toque em bem-estar através de experiências de cuidado com o corpo e a mente em Suzano–SP.",
    url: "https://www.serenarispa.com.br",
    siteName: "Serenari Spa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/background-hero.png",
        width: 1200,
        height: 630,
        alt: "Serenari Spa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased font-sans selection:bg-[#225627] selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
