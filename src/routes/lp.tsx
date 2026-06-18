import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Star,
  ShieldCheck,
  Sparkles,
  MapPin,
  Sofa,
  BedDouble,
  Layers,
  Droplets,
  ShieldHalf,
  Wind,
  HeartPulse,
  Award,
} from "lucide-react";
import beforeImg from "@/assets/results-before.png";
import afterImg from "@/assets/results-after.png";

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      {
        title:
          "MP Clean | Higienização e Impermeabilização de Estofados em Sorocaba",
      },
      {
        name: "description",
        content:
          "Especialistas em higienização de sofás, colchões, tapetes e impermeabilização em Sorocaba. Atendimento profissional e resultados comprovados.",
      },
      {
        name: "keywords",
        content:
          "limpeza de sofá Sorocaba, higienização de sofá Sorocaba, impermeabilização de sofá Sorocaba, limpeza de colchão Sorocaba, lavagem de tapetes Sorocaba",
      },
      {
        property: "og:title",
        content:
          "MP Clean | Higienização e Impermeabilização de Estofados em Sorocaba",
      },
      {
        property: "og:description",
        content:
          "Especialistas em higienização de sofás, colchões, tapetes e impermeabilização em Sorocaba. Atendimento profissional e resultados comprovados.",
      },
      {
        property: "og:url",
        content: "https://mpcleansite.lovable.app/lp",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://mpcleansite.lovable.app/lp" },
    ],
  }),
  component: LandingPage,
});

const whatsappUrl =
  "https://wa.me/5515988064494?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20de%20estofados.";

const GOLD = "#C9A24B";

const services = [
  {
    icon: Sofa,
    title: "Higienização de Sofás e Poltronas",
    description:
      "Processo profundo de extração que remove suor, oleosidade e partículas impregnadas, preservando a fibra do tecido.",
  },
  {
    icon: BedDouble,
    title: "Limpeza de Colchões e Cabeceiras",
    description:
      "Sanitização especializada que elimina ácaros, fungos e odores, devolvendo um descanso verdadeiramente saudável.",
  },
  {
    icon: Layers,
    title: "Lavagem de Tapetes e Carpetes",
    description:
      "Recuperação completa de cor, maciez e textura, com técnica adequada a fibras naturais e sintéticas.",
  },
  {
    icon: ShieldHalf,
    title: "Impermeabilização Blindada",
    description:
      "Camada protetora invisível de alta performance contra líquidos, manchas e desgaste do dia a dia.",
  },
];

const benefits = [
  {
    icon: HeartPulse,
    title: "Eliminação de ácaros e bactérias",
    description:
      "Tratamento técnico que reduz agentes alergênicos e protege a saúde da família.",
  },
  {
    icon: Wind,
    title: "Ambientes mais saudáveis",
    description:
      "Ar mais leve, livre de odores e impurezas que se acumulam nos tecidos.",
  },
  {
    icon: Droplets,
    title: "Proteção contra líquidos",
    description:
      "Impermeabilização premium que repele manchas e prolonga a vida útil dos estofados.",
  },
  {
    icon: Award,
    title: "Atendimento especializado",
    description:
      "Equipe técnica, produtos certificados e padrão de serviço orientado à excelência.",
  },
];

const testimonials = [
  {
    name: "Carolina M.",
    role: "Cliente residencial — Sorocaba",
    text: "Serviço impecável. Meu sofá voltou a parecer novo e o atendimento foi extremamente cuidadoso do início ao fim.",
  },
  {
    name: "Ricardo A.",
    role: "Cliente corporativo — Sorocaba",
    text: "Contratamos para o escritório e o resultado superou as expectativas. Profissionalismo do nível que esperávamos.",
  },
  {
    name: "Juliana P.",
    role: "Cliente residencial — Votorantim",
    text: "Higienização do colchão transformou o quarto. Notei diferença na qualidade do sono já na primeira noite.",
  },
];

