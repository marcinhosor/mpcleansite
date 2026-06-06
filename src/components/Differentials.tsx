import { CheckCircle2, ShieldCheck, Zap, Home, Disc, Ruler, Droplet, Building } from "lucide-react";

const items = [
  { icon: CheckCircle2, text: "Redução de até 99,9% dos ácaros" },
  { icon: ShieldCheck, text: "Equipamentos profissionais de alta performance" },
  { icon: Droplet, text: "Produtos adequados para tecidos delicados" },
  { icon: Disc, text: "Atendimento discreto" },
  { icon: Ruler, text: "Avaliação técnica personalizada" },
  { icon: Zap, text: "Secagem otimizada" },
  { icon: ShieldCheck, text: "Preservação estética dos materiais" },
  { icon: Building, text: "Atendimento residencial e corporativo" },
];

export const Differentials = () => (
  <section id="diferenciais" className="py-32 bg-white relative overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
      <span className="font-serif text-[20rem] leading-none">MP</span>
    </div>
    
    <div className="container px-6 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-24">
        <div className="max-w-3xl">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase mb-6 block">Excelência</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0A0A0A] leading-tight mb-8">
            Experiência com mobiliário <br /> <span className="italic">de alto padrão.</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#C9A34E]"></div>
        </div>
        <div className="max-w-md">
          <p className="text-gray-500 font-sans font-light text-lg leading-relaxed mb-8">
            Nossa metodologia respeita características construtivas, acabamentos e especificidades de cada material, tratando cada peça como parte do patrimônio do cliente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {items.map((item, i) => (
          <div key={i} className="group flex flex-col items-start space-y-6 animate-in fade-in duration-700 slide-in-from-bottom" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="relative">
              <div className="w-14 h-14 border border-[#C9A34E]/20 flex items-center justify-center group-hover:bg-[#C9A34E]/5 group-hover:border-[#C9A34E] transition-all duration-700">
                <item.icon className="w-6 h-6 text-[#C9A34E] stroke-[1px]" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-serif text-xl text-[#0A0A0A] group-hover:text-[#C9A34E] transition-colors duration-500 leading-snug">{item.text}</p>
              <div className="w-6 h-[1px] bg-[#C9A34E]/20 group-hover:w-12 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
