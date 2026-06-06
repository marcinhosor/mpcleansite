import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana Silva", text: "Atendimento impecável! Meu sofá parecia novo depois da higienização. Recomendo muito pelo profissionalismo.", rating: 5 },
  { name: "Carlos Eduardo", text: "Empresa séria e pontual. O serviço de impermeabilização foi muito bem executado. Vale cada centavo.", rating: 5 },
  { name: "Renata Oliveira", text: "Excelente experiência. A equipe é muito educada e cuidadosa com os móveis. O resultado final foi surpreendente.", rating: 5 },
];

export const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="container px-4">
      <h2 className="text-4xl font-serif text-center mb-16 text-[#0A0A0A]">O que dizem nossos clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 border border-gray-100 bg-gray-50 rounded-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-[#C9A34E] text-[#C9A34E]" />
              ))}
            </div>
            <p className="font-sans italic text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
            <p className="font-bold text-[#0A0A0A]">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);