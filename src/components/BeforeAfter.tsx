import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export const BeforeAfter = () => (
  <section className="py-24 bg-white">
    <div className="container px-4">
      <h2 className="text-4xl font-serif text-center mb-16 text-[#0A0A0A]">Antes e Depois</h2>
      <div className="max-w-4xl mx-auto shadow-2xl">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop" alt="Antes" />}
          itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" alt="Depois" />}
          style={{ height: '500px', width: '100%' }}
        />
      </div>
    </div>
  </section>
);