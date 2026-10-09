import { useEffect } from "react";

export const GoogleTag = () => {
  useEffect(() => {
    if (document.getElementById("google-ads-tag")) return;

    const script = document.createElement("script");
    script.id = "google-ads-tag";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-829588884";
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-829588884');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
};
