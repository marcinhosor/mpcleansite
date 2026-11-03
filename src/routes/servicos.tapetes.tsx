import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { BackToServices } from "@/components/BackToServices";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/servicos/tapetes")({
  component: ServiceTapetes,
});

const benefits = [
  {
    icon: Sparkles,
    title: "Limpeza de verdade",
    description:
      "Retiramos a sujeira que fica presa nas fibras, como poeira, pelos, manchas e resíduos do dia a dia.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado com cada fibra",
    description:
      "Antes de começar, avaliamos o material para escolher o jeito mais seguro de limpar o seu tapete.",
  },
  {
    icon: Droplets,
    title: "Lavagem na medida certa",
    description:
      "Usamos água e produtos de forma controlada para evitar excesso de umidade e preservar a textura.",
  },
];

function ServiceTapetes() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <main className="pt-32">
        <section className="container px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <BackToServices />
            <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#9C7A2E]">
              Tratamento especializado
            </span>
            <h1 className="mb-8 max-w-4xl font-serif text-4xl leading-tight text-[#0A0A0A] md:text-6xl">
              Tratamento e Lavagem de Tapetes
            </h1>
            <p className="mb-14 max-w-3xl text-xl leading-relaxed text-gray-700">
              O tapete acumula poeira, pelos, manchas e odores mesmo quando parece limpo. Nós
              fazemos uma limpeza profunda, escolhendo o cuidado adequado para cada tipo de fibra,
              para devolver mais conforto e frescor ao ambiente.
            </p>

            <div className="mb-20 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="space-y-4 border border-[#D8D1C3] bg-[#FCFBF8] p-8"
                  >
                    <Icon className="h-10 w-10 text-[#C9A34E]" strokeWidth={1.5} />
                    <h2 className="font-serif text-2xl text-[#1C1B18]">{benefit.title}</h2>
                    <p className="text-sm leading-relaxed text-[#5E5B53]">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-12 border-t border-gray-100 pt-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl text-[#0A0A0A]">
                  Como funciona, sem complicação
                </h2>
                <ol className="space-y-5 text-gray-700">
                  {[
                    "Você envia uma foto do tapete e informa onde ele está localizado.",
                    "A equipe avalia o material, o nível de sujeira e o tipo de mancha.",
                    "Apresentamos a melhor orientação e o orçamento antes de iniciar.",
                    "Realizamos o tratamento com cuidado e explicamos o tempo de secagem.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4 leading-relaxed">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C9A34E] text-sm font-bold text-black">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[#2B2924] p-10 text-white">
                <h2 className="mb-5 font-serif text-3xl text-[#C9A34E]">O que podemos tratar?</h2>
                <ul className="space-y-4 text-gray-300">
                  {[
                    "Tapetes de fibras naturais e sintéticas",
                    "Tapetes de sala, quarto e áreas de circulação",
                    "Marcas de uso, poeira, pelos e odores",
                    "Peças que precisam de cuidado e preservação",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C9A34E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 bg-[#0A0A0A] p-10 text-center text-white md:p-14">
              <h2 className="mb-5 font-serif text-3xl md:text-4xl">
                Quer saber o melhor cuidado para o seu tapete?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-400">
                Envie uma foto pelo WhatsApp. A MP Clean orienta você de forma simples e apresenta
                um orçamento sem compromisso.
              </p>
              <a
                href="https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20tratamento%20do%20meu%20tapete."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C9A34E] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"
              >
                Falar com a MP Clean
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
