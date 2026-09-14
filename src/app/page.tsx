import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { PurposeSection } from "@/components/PurposeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationContact } from "@/components/LocationContact";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <PurposeSection />
      <TestimonialsSection />
      <LocationContact />
    </>
  );
}
