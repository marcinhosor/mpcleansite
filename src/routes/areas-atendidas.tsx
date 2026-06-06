import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MapPin } from 'lucide-react';

const areas = [
  "Sorocaba", "Votorantim", "Porto Feliz", "Fazenda Boa Vista", "Saint Patrick", 
  "Granja Olga", "Tivoli Park", "Mont Blanc", "Giverny", "Alphaville Nova Esplanada"
];

export const Route = createFileRoute('/areas-atendidas')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <h1 className="text-5xl font-serif mb-8 text-center">Onde Atendemos</h1>
          <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
            Levamos nossa excelência em higienização para as principais cidades e condomínios de alto padrão da região de Sorocaba.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-4 p-10 border border-gray-100 hover:shadow-xl transition-all group">
                <MapPin className="text-[#C9A34E] group-hover:scale-125 transition-transform" />
                <div>
                  <h3 className="text-2xl font-serif">{area}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Atendimento Premium</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});