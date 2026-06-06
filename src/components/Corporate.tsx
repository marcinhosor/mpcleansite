import { Building2, Hotel, Landmark, Hospital, PenTool, Castle, Briefcase } from "lucide-react";

const corporateSectors = [
  { icon: Castle, label: "Residências de alto padrão" },
  { icon: Landmark, label: "Casas de campo e Condomínios" },
  { icon: Hotel, label: "Hotéis e Pousadas Boutique" },
  { icon: Hospital, label: "Clínicas Premium" },
  { icon: Briefcase, label: "Escritórios Corporativos" },
  { icon: PenTool, label: "Parcerias com Arquitetos" },
];

export const Corporate = () => (
  <section id="corporativo" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
    </div>
    
    <div className="container px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#C9A34E]"></div>
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase">Especialização</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-8">
            Atendimento para <br /> ambientes que <br /> <span className="italic">exigem excelência.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-16 font-sans font-light leading-relaxed tracking-wide max-w-lg">
            A MP Clean é a parceira estratégica de quem compreende que a manutenção de ambientes sofisticados requer processos especializados e absoluta discrição.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {corporateSectors.map((sector, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#C9A34E] group-hover:border-[#C9A34E] group-hover:bg-[#C9A34E]/5 transition-all duration-500">
                  <sector.icon size={20} strokeWidth={1} />
                </div>
                <span className="text-sm font-serif text-white tracking-widest">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative group hidden lg:block">
          <div className="aspect-square overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Ambiente Corporativo de Luxo" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
          </div>
          <div className="absolute inset-0 border border-[#C9A34E]/30 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
);
