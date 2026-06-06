import { CheckCircle2, ShieldCheck, Zap, Home, Baby, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: CheckCircle2, text: "Redução de até 99,9% dos ácaros" },
  { icon: ShieldCheck, text: "Equipamentos profissionais de alta performance" },
  { icon: Zap, text: "Secagem otimizada" },
  { icon: Home, text: "Atendimento residencial e corporativo" },
  { icon: Baby, text: "Produtos seguros para crianças e pets" },
  { icon: Users, text: "Equipe especializada" },
];

export const Differentials = () => (
  <section className="py-32 bg-white">
    <div className="container px-6">
      <div className="max-w-3xl mb-24">
        <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase mb-4 block">Excelência nos Detalhes</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#0A0A0A] leading-tight mb-8">
          Por que escolher o padrão <span className="italic">MP Clean?</span>
        </h2>
        <div className="w-20 h-[1px] bg-[#C9A34E]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {items.map((item, i) => (
          <div key={i} className="group flex flex-col items-start space-y-6 animate-in fade-in duration-700 slide-in-from-bottom" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="relative">
              <div className="w-16 h-16 border border-[#C9A34E]/20 flex items-center justify-center group-hover:bg-[#C9A34E]/5 transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#C9A34E] stroke-[1px]" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-[#C9A34E]"></div>
            </div>
            <div className="space-y-3">
              <span className="block w-6 h-[1px] bg-[#C9A34E]/30 group-hover:w-12 transition-all duration-500"></span>
              <p className="font-serif text-2xl text-[#0A0A0A] group-hover:text-[#C9A34E] transition-colors duration-500">{item.text}</p>
              <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">
                Garantimos os mais altos padrões de higiene e conservação para seus estofados mais valiosos.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);