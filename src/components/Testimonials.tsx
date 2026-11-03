import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";

const googleMapsUrl =
  "https://www.google.com/maps/place/M%26P+CLEAN+LIMPEZA+DE+ESTOFADOS/@-23.4137279,-47.5181711,17z/data=!3m1!4b1!4m6!3m5!1s0x94c5f502a9cc0b6b:0xc11f2bd8757d204d!8m2!3d-23.4137279!4d-47.5181711!16s%2Fg%2F11cs3g3nvg?entry=ttu";

export const Testimonials = () => (
  <section id="avaliacoes" className="bg-[#F3F0E9] py-28 text-[#1C1B18] md:py-32">
    <div className="container px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-5 block text-xs font-sans uppercase tracking-[0.4em] text-[#8A6A25]">
          Avaliações no Google
        </span>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          A opinião de quem já confiou na <span className="italic text-[#9C7A2E]">MP Clean</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#514F49] md:text-lg">
          Veja as avaliações reais, fotos e experiências de clientes diretamente no perfil oficial
          da M&amp;P Clean no Google. Assim, você consulta sempre as informações mais atuais.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            icon: Star,
            title: "Experiências reais",
            text: "Comentários publicados por clientes no perfil oficial da empresa.",
          },
          {
            icon: MessageSquareQuote,
            title: "Mais transparência",
            text: "Você pode conferir o contexto, as fotos e outras informações no Google.",
          },
          {
            icon: ExternalLink,
            title: "Sempre atualizado",
            text: "Novas avaliações aparecem no perfil do Google sem depender de atualização manual no site.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="border border-[#D8D1C3] bg-[#FCFBF8] p-8 shadow-sm">
              <Icon className="h-8 w-8 text-[#B08A36]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#5E5B53]">{item.text}</p>
              <div className="mt-6 flex gap-1" aria-label="Avaliações no Google">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#C9A34E] text-[#C9A34E]" />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#1C1B18] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#B08A36] hover:text-black"
        >
          Ver avaliações no Google
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-[#B08A36] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6E531C] transition-colors hover:bg-[#B08A36] hover:text-black"
        >
          Deixar uma avaliação
        </a>
      </div>
    </div>
  </section>
);
