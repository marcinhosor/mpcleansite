import { Sofa, Armchair, Bed, Grid, Layers, Shield, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Sofa,
    title: "Higienização e Limpeza de Sofás",
    desc: "Tratamento profundo para tecidos nobres, estruturas delicadas e remoção de sujeiras impregnadas.",
    path: "/servicos/sofas",
  },
  {
    icon: Armchair,
    title: "Conservação de Poltronas e Cadeiras",
    desc: "Conservação detalhada de poltronas de design, cadeiras estofadas e peças assinadas.",
    path: "/servicos/poltronas",
  },
  {
    icon: Bed,
    title: "Higienização Profunda de Colchões",
    desc: "Higienização técnica para reduzir ácaros, odores e impurezas e melhorar o bem-estar no descanso.",
    path: "/servicos/colchoes",
  },
  {
    icon: Grid,
    title: "Tratamento e Lavagem de Tapetes",
    desc: "Processos adequados para preservar fibras naturais e sintéticas, cores e textura.",
    path: "/servicos/tapetes",
  },
  {
    icon: Layers,
    title: "Atendimento Corporativo e Escritórios",
    desc: "Planos de conservação para escritórios, clínicas, hotéis, condomínios e ambientes corporativos.",
    path: "/atendimento-corporativo",
  },
  {
    icon: Shield,
    title: "Impermeabilização e Blindagem Molecular",
    desc: "Proteção duradoura contra líquidos e manchas sem alterar o toque original do tecido.",
    path: "/servicos/impermeabilizacao",
  },
];

export const Services = () => (
  <section id="servicos" className="relative overflow-hidden bg-[#EDE9E0] py-32 text-[#1C1B18]">
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20">
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
          <h2 className="text-4xl font-serif leading-tight text-[#1C1B18] md:text-6xl">
            Conservação Sob Medida para{" "}
            <span className="italic italic-no-shimmer">Estofados de Alto Padrão</span>
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="border-l border-[#9C7A2E]/40 pl-8 font-sans text-xs font-medium uppercase leading-loose tracking-widest text-[#5E5B53]">
            Cada material exige um protocolo único. Desenvolvemos soluções personalizadas para o
            mobiliário mais valioso do seu ambiente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <Link
            key={i}
            to={s.path}
            aria-label={`Saiba mais sobre ${s.title}`}
            className="group relative flex h-full flex-col overflow-hidden border border-[#D6D0C3] bg-[#FCFBF8] p-12 shadow-sm transition-all duration-700 hover:border-[#B08A36]/60 hover:shadow-xl hover:shadow-[#4B4333]/10"
          >
            <div className="relative z-10 space-y-8 flex-grow">
              <div className="w-16 h-16 border border-[#C9A34E]/20 flex items-center justify-center group-hover:bg-[#C9A34E] group-hover:text-black transition-all duration-700">
                <s.icon className="w-8 h-8 text-[#C9A34E] group-hover:text-black stroke-[1px] transition-colors duration-700" />
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-[#1C1B18] transition-colors duration-700 group-hover:text-[#8A6A25]">
                  {s.title}
                </h3>
                <p className="font-sans font-light leading-relaxed text-[#5E5B53] transition-colors duration-700 group-hover:text-[#302E29]">
                  {s.desc}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 relative z-10 flex items-center justify-between group-hover:border-[#C9A34E]/20 transition-all duration-700">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E6A61] transition-colors group-hover:text-[#1C1B18]">
                Saiba Mais
              </span>
              <ChevronRight className="w-4 h-4 text-[#C9A34E] group-hover:translate-x-2 transition-transform duration-500" />
            </div>

            {/* Hover background effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A34E]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
