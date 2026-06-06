import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contato')({
  component: () => (
    <div className="container px-4 py-32 text-center">
      <h1 className="text-4xl font-serif mb-8">Entre em Contato</h1>
      <p className="text-xl mb-12">Estamos prontos para oferecer uma experiência de cuidado exclusiva.</p>
      <a 
        href="https://wa.me/5515988064494" 
        className="bg-[#C9A34E] text-black px-12 py-4 font-bold uppercase tracking-widest inline-block"
      >
        Falar no WhatsApp
      </a>
    </div>
  ),
});