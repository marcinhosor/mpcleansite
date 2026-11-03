import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { BackToServices } from "@/components/BackToServices";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/servicos/poltronas")({
  component: ServicePoltronas,
});

const fabrics = ["Bouclé", "Veludo", "Linho", "Suede", "Couro"];

function ServicePoltronas() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <main className="pt-32">
        <section className="container px-4 py-16">
          <BackToServices />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <figure className="order-2 overflow-hidden border border-[#D8D1C3] bg-white shadow-xl shadow-[#4B4333]/10 lg:order-1">
              <img
                src="/poltrona-boucle.jpg"
                alt="Poltrona de design em tecido bouclé em ambiente sofisticado"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="px-6 py-4 text-sm text-[#6E6A61]">
                Tratamento cuidadoso para peças de design e tecidos delicados.
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#8A6A25]">
                Poltronas e cadeiras
              </span>
              <h1 className="mb-7 font-serif text-4xl leading-tight md:text-6xl">
                Conservação de poltronas de design
              </h1>
              <p className="text-lg leading-relaxed text-[#514F49]">
                Cada poltrona tem uma construção e um tecido próprios. Avaliamos a peça antes do
                serviço para limpar com segurança e preservar seu desenho, sua cor e seu conforto.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {fabrics.map((fabric) => (
                  <span
                    key={fabric}
                    className="border border-[#D0C6B5] bg-[#FCFBF8] px-4 py-3 text-sm text-[#514F49]"
                  >
                    {fabric}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20poltrona%20de%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-[#1C1B18] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#B08A36] hover:text-black"
              >
                Falar com um especialista
                <CheckCircle2 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
