import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const Footer = () => (
  <footer className="relative overflow-hidden border-t border-[#C9A34E]/20 bg-[#24231F] py-32 text-[#F7F3EA]">
    <div className="absolute -bottom-64 -right-64 h-[600px] w-[600px] rounded-full bg-[#C9A34E]/10 blur-[150px]" />

    <div className="container relative z-10 px-6">
      <div className="mb-32 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-10 lg:col-span-1">
          <div className="flex items-center">
            <img src="/logo.png" alt="MP Clean" className="h-28 w-auto object-contain" />
          </div>
          <p className="max-w-sm font-sans text-lg font-light leading-relaxed text-[#D6D1C6]">
            MP Clean — Mais do que limpeza, uma experiência de cuidado e preservação para ambientes
            de alto padrão.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#7B7569] pb-1 text-[10px] uppercase tracking-[0.3em] text-[#E2DDD2] transition-colors hover:text-[#E0B95D]"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reportWhatsAppConversion("Footer WhatsApp")}
              className="border-b border-[#7B7569] pb-1 text-[10px] uppercase tracking-[0.3em] text-[#E2DDD2] transition-colors hover:text-[#E0B95D]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <h4 className="text-xs font-sans uppercase tracking-[0.5em] text-[#E0B95D]">
            Especialidades
          </h4>
          <ul className="space-y-6 font-sans text-sm tracking-widest">
            <li>
              <a
                href="/servicos/sofas"
                className="text-[#D6D1C6] transition-colors hover:text-white"
              >
                Higienização de Sofás
              </a>
            </li>
            <li>
              <a
                href="/servicos/colchoes"
                className="text-[#D6D1C6] transition-colors hover:text-white"
              >
                Higienização de Colchões
              </a>
            </li>
            <li>
              <a
                href="/servicos/tapetes"
                className="text-[#D6D1C6] transition-colors hover:text-white"
              >
                Tratamento de Tapetes
              </a>
            </li>
            <li>
              <a
                href="/servicos/impermeabilizacao"
                className="text-[#D6D1C6] transition-colors hover:text-white"
              >
                Impermeabilização Premium
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-xs font-sans uppercase tracking-[0.5em] text-[#E0B95D]">
            Áreas Atendidas
          </h4>
          <ul className="space-y-6 font-sans text-sm tracking-widest text-[#D6D1C6]">
            <li>Sorocaba e Votorantim</li>
            <li>Porto Feliz e Região</li>
            <li>Condomínios de Alto Padrão</li>
            <li>
              <a href="/fazendaboavista" className="transition-colors hover:text-white">
                Fazenda Boa Vista
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-xs font-sans uppercase tracking-[0.5em] text-[#E0B95D]">Contato</h4>
          <div className="space-y-8 font-sans text-sm tracking-widest text-[#D6D1C6]">
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-widest text-[#A9A397]">
                WhatsApp
              </span>
              <a
                href="tel:+5515988064494"
                className="font-serif text-lg tracking-widest text-white transition-colors hover:text-[#E0B95D]"
              >
                (15) 98806-4494
              </a>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-widest text-[#A9A397]">
                Base de atendimento
              </span>
              <span className="text-sm uppercase leading-relaxed tracking-[0.2em] text-white">
                Sorocaba (SP) — atendimento com hora marcada
                <br />
                Votorantim, Porto Feliz e Fazenda Boa Vista
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-widest text-[#A9A397]">
                Horários
              </span>
              <span className="text-sm uppercase leading-relaxed tracking-[0.2em] text-white">
                Seg. a Sex. 08h–18h | Sáb. 08h–13h
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 border-t border-white/15 pt-16 md:flex-row">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#BDB7AA]">
          MP CLEAN — CONSERVAÇÃO E PROTEÇÃO PATRIMONIAL
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#BDB7AA]">
          © 2026 MP Clean. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
