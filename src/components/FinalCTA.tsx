import { Button } from "@/components/ui/button";

export const FinalCTA = () => (
  <section className="py-24 bg-gray-50 border-t border-gray-100">
    <div className="container px-4 text-center">
      <h2 className="text-4xl font-serif mb-6 text-[#0A0A0A]">Solicite seu orçamento agora</h2>
      <p className="text-xl text-gray-600 mb-10">Receba atendimento rápido e personalizado pelo WhatsApp.</p>
      <Button 
        size="lg" 
        className="bg-[#C9A34E] hover:bg-[#b08e42] text-black font-bold text-xl px-12 py-8 uppercase tracking-widest"
        onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
      >
        Quero meu orçamento
      </Button>
    </div>
  </section>
);