import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Impermeabilization } from "@/components/Impermeabilization";
import { Testimonials } from "@/components/Testimonials";
import { Corporate } from "@/components/Corporate";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MP Clean | Conservação e Higienização Premium de Estofados" },
      { name: "description", content: "Especialistas em conservação, higienização e proteção de estofados premium, colchões, tapetes, cortinas e impermeabilização. Atendimento em Sorocaba, Porto Feliz, Votorantim e condomínios de alto padrão." },
      { property: "og:title", content: "MP Clean | Conservação e Higienização Premium" },
      { property: "og:description", content: "Boutique especializada na conservação, higienização e proteção de estofados e ambientes de alto padrão em Sorocaba e região." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "MP Clean",
          "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
          "@id": "https://mpclean.com.br",
          "url": "https://mpclean.com.br",
          "telephone": "+5515988064494",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Sorocaba",
            "addressRegion": "SP",
            "postalCode": "",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5015,
            "longitude": -47.4526
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "areaServed": ["Sorocaba", "Votorantim", "Porto Feliz", "Fazenda Boa Vista"]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Por que impermeabilizar meu estofado?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A impermeabilização cria uma proteção molecular que impede a penetração de líquidos e facilita a manutenção, preservando a aparência original do tecido."
              }
            },
            {
              "@type": "Question",
              "name": "Quais regiões a MP Clean atende?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Atendemos Sorocaba, Votorantim, Porto Feliz e condomínios de luxo da região, como Fazenda Boa Vista e Granja Olga."
              }
            }
          ]
        })
      }
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Services />
      <BeforeAfter />
      <Impermeabilization />
      <Testimonials />
      <Corporate />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
