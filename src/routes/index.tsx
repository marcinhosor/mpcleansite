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
import { FAQ, faqs } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Sorocaba e Região | MP Clean" },
      {
        name: "description",
        content:
          "Especialistas em higienização profunda e blindagem de estofados, sofás, colchões e tapetes em Sorocaba, Votorantim, Porto Feliz e Fazenda Boa Vista. Atendimento discreto e agendamento rápido via WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "higienização de estofados sorocaba, limpeza de sofá sorocaba, lavar sofá sorocaba, impermeabilização de estofados sorocaba, higienização sofá fazenda boa vista",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        property: "og:title",
        content: "Higienização de Estofados em Sorocaba e Região | MP Clean",
      },
      {
        property: "og:description",
        content:
          "Higienização profunda, blindagem e conservação de sofás, colchões, tapetes e poltronas em Sorocaba e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mpcleansorocaba.com.br/logo.png" },
      { property: "og:url", content: "https://mpcleansorocaba.com.br/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Higienização de Estofados em Sorocaba e Região | MP Clean",
      },
      {
        name: "twitter:description",
        content:
          "Higienização profunda e blindagem de estofados em Sorocaba, Votorantim, Porto Feliz e Fazenda Boa Vista.",
      },
      { name: "twitter:image", content: "https://mpcleansorocaba.com.br/logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          name: "MP Clean — Higienização e Blindagem de Estofados",
          alternateName: "MP Clean Sorocaba",
          description:
            "Higienização, limpeza, impermeabilização e conservação de sofás, colchões, tapetes e poltronas em Sorocaba e região.",
          image: "https://mpcleansorocaba.com.br/logo.png",
          "@id": "https://mpcleansorocaba.com.br/#business",
          url: "https://mpcleansorocaba.com.br/",
          telephone: "+5515988064494",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sorocaba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -23.5015,
            longitude: -47.4526,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "13:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de higienização e conservação",
            itemListElement: [
              "Higienização e limpeza de sofás",
              "Higienização profunda de colchões",
              "Tratamento e lavagem de tapetes",
              "Conservação de poltronas e cadeiras",
              "Impermeabilização e blindagem molecular",
              "Atendimento corporativo e escritórios",
            ],
          },
          areaServed: ["Sorocaba", "Votorantim", "Porto Feliz", "Fazenda Boa Vista"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
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
      <About />
      <Differentials />
      <Services />
      <BeforeAfter />
      <Impermeabilization />
      <Testimonials />
      <Corporate />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
