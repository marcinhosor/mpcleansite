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
      { title: "MP Clean | Higienização Premium de Estofados em Sorocaba" },
      { name: "description", content: "Especialista em higienização profissional de estofados, colchões, tapetes e impermeabilização de alto padrão em Sorocaba e região." },
      { property: "og:title", content: "MP Clean | Higienização Premium" },
      { property: "og:description", content: "Limpeza profunda e impermeabilização de estofados com tecnologia profissional." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "MP Clean",
          "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
          "@id": "",
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
          }
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="diferenciais">
        <Differentials />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <BeforeAfter />
      <Impermeabilization />
      <Testimonials />
      <Corporate />
      <div id="sobre">
        <About />
      </div>
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}