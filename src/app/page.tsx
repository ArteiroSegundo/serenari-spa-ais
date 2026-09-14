import { Hero } from "@/components/Hero";
import { TouchRevealBanner } from "@/components/TouchRevealBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { PurposeSection } from "@/components/PurposeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationContact } from "@/components/LocationContact";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TouchRevealBanner />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <PurposeSection />
      <TestimonialsSection />
      <LocationContact />
    </>
  );
}
