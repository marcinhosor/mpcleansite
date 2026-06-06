import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden pt-20">
    <div 
      className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
    </div>
    
    <div className="relative z-10 container px-6 md:px-12 text-left text-white max-w-5xl">
      <div className="inline-block mb-4 px-3 py-1 border border-[#C9A34E]/50 bg-[#C9A34E]/10 backdrop-blur-md">
        <span className="text-[#C9A34E] text-xs font-sans tracking-[0.3em] uppercase">Limpeza & Higienização de Luxo</span>
      </div>
      <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-[1.1] animate-in fade-in slide-in-from-left duration-1000">
        A arte de <br />
        <span className="italic text-[#C9A34E]">cuidar do seu</span> <br />
        bem-estar.
      </h1>
      <p className="text-lg md:text-xl mb-12 max-w-xl font-sans text-gray-200 leading-relaxed font-light tracking-wide animate-in fade-in slide-in-from-left duration-1000 delay-200">
        Excelência em higienização premium de estofados. Tecnologia profissional para quem valoriza sofisticação e saúde em cada detalhe.
      </p>
      <div className="flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
        <Button 
          size="lg" 
          className="bg-[#C9A34E] hover:bg-[#b08e42] text-black font-semibold text-sm px-10 py-8 uppercase tracking-[0.2em] rounded-none transition-all hover:scale-105"
          onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
        >
          Agendar Experiência
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-transparent text-white border-white/30 hover:border-[#C9A34E] hover:bg-[#C9A34E]/10 font-semibold text-sm px-10 py-8 uppercase tracking-[0.2em] rounded-none transition-all"
          onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
        >
          Consultoria via WhatsApp
        </Button>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
    </div>
  </section>
);