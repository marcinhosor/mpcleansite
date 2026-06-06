import { Sofa, Armchair, Bed, Square, Curtain, Chair, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Sofa, title: "Sofás" },
  { icon: Armchair, title: "Poltronas" },
  { icon: Bed, title: "Colchões" },
  { icon: Square, title: "Tapetes" },
  { icon: Curtain, title: "Cortinas" },
  { icon: Chair, title: "Cadeiras" },
  { icon: Shield, title: "Impermeabilização" },
];

export const Services = () => (
  <section className="py-24 bg-[#0A0A0A]">
    <div className="container px-4">
      <h2 className="text-4xl font-serif text-center mb-16 text-white">Nossos Serviços</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="bg-transparent border border-white/10 text-white hover:border-[#C9A34E] group transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
              <s.icon className="w-12 h-12 text-[#C9A34E] group-hover:scale-110 transition-transform" />
              <span className="font-sans text-lg">{s.title}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);