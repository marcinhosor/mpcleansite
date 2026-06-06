import { Building2, CheckCircle } from "lucide-react";

export const Corporate = () => (
  <section className="py-24 bg-[#0A0A0A] text-white">
    <div className="container px-4 text-center">
      <Building2 className="w-16 h-16 text-[#C9A34E] mx-auto mb-8" />
      <h2 className="text-4xl font-serif mb-6">Atendimento para Hotéis, Condomínios, Clínicas e Empresas</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Oferecemos soluções completas para o setor corporativo, garantindo ambientes limpos e saudáveis para seus clientes e colaboradores.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {["Padronização", "Qualidade", "Confiabilidade", "Agilidade"].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <CheckCircle className="text-[#C9A34E]" />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);