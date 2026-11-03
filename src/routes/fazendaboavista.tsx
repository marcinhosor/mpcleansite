import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Home, ShieldCheck, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/fazendaboavista")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados no Residencial Fazenda Boa Vista | MP Clean" },
      {
        name: "description",
        content:
          "Higienização, conservação e impermeabilização de sofás, poltronas, colchões e tapetes para moradores e proprietários do Residencial Fazenda Boa Vista.",
      },
      {
        name: "keywords",
        content:
          "higienização de estofados Residencial Fazenda Boa Vista, limpeza de sofá Fazenda Boa Vista, impermeabilização Fazenda Boa Vista, higienização de colchão Fazenda Boa Vista",
      },
      {
        property: "og:title",
        content: "Higienização de Estofados no Residencial Fazenda Boa Vista | MP Clean",
      },
      {
        property: "og:description",
        content:
          "Cuidado premium para móveis estofados de casas na Fazenda Boa Vista, com atendimento discreto e agendado.",
      },
      { property: "og:url", content: "https://mpcleansorocaba.com.br/fazendaboavista" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://mpcleansorocaba.com.br/fazendaboavista" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Higienização de estofados na Fazenda Boa Vista",
          serviceType: "Higienização, conservação e impermeabilização de estofados",
          provider: {
            "@type": "LocalBusiness",
            name: "MP Clean — Higienização e Blindagem de Estofados",
            url: "https://mpcleansorocaba.com.br/",
            telephone: "+5515988064494",
          },
          areaServed: {
            "@type": "Place",
            name: "Residencial Fazenda Boa Vista",
          },
          url: "https://mpcleansorocaba.com.br/fazendaboavista",
        }),
      },
    ],
  }),
  component: FazendaBoaVistaPage,
});

const services = [
  {
    icon: Sparkles,
    title: "Higienização de sofás e poltronas",
    description:
      "Removemos poeira, pelos, odores e sujeiras acumuladas, respeitando o tecido e o acabamento de cada móvel.",
  },
  {
    icon: Home,
    title: "Cuidados para casas de campo",
    description:
      "Atendimento programado para manter a casa pronta para os fins de semana, feriados e períodos de temporada.",
  },
  {
    icon: ShieldCheck,
    title: "Impermeabilização e proteção",
    description:
      "Criamos uma barreira protetora contra líquidos e manchas para ajudar a preservar os estofados por mais tempo.",
  },
];

const suitableFor = [
  "Sofás, poltronas e cadeiras estofadas",
  "Colchões, cabeceiras e bancos estofados",
  "Tapetes de fibras naturais ou sintéticas",
  "Móveis de linho, bouclé, suede, veludo e couro",
  "Casas de uso frequente ou imóveis de temporada",
];

function FazendaBoaVistaPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar context="fazendaBoaVista" />

      <main className="pt-24">
        <section id="inicio" className="relative overflow-hidden bg-[#E9E5DC] text-[#1C1B18]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E9E5DC]/95 via-[#E9E5DC]/78 to-[#E9E5DC]/35" />
          <div className="container relative z-10 px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-4xl">
              <span className="mb-6 block text-xs font-sans uppercase tracking-[0.45em] text-[#8A6A25]">
                Atendimento especializado no Residencial Fazenda Boa Vista
              </span>
              <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
                Cuidado premium para os estofados da sua casa no Residencial Fazenda Boa Vista
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#514F49] md:text-xl">
                A MP Clean atende moradores e proprietários que desejam preservar o conforto, a
                beleza e o valor dos móveis estofados de suas casas no Residencial Fazenda Boa
                Vista.
              </p>
              <a
                href="https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Sou%20morador%20ou%20propriet%C3%A1rio%20da%20Fazenda%20Boa%20Vista%20e%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center bg-[#C9A34E] px-8 py-5 text-xs font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-white"
              >
                Solicitar avaliação para minha casa no Residencial Fazenda Boa Vista
              </a>
            </div>
          </div>
        </section>

        <section id="servicos" className="container px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#9C7A2E]">
                Para moradores e proprietários do Residencial Fazenda Boa Vista
              </span>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                A casa de campo merece o mesmo cuidado que você dedica a cada detalhe.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Casas no Residencial Fazenda Boa Vista recebem famílias, convidados e momentos
              importantes. A higienização profissional ajuda a manter sofás, poltronas, colchões e
              tapetes mais limpos, confortáveis e bem preservados, sem interromper a rotina da
              propriedade.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  id={
                    service.title === "Impermeabilização e proteção"
                      ? "impermeabilizacao"
                      : undefined
                  }
                  key={service.title}
                  className="scroll-mt-32 border border-gray-100 bg-[#FAFAF8] p-8"
                >
                  <Icon className="h-10 w-10 text-[#C9A34E]" strokeWidth={1.5} />
                  <h3 className="mt-7 font-serif text-2xl">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="cuidados"
          className="scroll-mt-32 border-y border-[#C9A34E]/15 bg-[#2B2924] text-white"
        >
          <div className="container grid gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#C9A34E]">
                Atendimento discreto e agendado
              </span>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Mais praticidade para cuidar da sua propriedade
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                Agendamos o atendimento no melhor horário para você. A equipe trabalha com
                discrição, cuidado e proteção dos ambientes, deixando tudo organizado ao final do
                serviço.
              </p>
            </div>
            <div className="border border-white/10 p-8 md:p-10">
              <h3 className="font-serif text-3xl text-[#C9A34E]">Ideal para</h3>
              <ul className="mt-7 space-y-4 text-gray-300">
                {suitableFor.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C9A34E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="container px-6 py-24 text-center md:px-12 md:py-32">
          <span className="mb-5 block text-xs font-sans uppercase tracking-[0.45em] text-[#9C7A2E]">
            MP Clean no Residencial Fazenda Boa Vista
          </span>
          <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Envie uma foto do móvel e receba uma orientação clara pelo WhatsApp.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Informe que você está na Fazenda Boa Vista. Assim, preparamos uma avaliação mais
            adequada à sua casa e ao tipo de tecido do seu móvel.
          </p>
          <a
            href="https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Sou%20da%20Fazenda%20Boa%20Vista%20e%20quero%20enviar%20uma%20foto%20para%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex bg-[#0A0A0A] px-9 py-5 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#C9A34E] hover:text-black"
          >
            Falar com um especialista
          </a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
