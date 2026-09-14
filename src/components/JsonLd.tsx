import { SPA_INFO, THERAPIES } from "@/data/spaData";

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": "https://www.serenarispa.com.br/#spa",
    "name": SPA_INFO.name,
    "legalName": SPA_INFO.razaoSocial,
    "vatID": SPA_INFO.cnpj,
    "description": SPA_INFO.tagline,
    "url": "https://www.serenarispa.com.br",
    "telephone": SPA_INFO.phone,
    "email": SPA_INFO.email,
    "image": "https://www.serenarispa.com.br/background-hero.png",
    "logo": "https://www.serenarispa.com.br/logo-serenari-header-removebg-preview.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SPA_INFO.streetAddress,
      "addressLocality": SPA_INFO.city,
      "addressRegion": SPA_INFO.state,
      "postalCode": SPA_INFO.postalCode,
      "addressCountry": SPA_INFO.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SPA_INFO.geo.latitude,
      "longitude": SPA_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SPA_INFO.ratingValue,
      "reviewCount": SPA_INFO.reviewCountNum,
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "sameAs": [
      SPA_INFO.instagramUrl,
      SPA_INFO.facebookUrl
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Terapias e Massagens Serenari Spa",
      "itemListElement": THERAPIES.map((therapy, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": therapy.title,
          "description": therapy.shortDescription
        },
        "position": index + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
