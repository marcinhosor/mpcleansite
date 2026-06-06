export const Footer = () => (
  <footer className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/5">
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C9A34E]/5 rounded-full blur-[150px] -mr-64 -mb-64"></div>
    
    <div className="container px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
        <div className="lg:col-span-1 space-y-10">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MP Clean" 
              className="h-28 w-auto object-contain"
            />
          </div>
          <p className="text-gray-500 font-sans font-light text-lg leading-relaxed max-w-sm">
            MP Clean — Mais do que limpeza, uma experiência de cuidado e preservação para ambientes de alto padrão.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'WhatsApp'].map((social) => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-[#C9A34E] transition-colors border-b border-gray-800 pb-1">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-10">
          <h4 className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase">Especialidades</h4>
          <ul className="space-y-6 font-sans text-sm tracking-widest text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Higienização de Sofás</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cuidado com Colchões</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tratamento de Tapetes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Impermeabilização Premium</a></li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase">Áreas Atendidas</h4>
          <ul className="space-y-6 font-sans text-sm tracking-widest text-gray-500">
            <li>Sorocaba e Votorantim</li>
            <li>Porto Feliz e Região</li>
            <li>Condomínios de Alto Padrão</li>
            <li>Fazenda Boa Vista</li>
          </ul>
        </div>
        
        <div className="space-y-10">
          <h4 className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase">Contato</h4>
          <div className="space-y-8 font-sans text-sm tracking-widest text-gray-400">
            <div className="space-y-2">
              <span className="text-[10px] text-gray-600 uppercase tracking-widest block">WhatsApp</span>
              <a href="tel:+5515988064494" className="text-white text-lg font-serif tracking-widest hover:text-[#C9A34E] transition-colors">
                (15) 98806-4494
              </a>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-gray-600 uppercase tracking-widest block">Localização</span>
              <span className="text-white text-sm uppercase tracking-[0.2em] leading-relaxed">
                Sorocaba, Votorantim e Porto Feliz
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em]">MP CLEAN — CONSERVAÇÃO E PROTEÇÃO PATRIMONIAL</p>
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">© 2026 MP Clean. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
