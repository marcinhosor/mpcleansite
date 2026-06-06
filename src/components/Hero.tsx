import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>
    
    <div className="relative z-10 container px-4 text-center text-white">
      <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
        Higienização Premium para quem <br /> valoriza conforto, saúde e sofisticação.
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans text-gray-200">
        Removemos sujeiras profundas, ácaros, odores e microrganismos com tecnologia profissional e acabamento impecável.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-[#C9A34E] hover:bg-[#b08e42] text-black font-semibold text-lg px-8 py-6 uppercase tracking-wider rounded-none"
          onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
        >
          Solicitar Orçamento
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-transparent text-white border-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 uppercase tracking-wider rounded-none"
          onClick={() => window.open("https://wa.me/5515988064494", "_blank")}
        >
          Falar no WhatsApp
        </Button>
      </div>
    </div>
  </section>
);