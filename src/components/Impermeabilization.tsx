import { Droplets, Coffee, Wine, GlassWater, Shield } from "lucide-react";

export const Impermeabilization = () => (
  <section className="py-32 bg-[#FDFDFD] overflow-hidden">
    <div className="container px-6">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-5/12 space-y-10">
          <div className="space-y-6">
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase block">Tecnologia Avançada</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] leading-tight">
              Proteção invisível <br /> <span className="italic">para o seu investimento.</span>
            </h2>
          </div>
          
          <p className="text-lg font-sans text-gray-500 font-light leading-relaxed tracking-wide">
            Nosso tratamento de blindagem cria uma barreira molecular protetora que impede a absorção de líquidos, facilitando a limpeza e preservando a integridade das fibras por anos.
          </p>
          
          <div className="grid grid-cols-2 gap-12 pt-4">
            {[
              { icon: GlassWater, label: "Repelência" },
              { icon: Shield, label: "Blindagem" },
              { icon: Droplets, label: "Higiene" },
              { icon: Wine, label: "Preservação" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-[#C9A34E]/20 flex items-center justify-center text-[#C9A34E] group-hover:bg-[#C9A34E] group-hover:text-white transition-all duration-500">
                  <item.icon size={20} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-7/12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#C9A34E]/30 z-0"></div>
          <div className="relative z-10 p-4 bg-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1549493597-1df9557f92e1?q=80&w=2070&auto=format&fit=crop" 
              alt="Impermeabilização Premium" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#C9A34E]/30 z-0"></div>
        </div>
      </div>
    </div>
  </section>
);