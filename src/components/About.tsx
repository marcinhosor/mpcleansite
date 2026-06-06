export const About = () => (
  <section id="sobre" className="py-32 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5] -z-10"></div>
    <div className="container px-6">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" 
              alt="Serviços especializados" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"

            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-72 h-72 border-[24px] border-white z-20 hidden md:block shadow-xl">
            <div className="w-full h-full bg-[#0A0A0A] p-10 flex flex-col justify-center text-white border border-[#C9A34E]/20">
              <span className="text-[#C9A34E] text-[10px] uppercase tracking-[0.4em] mb-4 font-sans">Especialista</span>
              <span className="text-3xl font-serif mb-2 italic">MP Clean</span>
              <span className="text-[10px] uppercase tracking-widest font-sans text-gray-400">Excelência em cada detalhe</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase block">Manifesto</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A0A0A] leading-tight">
              Mais do que limpeza, uma <br /> <span className="italic">experiência de cuidado.</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#C9A34E]"></div>
          </div>
          
          <div className="space-y-8 font-sans text-gray-500 font-light text-lg leading-relaxed tracking-wide">
            <p>
              Acreditamos que grandes ambientes são construídos por detalhes. Cada tecido, cada acabamento e cada peça estofada contribui para a identidade e o conforto de um espaço.
            </p>
            <p>
              Por isso, nossa atuação vai além da higienização. Preservamos materiais, protegemos investimentos e ajudamos nossos clientes a manter seus ambientes impecáveis ao longo do tempo.
            </p>
            <p>
              A MP Clean nasceu para atender clientes que valorizam qualidade, cuidado e excelência. Nossa missão é preservar a beleza, o conforto e a durabilidade dos ambientes através de processos profissionais e atendimento personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-10 border-t border-gray-100">
            <div className="space-y-3">
              <span className="block font-serif text-2xl text-[#0A0A0A]">Atendimento Discreto</span>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Preservamos a privacidade e a rotina do seu ambiente com total discrição.</p>
            </div>
            <div className="space-y-3">
              <span className="block font-serif text-2xl text-[#0A0A0A]">Proteção Patrimonial</span>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Não tratamos estofados como objetos comuns, mas como parte do seu patrimônio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
