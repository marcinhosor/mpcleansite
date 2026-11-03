import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  HeartHandshake,
  Layers,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
} from "lucide-react";

import beforeImg from "@/assets/results-before.png";
import afterImg from "@/assets/results-after.png";
import reviewCristiane from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085504.png";
import reviewAlex from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085611.png";
import reviewLarissa from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085434.png";
import reviewNeia from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085531.png";
import reviewRiana from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085332.png";
import reviewRafaela from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085633.png";

const SITE_URL = "https://mpcleansorocaba.com.br";
const WHATSAPP_NUMBER = "5515988064494";
const GOLD = "#C7A54F";
const WHATSAPP_GREEN = "#25D366";

const makeWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const mainWhatsAppUrl = makeWhatsAppUrl(
  "OlÃ¡! Conheci a MP Clean pelo site e gostaria de solicitar um orÃ§amento. Vou enviar uma foto do meu estofado para uma avaliaÃ§Ã£o inicial."
);

const reviews = [
  {
    name: "Cristiane S.",
    text: "Muito profissional. Encantada com o trabalho. Recomendo.",
    image: reviewCristiane,
  },
  {
    name: "Alex S.",
    text: "PreÃ§o e qualidade do serviÃ§o muito bom recomendo.",
    image: reviewAlex,
  },
  {
    name: "Larissa K. M.",
    text: "Atendimento muito bom e prestativo, serviÃ§o de qualidade e excelentes resultados.",
    image: reviewLarissa,
  },
  {
    name: "Neia C.",
    text: "Perfeito, super indico.",
    image: reviewNeia,
  },
  {
    name: "Riana R.",
    text: "ExcelÃªncia na qualidade do atendimento e na prestaÃ§Ã£o de serviÃ§os.",
    image: reviewRiana,
  },
  {
    name: "Rafaela A.",
    text: "ServiÃ§o de Ã³tima qualidade.",
    image: reviewRafaela,
  },
];

const services = [
  {
    icon: Sofa,
    title: "SofÃ¡s e poltronas",
    description:
      "HigienizaÃ§Ã£o profissional com processo adequado ao tecido, Ã  estrutura e Ã s condiÃ§Ãµes de uso de cada peÃ§a.",
  },
  {
    icon: BedDouble,
    title: "ColchÃµes e cabeceiras",
    description:
      "Cuidado tÃ©cnico para remover sujidades acumuladas e melhorar a higiene dos tecidos que fazem parte da sua rotina.",
  },
  {
    icon: Layers,
    title: "Tapetes e carpetes",
    description:
      "Limpeza especializada conforme as caracterÃ­sticas das fibras, com atenÃ§Ã£o Ã  conservaÃ§Ã£o e ao acabamento.",
  },
  {
    icon: ShieldCheck,
    title: "Blindagem de estofados",
    description:
      "ProteÃ§Ã£o que ajuda a reduzir a absorÃ§Ã£o de lÃ­quidos e facilita os cuidados cotidianos com o tecido.",
  },
];

const processSteps = [
  "Entendemos o tipo de estofado e o que vocÃª precisa.",
  "Analisamos fotos e informaÃ§Ãµes para orientar o orÃ§amento.",
  "Definimos o procedimento adequado para o material.",
  "Executamos o serviÃ§o com cuidado tÃ©cnico e atenÃ§Ã£o ao ambiente.",
];

function trackWhatsAppClick(label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      event_category: "WhatsApp",
      event_label: label,
    });
  }
}

