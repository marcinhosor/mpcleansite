import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { BackToServices } from "@/components/BackToServices";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/servicos/sofas")({
  component: ServiceSofa,
});

const highlights = [
  "Higienização delicada para bouclé, linho, suede e tecidos nobres",
  "Extração profissional de poeira, pelos, odores e sujeiras",
  "Preservação da textura, da cor e do conforto do sofá",
];

function ServiceSofa() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <main className="pt-32">
        <section className="container px-4 py-16">
          <BackToServices />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#8A6A25]">
                Sofás de alto padrão
              </span>
              <h1 className="mb-7 font-serif text-4xl leading-tight md:text-6xl">
                Higienização de sofá premium em bouclé
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#514F49]">
                O bouclé tem textura marcante e toque aconchegante. A limpeza precisa remover a
                sujeira sem agredir as fibras nem alterar o aspecto original do sofá.
              </p>
              <ul className="mt-9 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-[#302E29]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#B08A36]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20higienizar%20meu%20sof%C3%A1%20em%20boucl%C3%A9."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex bg-[#1C1B18] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#B08A36] hover:text-black"
              >
                Solicitar orçamento
              </a>
            </div>
            <figure className="overflow-hidden border border-[#D8D1C3] bg-white shadow-xl shadow-[#4B4333]/10">
              <img
                src="/sofa-boucle.jpg"
                alt="Sofá premium em bouclé em ambiente de alto padrão"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-6 py-4 text-sm text-[#6E6A61]">
                Cuidado técnico para preservar a textura e o conforto do bouclé.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
