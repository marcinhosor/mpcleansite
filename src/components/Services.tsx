import { Sofa, Armchair, Bed, Grid, Layers, Shield, Square } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Sofa, title: "Sofás" },
  { icon: Armchair, title: "Poltronas" },
  { icon: Bed, title: "Colchões" },
  { icon: Grid, title: "Tapetes" },
  { icon: Layers, title: "Cortinas" },
  { icon: Armchair, title: "Cadeiras" },
  { icon: Shield, title: "Impermeabilização" },
];

export const Services = () => (
  <section className="py-32 bg-[#080808] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#C9A34E 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
    </div>
    
    <div className="container px-6 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase mb-4 block">Portfólio de Cuidados</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Serviços <span className="italic">Exclusivos</span>
          </h2>
        </div>
        <div className="hidden md:block">
          <p className="text-gray-500 font-sans font-light tracking-wide max-w-xs text-sm uppercase">Tratamentos especializados para mobiliário de alto valor.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        {services.map((s, i) => (
          <div key={i} className="group bg-[#0A0A0A] p-12 flex flex-col items-center justify-center gap-8 hover:bg-[#C9A34E]/5 transition-all duration-700 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="p-4 border border-[#C9A34E]/20 rounded-full group-hover:border-[#C9A34E] transition-all duration-700">
                <s.icon className="w-10 h-10 text-[#C9A34E] stroke-[1px] group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-2xl text-white tracking-wide group-hover:text-[#C9A34E] transition-colors duration-700">{s.title}</h3>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C9A34E] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);