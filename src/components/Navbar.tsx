import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
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
  const whatsappUrl = isFazendaBoaVista
    ? "https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Sou%20morador%20ou%20propriet%C3%A1rio%20do%20Residencial%20Fazenda%20Boa%20Vista%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
    : WHATSAPP_URL;
  const ctaLabel = isFazendaBoaVista ? "Avaliação para minha casa" : "Pedir orçamento";

  return (
    <nav
      className={\`fixed left-0 right-0 top-0 z-50 border-b border-[#C9A34E]/20 transition-all duration-700 \${isScrolled ? "bg-[#1F1E1A]/95 py-3 text-white backdrop-blur-md" : "bg-[#F4EFE5]/95 py-3 text-[#1C1B18] backdrop-blur-md"}\`}
      aria-label={
        isFazendaBoaVista ? "Navegação do Residencial Fazenda Boa Vista" : "Navegação principal"
      }
    >
      <div className="container flex items-center justify-between gap-4 px-4 md:px-12">
        <a
          href={isFazendaBoaVista ? "/fazendaboavista" : "/"}
          className="group flex shrink-0 items-center"
          aria-label="MP Clean — página inicial"
        >
          <img
            src="/logo.png"
            alt={isFazendaBoaVista ? "MP Clean no Residencial Fazenda Boa Vista" : "MP Clean"}
            className={\`\${isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"} w-auto object-contain transition-all duration-500 group-hover:scale-105\`}
          />
        </a>

        <div
          className={\`hidden items-center gap-7 font-sans text-[10px] font-bold uppercase tracking-[0.2em] xl:flex \${isScrolled ? "text-white/80" : "text-[#514F49]"}\`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap transition-colors duration-300 hover:text-[#C9A34E]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reportWhatsAppConversion("Navbar CTA")}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[10px] font-extrabold uppercase tracking-wide text-[#12351F] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#39E477] sm:px-6 sm:text-xs"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">{ctaLabel}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
