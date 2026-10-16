import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

type NavbarContext = "default" | "fazendaBoaVista";

export const Navbar = ({ context = "default" }: { context?: NavbarContext }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFazendaBoaVista = context === "fazendaBoaVista";
  const navLinks = isFazendaBoaVista
    ? [
        { label: "Residencial Fazenda Boa Vista", href: "#sobre" },
        { label: "Serviços para sua casa", href: "#servicos" },
        { label: "Impermeabilização", href: "#impermeabilizacao" },
        { label: "Cuidados", href: "#cuidados" },
        { label: "Como funciona", href: "#como-funciona" },
      ]
    : [
        { label: "O Manifesto", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Diferenciais", href: "#diferenciais" },
        { label: "Impermeabilização Premium", href: "#impermeabilizacao" },
        { label: "B2B", href: "#corporativo" },
        { label: "Avaliações", href: "#avaliacoes" },
      ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-[#C9A34E]/20 transition-all duration-700 ${isScrolled ? "bg-[#1F1E1A]/95 py-3 text-white backdrop-blur-md" : "bg-[#F4EFE5]/92 py-4 text-[#1C1B18] backdrop-blur-md"}`}
      aria-label={
        isFazendaBoaVista ? "Navegação do Residencial Fazenda Boa Vista" : "Navegação principal"
      }
    >
      <div className="container flex items-center justify-between px-6 md:px-12">
        <div
          className="group flex cursor-pointer items-center"
          onClick={() => (window.location.href = isFazendaBoaVista ? "/fazendaboavista" : "/")}
        >
          <img
            src="/logo.png"
            alt={isFazendaBoaVista ? "MP Clean no Residencial Fazenda Boa Vista" : "MP Clean"}
            className={`${isScrolled ? "h-16" : "h-24"} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
          />
        </div>

        <div
          className={`hidden items-center gap-10 font-sans text-[10px] font-bold uppercase tracking-[0.3em] lg:flex ${isScrolled ? "text-white/80" : "text-[#514F49]"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-all duration-500 hover:tracking-[0.6em] hover:text-[#C9A34E]"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="rounded-none border border-[#C9A34E] bg-[#C9A34E] px-10 py-7 text-[10px] font-black tracking-[0.3em] text-black transition-all hover:bg-white"
            onClick={() => {
              reportWhatsAppConversion("Navbar CTA");
              window.open(
                isFazendaBoaVista
                  ? "https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Sou%20morador%20ou%20propriet%C3%A1rio%20do%20Residencial%20Fazenda%20Boa%20Vista%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                  : WHATSAPP_URL,
                "_blank",
              );
            }}
          >
            {isFazendaBoaVista ? "AVALIAÇÃO PARA MINHA CASA" : "AVALIAÇÃO"}
          </Button>
        </div>

        <button
          className="flex flex-col items-end gap-1.5 p-2 text-[#C9A34E] lg:hidden"
          aria-label="Abrir menu de navegação"
        >
          <div className="h-[1px] w-8 bg-[#C9A34E]" />
          <div className="h-[1px] w-5 bg-[#C9A34E]" />
        </button>
      </div>
    </nav>
  );
};
