import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    // Tracking event example
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        'event_category': 'WhatsApp',
        'event_label': 'Floating Button'
      });
    }
  };

  return (
    <a
      href="https://wa.me/5515988064494?text=Olá%20MP%20Clean!%20Gostaria%20de%20uma%20avaliação%20especializada."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-10 right-10 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={30} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold py-2 px-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none uppercase tracking-widest">
        Avaliação Especializada
      </span>
    </a>
  );
};
