import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const WhatsAppButton = () => {
  const handleClick = () => {
    reportWhatsAppConversion("Floating Button");
  };

  return (
    <a
      href={WHATSAPP_URL}
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
