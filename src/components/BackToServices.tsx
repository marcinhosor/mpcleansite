import { ArrowLeft } from "lucide-react";

export const BackToServices = () => (
  <a
    href="/#servicos"
    className="mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#9C7A2E] transition-colors hover:text-[#0A0A0A]"
  >
    <ArrowLeft className="h-4 w-4" />
    Voltar para serviços
  </a>
);
