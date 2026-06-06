import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckCircle } from 'lucide-react';

export const Route = createFileRoute('/servicos/poltronas')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8">Higienização de Poltronas de Design</h1>
            <p className="text-xl text-gray-700 mb-12">
              Sua poltrona de design merece um cuidado à altura da sua exclusividade. Especialistas em tecidos finos.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2070&auto=format&fit=crop" 
              alt="Poltrona de luxo" 
              className="w-full rounded-lg mb-12 shadow-lg"
            />
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {["Couro", "Veludo", "Linho", "Suede"].map(fabric => (
                <div key={fabric} className="p-6 border border-gray-100 flex items-center gap-4">
                  <CheckCircle className="text-[#C9A34E]" />
                  <span className="text-lg font-serif">Tratamento Especializado em {fabric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});