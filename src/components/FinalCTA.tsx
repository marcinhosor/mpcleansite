import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const FinalCTA = () => (
  <section className="py-40 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[#0A0A0A]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
    </div>

    <div className="container px-6 relative z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.6em] uppercase block">
            Assessoria Técnica
          </span>
          <h2 className="text-5xl md:text-8xl font-serif text-white leading-tight">
            Solicite uma <br /> <span className="italic">avaliação especializada.</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Receba orientação profissional para a conservação e proteção dos seus estofados.
            Atendimento personalizado para ambientes de alto padrão.
          </p>
        </div>

        <div className="pt-10 flex flex-col items-center gap-10">
          <Button
            size="lg"
            className="bg-[#C9A34E] hover:bg-white text-black font-bold text-sm px-20 py-12 uppercase tracking-[0.4em] rounded-none transition-all duration-700 hover:scale-105 shadow-[0_20px_50px_rgba(201,163,78,0.2)]"
            onClick={() => {
              reportWhatsAppConversion("Final CTA");
              window.open(WHATSAPP_URL, "_blank");
            }}
          >
            Falar com Especialista
          </Button>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.5em]">
              Central de Atendimento
            </span>
            <span className="text-white font-serif text-2xl tracking-[0.2em]">(15) 98806-4494</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
