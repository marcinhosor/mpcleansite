import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ShieldCheck, Layers, Droplets } from 'lucide-react';

export const Route = createFileRoute('/servicos/impermeabilizacao')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-[#0A0A0A]">Proteção Invisível e Exclusiva</h1>
            <p className="text-xl text-gray-700 font-sans mb-12 leading-relaxed">
              O tratamento de impermeabilização da MP Clean é um investimento na longevidade e na beleza do seu patrimônio. 
              Criamos uma barreira nano-tecnológica que repele líquidos e protege as fibras.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                { icon: ShieldCheck, title: "Nano Proteção", desc: "Barreira que impede a penetração de líquidos nas fibras." },
                { icon: Layers, title: "Preservação", desc: "Aumenta em até 3x a vida útil do tecido." },
                { icon: Droplets, title: "Fácil Limpeza", desc: "Líquidos derramados ficam na superfície, fáceis de remover." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 text-center space-y-4">
                  <item.icon className="w-12 h-12 text-[#C9A34E] mx-auto" />
                  <h3 className="text-xl font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0A0A0A] p-12 text-white relative overflow-hidden">
               <div className="relative z-10 text-center">
                  <h2 className="text-3xl font-serif mb-6 text-[#C9A34E]">Proteja seu investimento hoje</h2>
                  <a 
                    href="https://wa.me/5515988064494" 
                    className="bg-[#C9A34E] text-black px-12 py-4 font-bold uppercase tracking-widest inline-block hover:bg-[#b08e42] transition-colors"
                  >
                    Falar com um Especialista
                  </a>
               </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});