function WhatsAppButton({
  label,
  className = "",
  message = mainWhatsAppUrl,
}: {
  label: string;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={message}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(label)}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold tracking-wide text-[#102016] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${className}`}
      style={{ backgroundColor: WHATSAPP_GREEN }}
    >
      <MessageCircle size={20} strokeWidth={2.4} />
      QUERO MEU ORÃ‡AMENTO
      <ArrowRight size={17} />
    </a>
  );
}

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      {
        title:
          "MP Clean | HigienizaÃ§Ã£o e Blindagem de Estofados em Sorocaba",
      },
      {
        name: "description",
        content:
          "HigienizaÃ§Ã£o profissional de sofÃ¡s, poltronas, colchÃµes e tapetes, alÃ©m de blindagem de estofados em Sorocaba e regiÃ£o. Solicite uma avaliaÃ§Ã£o pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "MP Clean | Cuidado profissional para seus estofados",
      },
      {
        property: "og:description",
        content:
          "HigienizaÃ§Ã£o e blindagem de estofados em Sorocaba e regiÃ£o. ConheÃ§a nosso trabalho e solicite seu orÃ§amento pelo WhatsApp.",
      },
      { property: "og:url", content: `${SITE_URL}/lp` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/lp` }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] pb-20 text-white antialiased selection:bg-[#C7A54F] selection:text-black sm:pb-0">
      <div className="border-b border-white/10 bg-[#11100d] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8BD7A] sm:text-xs">
        MP Clean Â· Atendimento em Sorocaba e regiÃ£o
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="MP Clean - inÃ­cio" className="shrink-0">
            <img
              src="/logo.png"
              alt="MP Clean"
              className="h-10 w-auto object-contain sm:h-12"
              loading="eager"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#servicos" className="transition hover:text-white">
              ServiÃ§os
            </a>
            <a href="#resultados" className="transition hover:text-white">
              Resultados
            </a>
            <a href="#avaliacoes" className="transition hover:text-white">
              AvaliaÃ§Ãµes
            </a>
            <a href="#processo" className="transition hover:text-white">
              Como funciona
            </a>
          </nav>

          <a
            href={mainWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Header")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#25D366]/60 px-3 py-2 text-xs font-semibold text-[#7BE5A0] transition hover:bg-[#25D366]/10 sm:px-4 sm:text-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative isolate border-b border-white/10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 78% 30%, rgba(199,165,79,0.15), transparent 42%), linear-gradient(120deg, #090909 35%, #14120d 100%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C7A54F]/35 bg-[#C7A54F]/[0.07] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D9BF7D] sm:text-xs">
              <Sparkles size={13} />
              Cuidado especializado para seus estofados
            </div>

            <h1 className="font-serif text-[2.55rem] font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Seu estofado merece um{" "}
              <span className="italic text-[#D5B66B]">
                cuidado Ã  altura
              </span>{" "}
              do seu ambiente.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              HigienizaÃ§Ã£o profissional e blindagem de estofados com atenÃ§Ã£o
              aos detalhes, respeito aos materiais e cuidado com o seu espaÃ§o.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
              <WhatsAppButton
                label="Hero principal"
                className="w-full max-w-md sm:w-auto"
              />
              <p className="text-xs text-white/55">
                Envie uma foto e receba uma avaliaÃ§Ã£o inicial pelo WhatsApp.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/55 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C7A54F]" />
                Atendimento especializado
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C7A54F]" />
                Sorocaba e regiÃ£o
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C7A54F]/20" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#171512] shadow-2xl">
              <img
                src={afterImg}
                alt="Estofado apÃ³s atendimento profissional da MP Clean"
                className="aspect-[5/4] w-full object-cover sm:aspect-[4/3]"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D8BD7A]">
                  MP Clean
                </p>
                <p className="mt-1 font-serif text-xl sm:text-2xl">
                  Mais do que limpeza, uma experiÃªncia de cuidado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#11100d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-7 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-[#C7A54F]" size={22} />
            <span className="text-sm text-white/80">
              Procedimentos adequados a cada material
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <HeartHandshake className="text-[#C7A54F]" size={22} />
            <span className="text-sm text-white/80">
              Cuidado com sua casa e seus estofados
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock3 className="text-[#C7A54F]" size={22} />
            <span className="text-sm text-white/80">
              OrÃ§amento inicial pelo WhatsApp
            </span>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C7A54F] sm:text-xs">
            Nossos serviÃ§os
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
            O cuidado certo para cada superfÃ­cie.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
            Cada tecido e cada peÃ§a exigem atenÃ§Ã£o prÃ³pria. Por isso, avaliamos
            as caracterÃ­sticas do estofado antes de definir o procedimento.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#11110f] p-7 transition duration-300 hover:border-[#C7A54F]/40 hover:bg-[#15130f] sm:p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A54F]/35 bg-[#C7A54F]/[0.07]">
                  <Icon size={23} className="text-[#D5B66B]" strokeWidth={1.5} />
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#C7A54F]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <a
                  href={makeWhatsAppUrl(
                    `OlÃ¡! Gostaria de saber mais sobre ${service.title.toLowerCase()} e solicitar um orÃ§amento.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`ServiÃ§o: ${service.title}`)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D5B66B] transition group-hover:gap-3"
                >
                  Consultar pelo WhatsApp <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="resultados"
        className="border-y border-white/10 bg-[#11100d]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C7A54F] sm:text-xs">
              Resultados
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl">
              O resultado aparece nos detalhes.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Veja um registro de antes e depois de um atendimento. Cada
              resultado depende do tecido, do tipo de sujidade e das condiÃ§Ãµes
              da peÃ§a.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              { src: beforeImg, label: "Antes do atendimento" },
              { src: afterImg, label: "Depois do atendimento" },
            ].map((item) => (
              <figure
                key={item.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                <img
                  src={item.src}
                  alt={`${item.label} - registro de resultado da MP Clean`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="border-t border-white/10 px-5 py-4 text-center text-xs uppercase tracking-[0.2em] text-[#D5B66B]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <WhatsAppButton label="CTA antes e depois" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C7A54F] sm:text-xs">
            Blindagem de estofados
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
            ProteÃ§Ã£o para aproveitar seu estofado com mais tranquilidade.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
            A blindagem forma uma proteÃ§Ã£o que ajuda a reduzir a absorÃ§Ã£o de
            lÃ­quidos pelo tecido. Ã‰ uma opÃ§Ã£o para quem deseja incluir uma
            camada adicional de cuidado na rotina.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
            A indicaÃ§Ã£o depende da composiÃ§Ã£o, do estado e das recomendaÃ§Ãµes
            para cada material. Nossa equipe orienta vocÃª antes da aplicaÃ§Ã£o.
          </p>
          <WhatsAppButton
            label="Blindagem"
            className="mt-8"
            message={makeWhatsAppUrl(
              "OlÃ¡! Gostaria de receber informaÃ§Ãµes sobre a blindagem de estofados da MP Clean."
            )}
          />
        </div>

        <div className="relative overflow-hidden rounded-[1.7rem] border border-[#C7A54F]/25 bg-[#15130f] p-8 sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C7A54F]/10 blur-3xl" />
          <ShieldCheck
            size={48}
            strokeWidth={1.2}
            className="relative text-[#D5B66B]"
          />
          <h3 className="relative mt-7 font-serif text-3xl">
            Cuidado que vai alÃ©m da limpeza.
          </h3>
          <ul className="relative mt-7 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#C7A54F]" size={18} />
              OrientaÃ§Ã£o conforme o tipo de tecido.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#C7A54F]" size={18} />
              AvaliaÃ§Ã£o prÃ©via da peÃ§a.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#C7A54F]" size={18} />
              RecomendaÃ§Ãµes para os cuidados posteriores.
            </li>
          </ul>
        </div>
      </section>

      <section id="processo" className="border-y border-white/10 bg-[#11100d]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C7A54F] sm:text-xs">
              Atendimento
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl">
              ComeÃ§ar Ã© simples.
            </h2>
            <p className="mt-4 text-sm text-white/60 sm:text-base">
              VocÃª pode iniciar a conversa enviando uma foto pelo WhatsApp.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <span className="font-serif text-3xl text-[#C7A54F]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-sm leading-relaxed text-white/75">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C7A54F] sm:text-xs">
            ExperiÃªncias de clientes
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl">
            A confianÃ§a Ã© construÃ­da em cada atendimento.
          </h2>
          <div className="mt-7 inline-flex flex-col items-center rounded-2xl border border-[#C7A54F]/30 bg-[#C7A54F]/[0.06] px-8 py-5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl text-white">5,0</span>
              <span className="flex gap-0.5 text-[#E5BD58]" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </span>
            </div>
            <p className="mt-1 text-xs text-white/60">
              Nota exibida no Google Â· 7 avaliaÃ§Ãµes
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-white/10 bg-[#11110f] p-6"
            >
              <div className="flex gap-1 text-[#E5BD58]" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 min-h-16 text-sm leading-relaxed text-white/85">
                â€œ{review.text}â€
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#D5B66B]">
                {review.name}
              </p>
              <p className="mt-1 text-[10px] text-white/40">
                AvaliaÃ§Ã£o compartilhada no Google
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-5 text-center">
            <h3 className="font-serif text-2xl">Registros das avaliaÃ§Ãµes no Google</h3>
            <p className="mt-2 text-xs text-white/50">
              Capturas reais fornecidas pela MP Clean.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={`print-${review.name}`}
                className="flex min-h-36 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-2"
              >
                <img
                  src={review.image}
                  alt={`Captura real de avaliaÃ§Ã£o no Google: ${review.name}`}
                  className="max-h-52 w-full object-contain"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton label="CTA avaliaÃ§Ãµes" />
        </div>
      </section>

      <section className="border-y border-[#C7A54F]/20 bg-[#15120c]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D5B66B] sm:text-xs">
            Vamos cuidar do seu estofado?
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            Envie uma foto. A MP Clean orienta vocÃª sobre o prÃ³ximo passo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Conte o que vocÃª precisa, envie uma foto do estofado e solicite uma
            avaliaÃ§Ã£o inicial sem complicaÃ§Ã£o.
          </p>
          <WhatsAppButton
            label="CTA final"
            className="mt-8 w-full max-w-md sm:w-auto"
          />
          <p className="mt-4 text-[11px] text-white/45">
            Atendimento em Sorocaba e regiÃ£o.
          </p>
        </div>
      </section>

      <footer className="bg-[#070707]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <img
              src="/logo.png"
              alt="MP Clean"
              className="h-11 w-auto object-contain"
              loading="lazy"
            />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/50">
              Mais do que limpeza, uma experiÃªncia de cuidado. HigienizaÃ§Ã£o e
              blindagem de estofados em Sorocaba e regiÃ£o.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7A54F]">
              Fale com a MP Clean
            </h3>
            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("RodapÃ©")}
              className="mt-4 flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              <MessageCircle size={16} /> (15) 98806-4494
            </a>
            <a
              href="https://www.instagram.com/mpclean_sorocaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              <span aria-hidden="true">â—Ž</span> @mpclean_sorocaba
            </a>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7A54F]">
              RegiÃ£o de atendimento
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <MapPin size={16} /> Sorocaba e regiÃ£o Â· SÃ£o Paulo
            </p>
            <a
              href="#inicio"
              className="mt-5 inline-flex items-center gap-2 text-xs text-white/45 transition hover:text-white"
            >
              Voltar ao inÃ­cio <ChevronDown className="rotate-180" size={14} />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] text-white/35">
          Â© {new Date().getFullYear()} MP Clean. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={mainWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("BotÃ£o flutuante mobile")}
        aria-label="Solicitar orÃ§amento pelo WhatsApp"
        className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold text-[#102016] shadow-[0_8px_30px_rgba(0,0,0,0.55)] ring-1 ring-black/10 transition hover:brightness-105 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:px-6"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <MessageCircle size={20} />
        SOLICITAR ORÃ‡AMENTO NO WHATSAPP
      </a>
    </main>
  );
}
