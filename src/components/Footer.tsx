export const Footer = () => (
  <footer className="py-16 bg-[#0A0A0A] text-white border-t border-white/5">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-serif mb-4 text-[#C9A34E]">MP Clean</h3>
          <p className="max-w-xs text-gray-400">
            Mais do que limpeza, uma experiência de cuidado.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="font-bold text-[#C9A34E]">CONTATO</p>
          <p className="text-gray-400">(15) 98806-4494</p>
          <p className="text-gray-400">Sorocaba e Região</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">MP CLEAN — LUXURY CLEANING</p>
          <p className="text-xs text-gray-600">© 2024 MP Clean. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);