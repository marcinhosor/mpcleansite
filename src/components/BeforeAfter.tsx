import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export const BeforeAfter = () => (
  <section className="py-32 bg-white">
    <div className="container px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase block">Resultados Surpreendentes</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0A0A0A] leading-tight">
            O impacto visual do <span className="italic">padrão premium</span>
          </h2>
          <p className="text-gray-500 font-sans font-light text-lg leading-relaxed max-w-lg">
            Nossa tecnologia de extração profunda remove anos de sujidade, devolvendo a cor original e o toque nobre aos seus tecidos.
          </p>
          <div className="pt-8">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-[#0A0A0A]">100%</span>
                <span className="text-[10px] text-[#C9A34E] uppercase tracking-widest font-sans">Eficácia</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-[#0A0A0A]">Higienizado</span>
                <span className="text-[10px] text-[#C9A34E] uppercase tracking-widest font-sans">Profundamente</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="relative p-2 border border-gray-100 bg-white shadow-2xl">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop" alt="Antes" />}
              itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" alt="Depois" />}
              style={{ height: '500px', width: '100%' }}
              handle={<div className="w-10 h-10 bg-[#C9A34E] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>}
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-sans">Antes</div>
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#C9A34E]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold">Depois</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);