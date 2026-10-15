import { Sofa, Armchair, Bed, Grid, Layers, Shield, Square, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Sofa,
    title: "Higienização e Limpeza de Sofás",
    desc: "Tratamento profundo para tecidos nobres, estruturas delicadas e remoção de sujeiras impregnadas.",
    slug: "sofas",
  },
  {
    icon: Armchair,
    title: "Conservação de Poltronas e Cadeiras",
    desc: "Conservação detalhada de poltronas de design, cadeiras estofadas e peças assinadas.",
    slug: "poltronas",
  },
  {
    icon: Bed,
    title: "Higienização Profunda de Colchões",
    desc: "Higienização técnica para reduzir ácaros, odores e impurezas e melhorar o bem-estar no descanso.",
    slug: "colchoes",
  },
  {
    icon: Grid,
    title: "Tratamento e Lavagem de Tapetes",
    desc: "Processos adequados para preservar fibras naturais e sintéticas, cores e textura.",
    slug: "tapetes",
  },
  {
    icon: Layers,
    title: "Atendimento Corporativo e Escritórios",
    desc: "Planos de conservação para escritórios, clínicas, hotéis, condomínios e ambientes corporativos.",
    slug: "cortinas",
  },
  {
    icon: Shield,
    title: "Impermeabilização e Blindagem Molecular",
    desc: "Proteção duradoura contra líquidos e manchas sem alterar o toque original do tecido.",
    slug: "impermeabilizacao",
  },
];

export const Services = () => (
  <section id="servicos" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#C9A34E 1px, transparent 0)",
          backgroundSize: "60px 60px",
        }}
      ></div>
    </div>

    <div className="container px-6 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="max-w-2xl">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase mb-6 block">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Conservação Sob Medida para{" "}
            <span className="italic italic-no-shimmer">Estofados de Alto Padrão</span>
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-gray-500 font-sans font-light tracking-widest text-xs uppercase leading-loose border-l border-[#C9A34E]/30 pl-8">
            Cada material exige um protocolo único. Desenvolvemos soluções personalizadas para o
            mobiliário mais valioso do seu ambiente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-[#111111] p-12 border border-white/5 hover:border-[#C9A34E]/30 transition-all duration-700 relative overflow-hidden flex flex-col h-full"
          >
            <div className="relative z-10 space-y-8 flex-grow">
              <div className="w-16 h-16 border border-[#C9A34E]/20 flex items-center justify-center group-hover:bg-[#C9A34E] group-hover:text-black transition-all duration-700">
                <s.icon className="w-8 h-8 text-[#C9A34E] group-hover:text-black stroke-[1px] transition-colors duration-700" />
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-white group-hover:text-[#C9A34E] transition-colors duration-700">
                  {s.title}
                </h3>
                <p className="text-gray-500 font-sans font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                  {s.desc}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 relative z-10 flex items-center justify-between group-hover:border-[#C9A34E]/20 transition-all duration-700">
              <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors">
                Saiba Mais
              </span>
              <ChevronRight className="w-4 h-4 text-[#C9A34E] group-hover:translate-x-2 transition-transform duration-500" />
            </div>

            {/* Hover background effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A34E]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
