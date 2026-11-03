import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Droplets,
  HeartPulse,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
} from "lucide-react";
import { reportWhatsAppConversion } from "@/lib/whatsapp";
import beforeImg from "@/assets/results-before.png";
import afterImg from "@/assets/results-after.png";
import reviewCristiane from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085504.png";
import reviewAlex from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085611.png";
import reviewLarissa from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085434.png";
import reviewNeia from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085531.png";
import reviewRiana from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085332.png";
import reviewRafaela from "@/assets/google-reviews/Captura_de_tela_2026-11-03_085633.png";

const SITE_URL = "https://mpcleansorocaba.com.br";
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/M%26P+CLEAN+LIMPEZA+DE+ESTOFADOS/@-23.4137279,-47.5181711,17z/data=!3m1!4b1!4m6!3m5!1s0x94c5f502a9cc0b6b:0xc11f2bd8757d204d!8m2!3d-23.4137279!4d-47.5181711!16s%2Fg%2F11cs3g3nvg?entry=ttu";
const WHATSAPP_LP_URL =
  "https://wa.me/5515988064494?text=Ol%C3%A1%20MP%20Clean!%20Vim%20pela%20landing%20page%20e%20quero%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20estofado.";

const reviews = [
  {
    name: "Cristiane S.",
    text: "Muito profissional. Encantada com o trabalho. Recomendo.",
    image: reviewCristiane,
  },
  {
    name: "Alex S.",
    text: "Preço e qualidade do serviço muito bom recomendo.",
    image: reviewAlex,
  },
  {
    name: "Larissa K. M.",
    text: "Atendimento muito bom e prestativo, serviço de qualidade e excelentes resultados.",
    image: reviewLarissa,
  },
  {
    name: "Neia C.",
    text: "Perfeito, super indico.",
    image: reviewNeia,
  },
  {
    name: "Riana R.",
    text: "Excelência na qualidade do atendimento e na prestação de serviços.",
    image: reviewRiana,
  },
  {
    name: "Rafaela A.",
    text: "Serviço de ótima qualidade.",
    image: reviewRafaela,
  },
];

const services = [
  {
    icon: Sofa,
    title: "Sofás, poltronas e cadeiras",
    description:
      "Higienização profunda para remover poeira, pelos, odores e sujeiras sem descuidar da fibra, da cor e do acabamento.",
  },
  {
    icon: BedDouble,
    title: "Colchões e cabeceiras",
    description:
      "Limpeza técnica para reduzir ácaros, odores e impurezas e deixar o ambiente de descanso mais confortável.",
  },
  {
    icon: Layers,
    title: "Tapetes e carpetes",
    description:
      "Tratamento escolhido conforme a fibra, com cuidado para preservar textura, maciez e aparência.",
  },
  {
    icon: ShieldCheck,
    title: "Impermeabilização",
    description:
      "Proteção contra líquidos e manchas para facilitar a manutenção e ajudar a prolongar a vida útil do tecido.",
  },
];

