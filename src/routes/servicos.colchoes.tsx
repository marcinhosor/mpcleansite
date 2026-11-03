import { createFileRoute } from "@tanstack/react-router";
import { BackToServices } from "@/components/BackToServices";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/servicos/colchoes")({
  component: ServiceColchoes,
});

function ServiceColchoes() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <BackToServices />
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-[#0A0A0A]">
              Higienização de colchões com látex Talalay
            </h1>
            <p className="text-xl text-gray-700 font-sans mb-12 leading-relaxed">
              O látex Talalay oferece conforto, elasticidade e ventilação. A higienização correta
              ajuda a preservar essas características e remove poeira, ácaros, odores e impurezas
              acumuladas no uso diário.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <img
                src="/colchao-talalay.jpg"
                alt="Colchão premium de látex Talalay em quarto sofisticado"
                className="rounded-lg object-cover shadow-xl"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#C9A34E]">Cuidado para o látex Talalay</h3>
                <ul className="space-y-4">
                  {[
                    "Limpeza profunda sem encharcar o colchão",
                    "Preservação da ventilação e da elasticidade do látex",
                    "Neutralização de odores e remoção de impurezas",
                    "Produtos adequados para o uso residencial",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <CheckCircle className="text-[#C9A34E] w-5 h-5" />
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-3xl font-serif mb-8 text-center">Perguntas Frequentes</h3>
            <Accordion type="single" collapsible className="w-full mb-20">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-serif text-lg">
                  Quanto tempo demora a secagem?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-sans">
                  Nossa tecnologia de extração permite uma secagem otimizada, variando de 4 a 8
                  horas dependendo da ventilação do ambiente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">
                  Os produtos são seguros?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-sans">
                  Sim, utilizamos apenas produtos de linha premium, seguros para crianças, pets e
                  pessoas com sensibilidade respiratória.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="rounded-none bg-[#2B2924] p-12 text-center text-white">
              <h2 className="text-3xl font-serif mb-6">
                Pronto para uma noite de sono revigorante?
              </h2>
              <a
                href="https://wa.me/5515988064494"
                className="bg-[#C9A34E] text-black px-12 py-4 font-bold uppercase tracking-widest inline-block hover:bg-[#b08e42] transition-colors"
              >
                Solicitar Orçamento via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
