export const WHATSAPP_URL =
  "https://wa.me/5515988064494?text=Olá%20MP%20Clean!%20Gostaria%20de%20uma%20avaliação%20especializada.";

export const reportWhatsAppConversion = (label: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-829588884/LIGXCMUJ6ZYdEJSLyosD",
  });

  window.gtag("event", "click", {
    event_category: "WhatsApp",
    event_label: label,
  });
};
