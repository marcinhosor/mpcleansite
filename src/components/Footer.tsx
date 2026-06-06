export const Footer = () => (
  <footer className="py-24 bg-[#080808] text-white relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A34E]/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>
    
    <div className="container px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border border-[#C9A34E] flex items-center justify-center">
              <span className="text-[#C9A34E] font-serif text-2xl font-bold">MP</span>
            </div>
            <span className="font-serif text-3xl font-light tracking-[0.3em]">CLEAN</span>
          </div>
          <p className="max-w-md text-gray-500 font-sans font-light text-lg leading-relaxed">
            Mais do que limpeza, entregamos uma experiência de cuidado e preservação para o seu patrimônio e bem-estar.
          </p>
          <div className="flex gap-6">
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#C9A34E] hover:text-[#C9A34E] transition-all cursor-pointer">
              <span className="text-xs uppercase tracking-widest font-bold">In</span>
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#C9A34E] hover:text-[#C9A34E] transition-all cursor-pointer">
              <span className="text-xs uppercase tracking-widest font-bold">Ig</span>
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#C9A34E] hover:text-[#C9A34E] transition-all cursor-pointer">
              <span className="text-xs uppercase tracking-widest font-bold">Fb</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase">Links</h4>
          <ul className="space-y-4 font-sans text-sm tracking-widest text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/servicos/sofas" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="/atendimento-corporativo" className="hover:text-white transition-colors">Corporativo</a></li>
            <li><a href="/areas-atendidas" className="hover:text-white transition-colors">Cidades</a></li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase">Contato</h4>
          <div className="space-y-4 font-sans text-sm tracking-widest text-gray-400">
            <p className="flex flex-col">
              <span className="text-[10px] text-gray-600 mb-1">WhatsApp</span>
              <span className="text-white">(15) 98806-4494</span>
            </p>
            <p className="flex flex-col">
              <span className="text-[10px] text-gray-600 mb-1">Localização</span>
              <span className="text-white">Sorocaba, Votorantim e Região</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">MP CLEAN — LUXURY CLEANING SERVICE</p>
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">© 2024 MP Clean. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);