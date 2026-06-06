import { Droplets, Coffee, Wine, GlassWater } from "lucide-react";

export const Impermeabilization = () => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif mb-6 text-[#0A0A0A]">Proteção invisível para seu investimento.</h2>
          <p className="text-lg font-sans text-gray-700 mb-10 leading-relaxed">
            Nosso tratamento cria uma barreira protetora que dificulta a absorção de líquidos e auxilia na conservação do tecido, mantendo seu estofado novo por muito mais tempo.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: GlassWater, label: "Água" },
              { icon: Coffee, label: "Café" },
              { icon: Droplets, label: "Refrigerante" },
              { icon: Wine, label: "Vinho" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#C9A34E] shadow-sm">
                  <item.icon size={28} />
                </div>
                <span className="text-sm font-medium uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1549493597-1df9557f92e1?q=80&w=2070&auto=format&fit=crop" 
            alt="Impermeabilização" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);