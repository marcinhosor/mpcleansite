import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/areas-atendidas')({
  component: () => (
    <div className="container px-4 py-32">
      <h1 className="text-4xl font-serif mb-12 text-center">Áreas Atendidas</h1>
      <div className="grid md:grid-cols-3 gap-8 text-center font-serif text-xl">
        {["Sorocaba", "Votorantim", "Porto Feliz", "Fazenda Boa Vista", "Alphaville", "Saint Patrick"].map(city => (
          <div key={city} className="p-8 border border-gray-100 hover:border-[#C9A34E] transition-colors">
            {city}
          </div>
        ))}
      </div>
    </div>
  ),
});