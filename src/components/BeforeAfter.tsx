import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import resultsBefore from "../assets/results-before.png";
import resultsAfter from "../assets/results-after.png";



export const BeforeAfter = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    {/* Background text decoration */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] pointer-events-none hidden lg:block">
      <span className="font-serif text-[30rem] leading-none whitespace-nowrap">PREMIUM</span>
    </div>
    
    <div className="container px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <span className="text-[#C9A34E] text-xs font-sans tracking-[0.5em] uppercase block">Resultados</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0A0A0A] leading-tight">
              A estética da <br /><span className="italic">perfeição.</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#C9A34E]"></div>
          </div>
          
          <p className="text-gray-500 font-sans font-light text-lg leading-relaxed max-w-lg">
            Os resultados apresentados refletem nossa filosofia de trabalho: preservar o que tem valor. Por meio de técnicas especializadas e atenção aos detalhes, contribuímos para a conservação da estética, do conforto e da durabilidade de estofados que fazem parte de ambientes cuidadosamente projetados.
          </p>
          
          <div className="pt-8 border-t border-gray-100 max-w-sm">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-1">
                <span className="block text-4xl font-serif text-[#0A0A0A]">100%</span>
                <span className="text-[10px] text-[#C9A34E] uppercase tracking-[0.4em] font-sans font-bold">Eficácia</span>
              </div>
              <div className="space-y-1">
                <span className="block text-4xl font-serif text-[#0A0A0A]">Bio</span>
                <span className="text-[10px] text-[#C9A34E] uppercase tracking-[0.4em] font-sans font-bold">Sustentável</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative p-3 bg-[#F5F5F5] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 group">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={resultsBefore} alt="Antes" />}
              itemTwo={<ReactCompareSliderImage src={resultsAfter} alt="Depois" />}
              style={{ height: '550px', width: '100%' }}
              handle={
                <div className="w-12 h-12 bg-[#0A0A0A] border border-[#C9A34E] flex items-center justify-center text-[#C9A34E] shadow-2xl">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="w-4 h-[1px] bg-[#C9A34E]"></div>
                    <div className="w-2 h-[1px] bg-[#C9A34E]"></div>
                  </div>
                </div>
              }
            />
            <div className="absolute top-8 left-8 px-6 py-2 bg-[#0A0A0A]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.4em] font-sans border border-white/10">Preservação</div>
            <div className="absolute bottom-8 right-8 px-6 py-2 bg-[#C9A34E]/90 backdrop-blur-md text-black text-[10px] uppercase tracking-[0.4em] font-sans font-black">Excelência</div>
            
            {/* Minimal label overlay */}
            <div className="absolute inset-x-0 bottom-0 py-6 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-[10px] text-black/40 uppercase tracking-[0.6em] font-bold">Deslize para comparar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
