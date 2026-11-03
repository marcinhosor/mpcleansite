const faqs = [
  {
    question: "Quanto tempo demora para o estofado secar após a higienização?",
    answer:
      "Graças ao nosso sistema de extração profissional e produtos de secagem otimizada, o tempo médio de secagem fica entre poucas horas, permitindo o uso rápido do móvel no mesmo dia.",
  },
  {
    question: "A impermeabilização (blindagem) altera o toque ou a cor do tecido?",
    answer:
      "Não. Nossa blindagem atua a nível molecular envolvendo as fibras, mantendo o toque macio original, a cor e a respirabilidade natural do estofado intactas.",
  },
  {
    question: "Os produtos utilizados são seguros para crianças e animais de estimação?",
    answer:
      "Sim. Utilizamos formulações biosustentáveis, antialérgicas e aprovadas pelos órgãos sanitários, seguras para a convivência com pets e crianças após a aplicação conforme orientação técnica.",
  },
  {
    question: "Vocês atendem em condomínios fechados e outras cidades da região?",
    answer:
      "Sim. Temos atendimento dedicado para residências, chácaras e condomínios em Sorocaba, Votorantim, Porto Feliz e Fazenda Boa Vista, com total discrição e horários agendados.",
  },
  {
    question: "Como funciona o orçamento e agendamento?",
    answer:
      "Basta nos enviar uma foto do estofado pelo WhatsApp informando a sua localização para receber uma avaliação técnica imediata e agendar a visita.",
  },
];

export const FAQ = () => (
  <section id="faq" className="bg-[#F8F7F3] py-28 text-[#0A0A0A]">
    <div className="container px-6 max-w-4xl">
      <div className="mb-14 max-w-2xl">
        <span className="mb-5 block text-xs font-sans uppercase tracking-[0.5em] text-[#9C7A2E]">
          Perguntas frequentes
        </span>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          Tudo o que você precisa saber antes de cuidar do seu estofado.
        </h2>
      </div>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-serif text-2xl marker:hidden">
              <span>{faq.question}</span>
              <span className="shrink-0 text-3xl font-light text-[#9C7A2E] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-3xl pt-5 font-sans text-base leading-relaxed text-black/65">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export { faqs };
