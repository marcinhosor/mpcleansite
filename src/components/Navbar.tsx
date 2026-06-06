import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/95 py-4 border-b border-[#C9A34E]/20" : "bg-transparent py-8"}`}>
      <div className="container px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-10 h-10 border border-[#C9A34E] flex items-center justify-center">
            <span className="text-[#C9A34E] font-serif text-xl font-bold">MP</span>
          </div>
          <span className="font-serif text-2xl text-white font-light tracking-[0.3em] ml-2">CLEAN</span>
        </div>
        <div className="hidden lg:flex gap-10 items-center text-white/80 font-sans text-[11px] tracking-[0.3em] uppercase">
          <a href="/servicos/sofas" className="hover:text-[#C9A34E] transition-all">Serviços</a>
          <a href="/atendimento-corporativo" className="hover:text-[#C9A34E] transition-all">Corporativo</a>
          <a href="/areas-atendidas" className="hover:text-[#C9A34E] transition-all">Cidades</a>
          <a href="/blog" className="hover:text-[#C9A34E] transition-all">Blog</a>
          <a href="/contato" className="hover:text-[#C9A34E] transition-all">Contato</a>
          <Button 
            className="bg-[#C9A34E] hover:bg-white text-black rounded-none px-8 py-6 text-[10px] tracking-[0.3em] font-bold border border-[#C9A34E] transition-all"
            onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
          >
            ORÇAMENTO
          </Button>
        </div>
        <button className="lg:hidden text-white p-2">
          <div className="w-6 h-[1px] bg-[#C9A34E] mb-1"></div>
          <div className="w-6 h-[1px] bg-[#C9A34E] mb-1"></div>
          <div className="w-4 h-[1px] bg-[#C9A34E] ml-auto"></div>
        </button>
      </div>
    </nav>
  );
};