import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Mail, Phone, MapPinned, Instagram } from 'lucide-react';

export const Route = createFileRoute('/contato')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-24 max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl font-serif mb-8">Solicite seu atendimento exclusivo.</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Estamos prontos para entender as necessidades do seu patrimônio e oferecer a melhor solução em higienização e proteção.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-[#C9A34E]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">WhatsApp</p>
                    <p className="text-lg font-serif">(15) 98806-4494</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-[#C9A34E]">
                    <MapPinned size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Região</p>
                    <p className="text-lg font-serif">Sorocaba e Vizinhanças</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-[#C9A34E]">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Siga-nos</p>
                    <p className="text-lg font-serif">@mpclean.premium</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] p-12 text-white flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl font-serif mb-6 text-[#C9A34E]">Orçamento Rápido</h2>
              <p className="text-gray-400 mb-12">Clique no botão abaixo para iniciar seu atendimento personalizado agora mesmo.</p>
              <a 
                href="https://wa.me/5515988064494" 
                className="w-full bg-[#C9A34E] text-black py-5 font-bold uppercase tracking-widest hover:bg-[#b08e42] transition-colors"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});