const faqs = [
  {
    question: "Como solicito um orçamento?",
    answer:
      "Envie uma foto do móvel pelo WhatsApp, informe sua cidade e descreva o que precisa. A MP Clean orienta o próximo passo e agenda o atendimento.",
  },
  {
    question: "A higienização é segura para tecidos delicados?",
    answer:
      "Cada peça deve ser avaliada antes do serviço. O tratamento é escolhido conforme o tecido, o acabamento e as condições do estofado.",
  },
  {
    question: "A MP Clean atende quais locais?",
    answer:
      "O atendimento parte de Sorocaba e alcança Votorantim, Porto Feliz, Fazenda Boa Vista e outras áreas da região, conforme agendamento.",
  },
  {
    question: "A impermeabilização muda o toque do tecido?",
    answer:
      "O objetivo é criar proteção contra líquidos e manchas preservando, tanto quanto possível, o toque e a aparência originais do tecido.",
  },
];

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      {
        title: "Higienização de Estofados em Sorocaba | MP Clean",
      },
      {
        name: "description",
        content:
          "Higienização de sofás, poltronas, colchões e tapetes em Sorocaba e região. Atendimento técnico, impermeabilização e orçamento pelo WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "higienização de estofados Sorocaba, limpeza de sofá Sorocaba, impermeabilização de sofá Sorocaba, limpeza de colchão Sorocaba, lavagem de tapetes Sorocaba",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "MP Clean" },
      {
        property: "og:title",
        content: "Higienização de Estofados em Sorocaba | MP Clean",
      },
      {
        property: "og:description",
        content:
          "Cuidado técnico para sofás, poltronas, colchões e tapetes em Sorocaba e região. Solicite sua avaliação pelo WhatsApp.",
      },
      { property: "og:url", content: `${SITE_URL}/lp` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/logo.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/lp` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": `${SITE_URL}/#business`,
              name: "MP Clean — Higienização e Blindagem de Estofados",
              alternateName: "MP Clean Sorocaba",
              url: `${SITE_URL}/lp`,
              telephone: "+5515988064494",
              description:
                "Higienização, limpeza, impermeabilização e conservação de sofás, colchões, tapetes e poltronas em Sorocaba e região.",
              image: `${SITE_URL}/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sorocaba",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              areaServed: ["Sorocaba", "Votorantim", "Porto Feliz", "Fazenda Boa Vista"],
              employee: {
                "@type": "Person",
                name: "Marcio Oliveira",
                jobTitle: "Responsável técnico",
              },
              sameAs: ["https://www.instagram.com/mpclean_sorocaba/", GOOGLE_PROFILE_URL],
            },
            {
              "@type": "Service",
              name: "Higienização de estofados em Sorocaba",
              provider: { "@id": `${SITE_URL}/#business` },
              areaServed: "Sorocaba e região",
              serviceType: "Higienização, conservação e impermeabilização de estofados",
              url: `${SITE_URL}/lp`,
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const handleCTA = (label: string) => reportWhatsAppConversion(`LP ${label}`);

  return (
    <div className="min-h-screen bg-[#F7F4EE] pb-24 text-[#25231F] antialiased selection:bg-[#C9A24B] selection:text-black">
      <div className="border-b border-[#C9A24B]/25 bg-[#EDE7DA] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#775B20] sm:text-xs">
        Atendimento em Sorocaba e região · Orçamento pelo WhatsApp
      </div>

      <header className="sticky top-0 z-40 border-b border-[#D8D0C1] bg-[#F7F4EE]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#inicio" aria-label="Voltar ao início da landing page MP Clean">
            <img
              src="/logo.png"
              alt="MP Clean — Higienização de Estofados em Sorocaba"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>
          <nav
            className="hidden items-center gap-7 text-xs text-[#5E5A52] md:flex"
            aria-label="Seções da landing page"
          >
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
            <a href="#processo" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="#duvidas" className="transition hover:text-white">
              Dúvidas
            </a>
          </nav>
          <a
            href={WHATSAPP_LP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTA("Cabeçalho")}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-extrabold text-[#12351F] shadow-md transition hover:-translate-y-0.5 hover:bg-[#39E477] sm:px-5"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        <section id="resultados" className="border-y border-[#D8D0C1] bg-[#25231F] text-[#F7F4EE]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D5B66A] sm:text-xs">
                Resultado visível
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
                A diferença de um cuidado profissional.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#D6D1C6] sm:text-base">
                Veja a transformação no estofado. O cuidado certo faz diferença — e o resultado aparece.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {[
                { src: beforeImg, label: "Antes" },
                { src: afterImg, label: "Depois" },
              ].map((item) => (
                <figure
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-[#D5B66A]/40 bg-black shadow-2xl"
                >
                  <img
                    src={item.src}
                    alt={`Resultado real de higienização de estofado MP Clean — ${item.label.toLowerCase()}`}
                    className="h-[300px] w-full object-cover sm:h-[440px]"
                    loading="eager"
                  />
                  <figcaption className="absolute left-4 top-4 rounded-full border border-[#D5B66A]/50 bg-[#25231F]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F7F4EE]">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-9 text-center">
              <a
                href={WHATSAPP_LP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTA("Resultado")}
                className="inline-flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-extrabold text-[#12351F] shadow-[0_14px_38px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 hover:bg-[#39E477] sm:w-auto"
              >
                <MessageCircle size={21} /> QUERO UM RESULTADO ASSIM
              </a>
              <p className="mt-3 text-xs text-[#D6D1C6]">
                Envie uma foto do seu estofado e peça uma avaliação pelo WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <section id="inicio" className="relative overflow-hidden border-b border-[#DDD5C7]">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,75,0.18),transparent_58%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20] sm:text-xs">
                MP Clean · Sorocaba e região
              </p>
              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
                Seu estofado limpo, protegido e bem cuidado.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#5E5A52] sm:text-lg">
                Higienização profissional de sofás, poltronas, colchões e tapetes para residências,
                condomínios e empresas.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTA("Hero")}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-extrabold tracking-wide text-[#12351F] shadow-[0_14px_38px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 hover:bg-[#39E477] hover:shadow-[0_18px_42px_rgba(37,211,102,0.36)] sm:w-auto sm:min-w-[340px]"
                >
                  <MessageCircle size={21} /> QUERO MEU ORÇAMENTO PELO WHATSAPP
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 text-sm text-[#5E5A52] transition hover:text-white"
                >
                  Ver serviços <ArrowRight size={16} />
                </a>
              </div>
              <p className="mt-5 text-xs text-[#777168]">
                Envie uma foto do móvel e receba uma orientação inicial.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20]">
              Serviços
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-[#25231F] sm:text-4xl">
              Cuidado técnico para cada tipo de estofado
            </h2>
            <p className="mt-5 text-[#5E5A52]">
              Antes de iniciar, avaliamos o material e indicamos o cuidado mais adequado.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#D8D0C1] bg-[#D8D0C1] sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="bg-[#FCFBF8] p-7 sm:p-9">
                  <Icon size={28} strokeWidth={1.5} className="text-[#775B20]" />
                  <h3 className="mt-6 text-xl font-medium text-[#25231F]">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#5E5A52]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="processo" className="border-y border-[#D8D0C1] bg-[#EDE7DA]">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20]">
                Como funciona
              </p>
              <h2 className="mt-4 text-3xl font-light text-[#25231F] sm:text-5xl">
                Sem complicação, do primeiro contato ao cuidado final.
              </h2>
              <p className="mt-6 leading-relaxed text-[#5E5A52]">
                Atendimento agendado em Sorocaba, Votorantim, Porto Feliz, Fazenda Boa Vista e
                região.
              </p>
              <a
                href={WHATSAPP_LP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTA("Processo")}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#775B20] transition hover:text-white"
              >
                Quero enviar uma foto <ArrowRight size={17} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Envie uma foto", "Mostre o móvel e informe sua localização."],
                ["02", "Receba a orientação", "Indicamos o cuidado mais adequado para o material."],
                ["03", "Agende o atendimento", "Combinamos o melhor dia e horário para você."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-[#D1C7B7] bg-[#F7F4EE]/75 p-6"
                >
                  <span className="text-3xl font-light text-[#775B20]">{number}</span>
                  <h3 className="mt-8 font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#777168]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="confianca" className="border-y border-[#D8D0C1] bg-[#EDE7DA]">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20]">
                Confiança e cuidado
              </p>
              <h2 className="mt-4 text-3xl font-light text-[#25231F] sm:text-5xl">
                Seu móvel merece mais do que uma limpeza rápida.
              </h2>
              <p className="mt-6 leading-relaxed text-[#5E5A52]">
                A MP Clean trabalha com atendimento personalizado e foco na preservação de tecidos,
                conforto e patrimônio.
              </p>
              <div className="mt-7 space-y-4 text-sm text-[#403D37]">
                {[
                  "Responsável técnico: Marcio Oliveira",
                  "Atendimento residencial e corporativo",
                  "Agendamento em Sorocaba e região",
                  "Instagram oficial: @mpclean_sorocaba",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#775B20]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#C9A24B]/35 bg-[#F7F4EE]/70 p-7 sm:p-9">
              <div
                className="flex items-center gap-1 text-[#775B20]"
                aria-label="Avaliações no Google"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <h3 className="mt-6 text-2xl font-light">Veja as avaliações reais no Google</h3>
              <p className="mt-4 leading-relaxed text-[#5E5A52]">
                Confira a experiência de clientes e conheça melhor o trabalho da MP Clean antes de
                solicitar seu atendimento.
              </p>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#C9A24B] px-5 py-3 text-sm font-semibold text-[#775B20] transition hover:bg-[#C9A24B] hover:text-black"
              >
                Ver avaliações no Google <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="border-y border-[#D8D0C1] bg-[#F7F4EE]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20]">
                Experiências de clientes
              </p>
              <h2 className="mt-4 text-3xl font-light text-[#25231F] sm:text-5xl">
                A confiança é construída em cada atendimento.
              </h2>
              <p className="mt-5 leading-relaxed text-[#5E5A52]">
                Conheça relatos de clientes que confiaram seus estofados aos cuidados da MP Clean.
              </p>
              <div className="mt-7 inline-flex flex-col items-center rounded-2xl border border-[#C9A24B]/40 bg-white px-8 py-5">
                <div className="flex items-center gap-1 text-[#A47B26]" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={19} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-[#25231F]">
                  Avaliações compartilhadas no Google
                </p>
                <p className="mt-1 text-xs text-[#777168]">
                  Confira também o perfil oficial da MP Clean.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-2xl border border-[#D8D0C1] bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-1 text-[#A47B26]" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 min-h-16 text-sm leading-relaxed text-[#403D37]">
                    “{review.text}”
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#775B20]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[10px] text-[#888176]">
                    Avaliação compartilhada no Google
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-14">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-light text-[#25231F]">
                  Registros das avaliações no Google
                </h3>
                <p className="mt-2 text-sm text-[#777168]">
                  Capturas reais fornecidas pela MP Clean.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                  <figure
                    key={`print-${review.name}`}
                    className="flex min-h-36 items-center justify-center overflow-hidden rounded-xl border border-[#D8D0C1] bg-white p-3"
                  >
                    <img
                      src={review.image}
                      alt={`Captura da avaliação no Google: ${review.name}`}
                      className="max-h-72 w-full object-contain"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A24B] px-6 py-3 text-sm font-semibold text-[#775B20] transition hover:bg-[#C9A24B] hover:text-black"
              >
                Ver perfil e avaliações no Google <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section id="duvidas" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#775B20]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-4 text-3xl font-light text-[#25231F] sm:text-4xl">
              Antes de agendar, veja as respostas
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#D8D0C1] bg-[#FCFBF8] p-5"
              >
                <summary className="cursor-pointer list-none pr-6 font-medium text-[#25231F] marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-relaxed text-[#5E5A52]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contato" className="border-t border-white/10 bg-[#C9A24B] text-black">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/65">
              MP Clean · Sorocaba e região
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-6xl">
              Quer saber o melhor cuidado para o seu estofado?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
              Envie uma foto pelo WhatsApp e receba uma orientação inicial para sua casa ou empresa.
            </p>
            <a
              href={WHATSAPP_LP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTA("CTA final")}
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-extrabold text-[#12351F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#39E477]"
            >
              <MessageCircle size={21} /> QUERO FALAR COM A MP CLEAN
            </a>
            <p className="mt-6 text-sm text-black/65">
              WhatsApp: (15) 98806-4494 · Atendimento com hora marcada
            </p>
          </div>
        </section>
      </main>

      <a
        href={WHATSAPP_LP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleCTA("Botão fixo") }
        className="fixed bottom-3 left-3 right-3 z-50 mx-auto flex min-h-14 max-w-md items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-extrabold text-[#12351F] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:bg-[#39E477] active:scale-[0.98] sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-auto sm:max-w-none sm:px-7"
        aria-label="Pedir orçamento pelo WhatsApp"
      >
        <MessageCircle size={22} /> Pedir orçamento pelo WhatsApp
      </a>

      <footer className="border-t border-[#D8D0C1] bg-[#25231F] px-4 py-10 text-center text-xs text-[#D6D1C6] sm:px-6">
        <p>MP CLEAN — CONSERVAÇÃO E PROTEÇÃO PATRIMONIAL</p>
        <p className="mt-2">Sorocaba (SP) · Votorantim · Porto Feliz · Fazenda Boa Vista</p>
        <a
          href="https://www.instagram.com/mpclean_sorocaba/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-[#775B20] hover:text-white"
        >
          @mpclean_sorocaba
        </a>
      </footer>
    </div>
  );
}
