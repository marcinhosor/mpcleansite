import { CheckCircle2, ShieldCheck, Zap, Home, Baby, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: CheckCircle2, text: "Redução de até 99,9% dos ácaros" },
  { icon: ShieldCheck, text: "Equipamentos profissionais de alta performance" },
  { icon: Zap, text: "Secagem otimizada" },
  { icon: Home, text: "Atendimento residencial e corporativo" },
  { icon: Baby, text: "Produtos seguros para crianças e pets" },
  { icon: Users, text: "Equipe especializada" },
];

export const Differentials = () => (
  <section className="py-24 bg-gray-50">
    <div className="container px-4">
      <h2 className="text-4xl font-serif text-center mb-16 text-[#0A0A0A]">Nossos Diferenciais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="flex items-center p-6 gap-4">
              <item.icon className="w-8 h-8 text-[#C9A34E] flex-shrink-0" />
              <span className="font-sans text-lg font-medium">{item.text}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);