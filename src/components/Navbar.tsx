import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Manifesto", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Blindagem", href: "#impermeabilizacao" },
    { label: "B2B", href: "#corporativo" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-black/95 py-4 border-b border-[#C9A34E]/20 backdrop-blur-md" : "bg-transparent py-10"}`}>
      <div className="container px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => window.location.href = '/'}>
          <img 
            src="/logo.png" 
            alt="MP Clean" 
            className={`${isScrolled ? "h-20" : "h-32"} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
          />
        </div>

        <div className="hidden lg:flex gap-12 items-center text-white/70 font-sans text-[10px] tracking-[0.4em] uppercase font-bold">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#C9A34E] transition-all hover:tracking-[0.6em] duration-500">
              {link.label}
            </a>
          ))}
          <Button 
            className="bg-[#C9A34E] hover:bg-white text-black rounded-none px-10 py-7 text-[10px] tracking-[0.3em] font-black border border-[#C9A34E] transition-all"
            onClick={() => window.open("https://wa.me/5515988064494?text=Olá%20MP%20Clean!%20Gostaria%20de%20uma%20avaliação%20especializada.", "_blank")}
          >
            AVALIAÇÃO
          </Button>
        </div>

        <button className="lg:hidden text-[#C9A34E] p-2 flex flex-col gap-1.5 items-end">
          <div className="w-8 h-[1px] bg-[#C9A34E]"></div>
          <div className="w-5 h-[1px] bg-[#C9A34E]"></div>
        </button>
      </div>
    </nav>
  );
};
