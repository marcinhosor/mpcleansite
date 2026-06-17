import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Star, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      { title: "MP Clean — Orçamento Grátis | Higienização de Estofados" },
      {
        name: "description",
        content:
          "Orçamento gratuito + cheiro exclusivo incluso. Higienização profissional de sofás, colchões, tapetes e impermeabilização em Sorocaba e região.",
      },
      {
        property: "og:title",
        content: "MP Clean — Orçamento Grátis | Higienização de Estofados",
      },
      {
        property: "og:description",
        content:
          "Orçamento gratuito + cheiro exclusivo incluso. Higienização profissional de sofás, colchões, tapetes e impermeabilização em Sorocaba e região.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const whatsappUrl =
  "https://wa.me/5515988064494?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20e%20quero%20aproveitar%20o%20or%C3%A7amento%20gratuito%20com%20desconto%20para%20limpar%20meus%20estofados.";

const services = [
  {
    title: "Higienização de Sofás e Poltronas",
    description:
      "Extração de sujeira profunda, suor e eliminação de micro-organismos.",
  },
  {
    title: "Limpeza de Colchões e Cabeceiras",
    description: "Durma livre de ácaros causadores de alergias.",
  },
  {
    title: "Lavagem de Tapetes e Carpetes",
    description: "Recuperação de cor, maciez e remoção de manchas.",
  },
  {
    title: "Impermeabilização Blindada",
    description:
      "Proteção de alta performance contra derramamento de líquidos.",
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
    <div className="min-h-screen bg-white">
      {/* Urgency Banner */}
      <div className="bg-emerald-700 text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-wide animate-pulse">
          🔥 PROMOÇÃO DA SEMANA: Orçamento Grátis + aplicação de cheiro
          exclusivo inclusa!
        </p>
      </div>

      {/* Minimalist Header */}
      <header className="w-full border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            MP Clean
          </h1>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
            Seu sofá parece{" "}
            <span className="text-emerald-600">velho</span>,{" "}
            <span className="text-emerald-600">sujo</span> ou está com{" "}
            <span className="text-emerald-600">mau odor</span>?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Removemos ácaros, manchas e devolvemos o aspeto de{" "}
            <strong>novo de fábrica</strong> — sem precisar gastar uma fortuna
            com um sofá novo.
          </p>
        </motion.div>
      </section>

      {/* Services Card */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100"
        >
          <h3 className="text-center text-lg sm:text-xl font-semibold text-foreground mb-6">
            O que fazemos por si:
          </h3>
          <div className="grid gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="text-emerald-500 shrink-0 mt-0.5"
                  size={22}
                />
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {service.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Giant CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCTAClick}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white font-extrabold text-lg sm:text-2xl px-8 sm:px-16 py-5 sm:py-6 rounded-2xl shadow-[0_10px_40px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] hover:bg-[#22c35e] transition-colors duration-300 tracking-wide"
          >
            <MessageCircle size={28} />
            QUERO MEU ESTOFADO NOVO DE VOLTA
          </motion.a>
          <p className="mt-3 text-xs text-muted-foreground">
            Resposta em poucos minutos via WhatsApp
          </p>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-yellow-100">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            4.9/5 de Clientes Satisfeitos
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-emerald-100">
            <ShieldCheck size={16} className="text-emerald-500" />
            Garantia de Secagem e Odor Agradável
          </div>
        </div>
      </section>
    </div>
  );
}
