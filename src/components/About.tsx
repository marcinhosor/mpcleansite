export const About = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F9F9] -z-10"></div>
    <div className="container px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" 
              alt="Ambiente Sofisticado" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-white z-20 hidden md:block">
            <div className="w-full h-full bg-[#C9A34E] p-8 flex flex-col justify-center text-white">
              <span className="text-4xl font-serif mb-2">10+</span>
              <span className="text-[10px] uppercase tracking-widest font-sans">Anos de Experiência em Luxo</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase block">Nossa Essência</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] leading-tight">
              Mais do que limpeza, uma <br /> <span className="italic">renovação de bem-estar.</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#C9A34E]"></div>
          </div>
          
          <div className="space-y-8 font-sans text-gray-500 font-light text-lg leading-relaxed tracking-wide">
            <p>
              Na MP Clean, acreditamos que seu lar é seu refúgio mais sagrado. Por isso, não entregamos apenas uma higienização técnica, mas uma renovação completa de conforto e sofisticação para sua família.
            </p>
            <p>
              Com foco total no mercado de alto padrão, selecionamos meticulosamente as melhores tecnologias globais e produtos biodegradáveis de alta performance para cuidar do seu patrimônio com a atenção aos detalhes que ele merece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8">
            <div className="space-y-2">
              <span className="block font-serif text-xl text-[#0A0A0A]">Atendimento Tailor-made</span>
              <p className="text-sm text-gray-400 font-light">Serviços personalizados para cada tipo de tecido e necessidade.</p>
            </div>
            <div className="space-y-2">
              <span className="block font-serif text-xl text-[#0A0A0A]">Tecnologia Europeia</span>
              <p className="text-sm text-gray-400 font-light">Equipamentos de última geração para resultados impecáveis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);