function LandingPage() {
  const handleCTAClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        event_category: "WhatsApp",
        event_label: "LP CTA Button",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[#C9A24B] selection:text-black">
      {/* Top bar */}
      <div
        className="text-center py-2 px-4 text-[11px] sm:text-xs tracking-[0.18em] uppercase"
        style={{ backgroundColor: "#0a0a0a", color: GOLD }}
      >
        Atendimento premium em Sorocaba e região
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img
              src="/logo.png"
              alt="MP Clean — Higienização de Estofados em Sorocaba"
              className="h-10 sm:h-12 w-auto object-contain"
              loading="eager"
            />
            <span className="sr-only">MP Clean</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#servicos" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#beneficios" className="hover:text-white transition">
              Benefícios
            </a>
            <a href="#resultados" className="hover:text-white transition">
              Resultados
            </a>
            <a href="#depoimentos" className="hover:text-white transition">
              Depoimentos
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCTAClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 shrink-0"
            style={{
              borderColor: GOLD,
              color: GOLD,
            }}
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-white/5"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(201,162,75,0.5), transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
              style={{ borderColor: "rgba(201,162,75,0.35)", color: GOLD }}
            >
              <Sparkles size={12} /> MP Clean • Sorocaba
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight">
              Mais do que limpeza,{" "}
              <span style={{ color: GOLD }} className="font-normal italic">
                uma experiência de cuidado.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Especialistas em higienização, impermeabilização e revitalização
              de estofados para residências e empresas de alto padrão em
              Sorocaba e região.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_rgba(201,162,75,0.25)] w-full sm:w-auto"
                style={{ backgroundColor: GOLD, color: "#0a0a0a" }}
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                className="text-sm text-white/60 hover:text-white transition border-b border-white/20 pb-1"
              >
                Conhecer nossos serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        id="servicos"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
            style={{ color: GOLD }}
          >
            Serviços
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight">
            Tratamento técnico para cada tipo de estofado
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-black p-8 sm:p-10 hover:bg-white/[0.02] transition-colors duration-500"
              >
                <Icon size={28} style={{ color: GOLD }} strokeWidth={1.5} />
                <h3 className="mt-6 text-lg sm:text-xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section
        id="beneficios"
        className="border-y border-white/5"
        style={{ backgroundColor: "#070707" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
              style={{ color: GOLD }}
            >
              Benefícios
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight">
              Resultado que se vê, se respira e se sente
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="text-center sm:text-left">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border"
                    style={{ borderColor: "rgba(201,162,75,0.3)" }}
                  >
                    <Icon size={20} style={{ color: GOLD }} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-base font-medium">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section
        id="resultados"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
            style={{ color: GOLD }}
          >
            Antes e Depois
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight">
            A diferença de um cuidado profissional
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {[
            { src: beforeImg, label: "Antes" },
            { src: afterImg, label: "Depois" },
          ].map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl overflow-hidden border border-white/5 group"
            >
              <img
                src={item.src}
                alt={`Estofado ${item.label.toLowerCase()} da higienização MP Clean`}
                className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.25em] uppercase rounded-full"
                style={{ backgroundColor: "rgba(0,0,0,0.75)", color: GOLD }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="depoimentos"
        className="border-y border-white/5"
        style={{ backgroundColor: "#070707" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
              style={{ color: GOLD }}
            >
              Avaliações
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight">
              A confiança de quem exige excelência
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="p-8 rounded-2xl border border-white/5 bg-black/40"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      style={{ color: GOLD, fill: GOLD }}
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-white/80 leading-relaxed italic">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-white/50 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
            Seu estofado merece um{" "}
            <span style={{ color: GOLD }} className="italic">
              cuidado profissional.
            </span>
          </h2>
          <p className="mt-6 text-white/60 max-w-xl mx-auto">
            Solicite agora seu orçamento personalizado e descubra o padrão MP
            Clean de atendimento.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCTAClick}
            className="mt-10 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_50px_rgba(201,162,75,0.3)]"
            style={{ backgroundColor: GOLD, color: "#0a0a0a" }}
          >
            <MessageCircle size={18} />
            Falar com Especialista
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <span className="inline-flex items-center gap-2">
              <Star size={12} style={{ color: GOLD, fill: GOLD }} /> 4.9/5 de
              clientes satisfeitos
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={12} style={{ color: GOLD }} /> Garantia de
              secagem e odor agradável
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/5"
        style={{ backgroundColor: "#050505" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-3 gap-10 items-start">
            <div>
              <img
                src="/logo.png"
                alt="MP Clean"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
              <p className="mt-4 text-xs text-white/50 leading-relaxed max-w-xs">
                Higienização e impermeabilização de estofados com padrão
                premium em Sorocaba e região.
              </p>
            </div>

            <div className="text-sm">
              <h3
                className="text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ color: GOLD }}
              >
                Contato
              </h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <MessageCircle size={14} /> WhatsApp: (15) 98806-4494
              </a>
              <a
                href="https://instagram.com/mpclean"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-white/70 hover:text-white transition"
              >
                <Instagram size={14} /> @mpclean
              </a>
            </div>

            <div className="text-sm">
              <h3
                className="text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ color: GOLD }}
              >
                Atendimento
              </h3>
              <p className="flex items-center gap-2 text-white/70">
                <MapPin size={14} /> Sorocaba e região
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
            <span>
              © {new Date().getFullYear()} MP Clean. Todos os direitos
              reservados.
            </span>
            <span>Sorocaba • São Paulo</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTAClick}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(201,162,75,0.35)] transition-transform hover:scale-105"
        style={{ backgroundColor: GOLD, color: "#0a0a0a" }}
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
