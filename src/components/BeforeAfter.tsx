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
          <div className="relative p-3 bg-[#F5F5F5] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 group touch-none select-none">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={resultsBefore} alt="Antes" />}
              itemTwo={<ReactCompareSliderImage src={resultsAfter} alt="Depois" />}
              style={{ height: '550px', width: '100%', touchAction: 'none' }}
              handle={
                <div className="w-12 h-12 bg-[#0A0A0A] border border-[#C9A34E] flex items-center justify-center text-[#C9A34E] shadow-2xl hover:scale-110 transition-transform cursor-grab active:cursor-grabbing relative touch-none">
                  <div className="flex flex-col gap-1 items-center pointer-events-none">
                    <div className="w-4 h-[1px] bg-[#C9A34E]"></div>
                    <div className="w-2 h-[1px] bg-[#C9A34E]"></div>
                  </div>
                  {/* Interaction hint for the handle */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center pointer-events-none">
                    <span className="text-[10px] text-[#0A0A0A] bg-[#C9A34E] px-3 py-1.5 whitespace-nowrap font-bold tracking-widest uppercase mb-1 shadow-lg">Arraste</span>
                  </div>
                </div>
              }
            />
            <div className="absolute top-8 left-8 px-6 py-2 bg-[#0A0A0A]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.4em] font-sans border border-white/10 pointer-events-none">Preservação</div>
            <div className="absolute bottom-8 right-8 px-6 py-2 bg-[#C9A34E]/90 backdrop-blur-md text-black text-[10px] uppercase tracking-[0.4em] font-sans font-black pointer-events-none">Excelência</div>
            
            {/* Visual indicator for the slide area with the new text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none flex justify-between items-center px-10">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse pointer-events-none">
                <span className="text-black text-lg">←</span>
              </div>
              
              <div className="bg-[#0A0A0A]/60 backdrop-blur-md border border-white/10 px-4 py-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                <p className="text-white text-[10px] uppercase tracking-[0.3em] font-light text-center leading-relaxed">
                  Veja aqui a transformação que <br /> podemos fazer em seus estofados
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse pointer-events-none">
                <span className="text-black text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
