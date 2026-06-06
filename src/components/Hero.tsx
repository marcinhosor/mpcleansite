import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
    <div 
      className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
    </div>
    
    <div className="relative z-10 container px-6 md:px-12 text-left text-white max-w-6xl">
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] animate-in fade-in slide-in-from-left duration-1000">
        Conservação e proteção <br className="hidden md:block" />
        <span className="italic text-[#C9A34E]">para estofados que fazem</span> <br className="hidden md:block" />
        parte do seu patrimônio.
      </h1>
      <p className="text-base md:text-lg mb-14 max-w-2xl font-sans text-gray-200 leading-relaxed font-light tracking-[0.05em] animate-in fade-in slide-in-from-left duration-1000 delay-300">
        Especialistas em higienização premium, preservação de tecidos nobres e proteção de ambientes sofisticados.
      </p>
      <div className="flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
        <Button 
          size="lg" 
          className="bg-[#C9A34E] hover:bg-white text-black font-bold text-xs px-12 py-8 uppercase tracking-[0.3em] rounded-none transition-all hover:scale-[1.02]"
          onClick={() => window.open("https://wa.me/5515988064494?text=Olá%20MP%20Clean!%20Gostaria%20de%20uma%20avaliação%20especializada.", "_blank")}
        >
          Solicitar Avaliação Especializada
        </Button>
      </div>
    </div>
  </section>
);
