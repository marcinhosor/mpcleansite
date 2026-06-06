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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 py-4" : "bg-transparent py-6"}`}>
      <div className="container px-4 flex justify-between items-center">
        <span className="font-serif text-2xl text-[#C9A34E] font-bold tracking-tighter">MP CLEAN</span>
        <div className="hidden md:flex gap-8 items-center text-white font-medium text-sm tracking-widest">
          <a href="#servicos" className="hover:text-[#C9A34E] transition-colors">SERVIÇOS</a>
          <a href="#diferenciais" className="hover:text-[#C9A34E] transition-colors">DIFERENCIAIS</a>
          <a href="#sobre" className="hover:text-[#C9A34E] transition-colors">SOBRE</a>
          <Button 
            className="bg-[#C9A34E] hover:bg-[#b08e42] text-black rounded-none px-6"
            onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
          >
            ORÇAMENTO
          </Button>
        </div>
      </div>
    </nav>
  );
};