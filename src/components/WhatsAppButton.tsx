import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, reportWhatsAppConversion } from "@/lib/whatsapp";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => reportWhatsAppConversion("Botão fixo WhatsApp")}
    className="fixed bottom-3 left-3 right-3 z-[60] flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-extrabold text-[#12351F] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:bg-[#39E477] active:scale-[0.98] sm:bottom-6 sm:left-auto sm:right-6 sm:min-h-14 sm:w-auto sm:px-7"
    aria-label="Pedir orçamento pelo WhatsApp"
  >
    <MessageCircle size={23} className="shrink-0" />
    <span>Pedir orçamento pelo WhatsApp</span>
  </a>
);
