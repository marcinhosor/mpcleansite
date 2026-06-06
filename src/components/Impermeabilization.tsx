import { Droplets, Shield, Sparkles, Wind } from "lucide-react";

export const Impermeabilization = () => (
  <section id="impermeabilizacao" className="py-32 bg-[#F9F9F9] overflow-hidden">
    <div className="container px-6">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-6">
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase block">Impermeabilização Premium</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A0A0A] leading-tight">
              Proteção invisível para <br /> <span className="italic">preservar o que tem valor.</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#C9A34E]"></div>
          </div>
          
          <p className="text-lg font-sans text-gray-500 font-light leading-relaxed tracking-wide">
            Mais do que uma impermeabilização convencional, aplicamos um tratamento protetivo que atua como uma camada de proteção sobre os tecidos, auxiliando na conservação da aparência original e na longevidade dos estofados. Uma forma inteligente de proteger o investimento realizado em peças que fazem parte do seu patrimônio.
          </p>
          
          <div className="grid grid-cols-2 gap-12 pt-6">
            {[
              { icon: Shield, label: "Blindagem de Fibras", desc: "Barreira protetora contra manchas." },
              { icon: Droplets, label: "Repelência a Líquidos", desc: "Impede a absorção imediata." },
              { icon: Sparkles, label: "Preservação da Cor", desc: "Mantém a tonalidade original." },
              { icon: Wind, label: "Toque Inalterado", desc: "Não altera a textura do tecido." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="w-12 h-12 border border-[#C9A34E]/30 flex items-center justify-center text-[#C9A34E] group-hover:bg-[#C9A34E] group-hover:text-black transition-all duration-500">
                  <item.icon size={20} strokeWidth={1} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-serif font-bold tracking-wider">{item.label}</span>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 p-4 bg-white shadow-2xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2060&auto=format&fit=crop" 
              alt="Proteção invisível para estofados" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 border-[20px] border-[#C9A34E]/10 z-0 hidden lg:block"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 border-[20px] border-[#0A0A0A]/5 z-0 hidden lg:block"></div>
        </div>
      </div>
    </div>
  </section>
);
