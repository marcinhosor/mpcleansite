import { Button } from "@/components/ui/button";

export const FinalCTA = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[#080808]">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent"></div>
    </div>
    
    <div className="container px-6 relative z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="inline-block p-4 border border-[#C9A34E]/30 rounded-full mb-4">
          <div className="w-16 h-16 bg-[#C9A34E] rounded-full flex items-center justify-center text-black">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
        </div>
        
        <div className="space-y-6">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase block">Inicie sua Experiência</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">
            Pronto para transformar <br /> <span className="italic">o seu ambiente?</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans font-light tracking-wide max-w-2xl mx-auto">
            Agende agora uma consultoria personalizada e descubra o verdadeiro padrão de limpeza e cuidado para seus estofados.
          </p>
        </div>
        
        <div className="pt-8 flex flex-col items-center gap-6">
          <Button 
            size="lg" 
            className="bg-[#C9A34E] hover:bg-white text-black font-bold text-sm px-16 py-10 uppercase tracking-[0.3em] rounded-none transition-all duration-500 scale-110 shadow-2xl shadow-[#C9A34E]/20"
            onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
          >
            Solicitar Orçamento de Luxo
          </Button>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mt-4">Atendimento VIP em Sorocaba e Condomínios da Região</p>
        </div>
      </div>
    </div>
  </section>
);