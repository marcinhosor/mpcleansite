export const WHATSAPP_URL =
  "https://wa.me/5515988064494?text=Ol%C3%A1%2C%20MP%20Clean!%20Quero%20solicitar%20um%20or%C3%A7amento.%20Vou%20enviar%20uma%20foto%20do%20estofado%20e%20informar%20minha%20cidade.%20Podem%20me%20orientar%3F";

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
