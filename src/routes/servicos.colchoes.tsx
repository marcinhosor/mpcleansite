import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckCircle, Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute('/servicos/colchoes')({
  component: ServiceColchoes,
});

function ServiceColchoes() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-[#0A0A0A]">Higienização de Colchões de Alto Padrão</h1>
            <p className="text-xl text-gray-700 font-sans mb-12 leading-relaxed">
              Você passa um terço da sua vida no seu colchão. Garantimos que esse tempo seja cercado de saúde, 
              frescor e pureza através de uma higienização profunda que elimina ácaros e fungos.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" 
                alt="Higienização de Colchão" 
                className="rounded-lg shadow-xl"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#C9A34E]">Benefícios Exclusivos</h3>
                <ul className="space-y-4">
                  {[
                    "Eliminação de 99.9% de agentes alérgicos",
                    "Neutralização de odores indesejados",
                    "Preservação da estrutura do colchão",
                    "Produtos dermatologicamente testados"
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
                <AccordionTrigger className="text-left font-serif text-lg">Quanto tempo demora a secagem?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-sans">
                  Nossa tecnologia de extração permite uma secagem otimizada, variando de 4 a 8 horas dependendo da ventilação do ambiente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Os produtos são seguros?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-sans">
                  Sim, utilizamos apenas produtos de linha premium, seguros para crianças, pets e pessoas com sensibilidade respiratória.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-[#0A0A0A] p-12 text-center text-white rounded-none">
              <h2 className="text-3xl font-serif mb-6">Pronto para uma noite de sono revigorante?</h2>
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