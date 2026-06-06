import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana Silva", text: "Atendimento impecável! Meu sofá parecia novo depois da higienização. Recomendo muito pelo profissionalismo.", rating: 5 },
  { name: "Carlos Eduardo", text: "Empresa séria e pontual. O serviço de impermeabilização foi muito bem executado. Vale cada centavo.", rating: 5 },
  { name: "Renata Oliveira", text: "Excelente experiência. A equipe é muito educada e cuidadosa com os móveis. O resultado final foi surpreendente.", rating: 5 },
];

export const Testimonials = () => (
  <section className="py-32 bg-[#F9F9F9]">
    <div className="container px-6">
      <div className="text-center mb-24">
        <span className="text-[#C9A34E] text-xs font-sans tracking-[0.4em] uppercase mb-4 block">Experiências Reais</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] leading-tight">
          A satisfação de quem <br /> <span className="italic text-[#C9A34E]">conhece a excelência</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="group relative p-12 bg-white border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700">
            <div className="absolute -top-6 left-12 w-12 h-12 bg-[#C9A34E] flex items-center justify-center text-white text-4xl font-serif leading-none pt-4">
              "
            </div>
            <div className="flex gap-1 mb-8">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-[#C9A34E] text-[#C9A34E]" />
              ))}
            </div>
            <p className="font-sans text-gray-600 mb-10 leading-relaxed font-light tracking-wide italic">
              {t.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[#C9A34E]/30 group-hover:w-20 transition-all duration-700"></div>
              <p className="font-serif text-lg text-[#0A0A0A] uppercase tracking-widest">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);