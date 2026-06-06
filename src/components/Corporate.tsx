import { Building2, CheckCircle } from "lucide-react";

export const Corporate = () => (
  <section className="py-32 bg-[#080808] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
    </div>
    
    <div className="container px-6 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#C9A34E]"></div>
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase">B2B Excellence</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
          Soluções Corporativas para <br /> <span className="italic">Ambientes de Prestígio</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 font-sans font-light leading-relaxed tracking-wide">
          Atendimento especializado para Hotéis Boutique, Condomínios de Luxo, Clínicas de Estética e Escritórios de Alto Padrão em Sorocaba e região.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Padronização", desc: "Processos rigorosos que garantem o mesmo nível de excelência em todas as unidades." },
            { title: "Qualidade Premium", desc: "Produtos de linha profissional que não agridem os materiais nem a saúde." },
            { title: "Confiabilidade", desc: "Equipe uniformizada, treinada e com histórico verificado." },
            { title: "Agilidade", desc: "Cronogramas flexíveis que não interferem na sua operação comercial." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-6 h-6 border border-[#C9A34E] flex items-center justify-center mt-1 group-hover:bg-[#C9A34E] transition-all duration-500">
                <div className="w-1 h-1 bg-white"></div>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-white group-hover:text-[#C9A34E] transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);