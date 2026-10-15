import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
    <div
      className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-[#F4EFE5]/35 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE5]/95 via-[#F4EFE5]/70 to-transparent" />
    </div>

    <div className="relative z-10 container px-6 md:px-12 text-left text-[#1C1B18] max-w-6xl">
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] animate-in fade-in slide-in-from-left duration-1000">
        Higienização e Blindagem de Estofados <br className="hidden md:block" />
        <span className="italic text-[#8A6A25]">de Alto Padrão em Sorocaba e Região</span>
      </h1>
      <p className="text-base md:text-lg mb-14 max-w-2xl font-sans text-[#514F49] leading-relaxed font-light tracking-[0.05em] animate-in fade-in slide-in-from-left duration-1000 delay-300">
        Especialistas em preservação de tecidos nobres, eliminação de ácaros e bactérias e proteção
        contra manchas para residências, condomínios e ambientes corporativos.
      </p>
      <div className="flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
        <Button
          size="lg"
          className="bg-[#C9A34E] hover:bg-white text-black font-bold text-xs px-12 py-8 uppercase tracking-[0.3em] rounded-none transition-all hover:scale-[1.02]"
          onClick={() => {
            reportWhatsAppConversion("Hero CTA");
            window.open(WHATSAPP_URL, "_blank");
          }}
        >
          Solicitar Orçamento no WhatsApp
        </Button>
      </div>
    </div>
  </section>
);
