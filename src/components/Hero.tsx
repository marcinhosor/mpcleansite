import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const Hero = () => (
  <section className="relative flex min-h-[92svh] items-center justify-start overflow-hidden pb-20 pt-28 sm:pb-16">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-[#F4EFE5]/45 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE5]/95 via-[#F4EFE5]/82 to-[#F4EFE5]/35" />
    </div>

    <div className="container relative z-10 max-w-6xl px-6 text-left text-[#1C1B18] md:px-12">
      <div className="max-w-4xl">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-[#806020] sm:text-xs">
          MP Clean · Sorocaba e região
        </p>
        <h1 className="mb-7 font-serif text-4xl leading-[1.08] md:text-6xl lg:text-7xl">
          Seu estofado merece
          <br className="hidden sm:block" />
          <span className="italic text-[#8A6A25]"> cuidado profissional.</span>
        </h1>
        <p className="mb-9 max-w-2xl font-sans text-base font-light leading-relaxed tracking-wide text-[#514F49] md:text-xl">
          Higienização e blindagem de sofás, poltronas, colchões e tapetes, com avaliação
          cuidadosa de cada material e atendimento personalizado para residências e empresas.
        </p>

        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reportWhatsAppConversion("Hero principal")}
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-5 text-center text-sm font-extrabold tracking-wide text-[#12351F] shadow-[0_14px_38px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#39E477] hover:shadow-[0_18px_42px_rgba(37,211,102,0.36)] sm:min-w-[340px] sm:px-9"
          >
            <MessageCircle className="h-6 w-6 shrink-0" />
            <span>QUERO MEU ORÇAMENTO PELO WHATSAPP</span>
          </a>
          <a
            href="#servicos"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#8A6A25]/55 bg-white/50 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#514F49] transition-colors hover:border-[#8A6A25] hover:bg-white"
          >
            Conhecer os serviços
          </a>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#514F49]">
          Envie uma foto do estofado pelo WhatsApp e conte o que precisa. Nossa equipe orienta
          você sobre a avaliação e o próximo passo.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#514F49]">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#806020]" />
            Atendimento em Sorocaba e região
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#806020]" />
            Cuidado conforme o tecido
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#806020]" />
            Residências e empresas
          </span>
        </div>
      </div>
    </div>
  </section>
);
