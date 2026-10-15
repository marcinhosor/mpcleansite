import { Building2, Hotel, Landmark, Hospital, PenTool, Castle, Briefcase } from "lucide-react";

const corporateSectors = [
  { icon: Castle, label: "Residências de alto padrão" },
  { icon: Landmark, label: "Casas de campo e condomínios" },
  { icon: Hotel, label: "Hotéis e pousadas boutique" },
  { icon: Hospital, label: "Clínicas premium" },
  { icon: Briefcase, label: "Escritórios corporativos" },
  { icon: PenTool, label: "Parcerias com arquitetos" },
];

export const Corporate = () => (
  <section id="corporativo" className="relative overflow-hidden bg-[#E9E5DC] py-32 text-[#1C1B18]">
    <div className="pointer-events-none absolute inset-0">
      <img
        src="/corporate-office.jpg"
        alt="Escritório iluminado com poltronas e cadeiras para atendimento corporativo"
        className="h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#E9E5DC]/95 via-[#E9E5DC]/82 to-[#E9E5DC]/55" />
    </div>

    <div className="container relative z-10 px-6">
      <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex items-center gap-4">
            <div className="h-px w-12 bg-[#9C7A2E]" />
            <span className="text-xs font-sans uppercase tracking-[0.5em] text-[#8A6A25]">
              Especialização
            </span>
          </div>

          <h2 className="mb-8 font-serif text-4xl leading-[1.1] md:text-6xl">
            Atendimento para <br /> ambientes que <br />{" "}
            <span className="italic text-[#8A6A25]">exigem excelência.</span>
          </h2>

          <p className="mb-16 max-w-lg font-sans text-xl font-medium leading-relaxed tracking-wide text-[#514F49]">
            A MP Clean é a parceira estratégica de escritórios, clínicas, hotéis e empresas que
            precisam conservar poltronas, cadeiras, sofás e outros estofados com discrição e
            planejamento.
          </p>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {corporateSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.label} className="group flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#B08A36]/40 text-[#8A6A25] transition-all duration-500 group-hover:border-[#8A6A25] group-hover:bg-[#C9A34E]/15">
                    <Icon size={20} strokeWidth={1.3} />
                  </div>
                  <span className="font-serif text-lg tracking-wide text-[#302E29]">
                    {sector.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="group relative aspect-[4/5] overflow-hidden border border-[#B08A36]/40 bg-[#F9F7F1] shadow-xl shadow-[#4B4333]/15">
            <img
              src="/corporate-office.jpg"
              alt="Escritório com poltronas, cadeiras e área de convivência"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#F4EFE5]/10 transition-opacity duration-700 group-hover:opacity-0" />
          </div>
          <div className="absolute inset-0 -z-10 translate-x-8 translate-y-8 border border-[#B08A36]/50 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
        </div>
      </div>
    </div>
  </section>
);
