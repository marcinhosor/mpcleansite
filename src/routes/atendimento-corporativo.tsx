import { createFileRoute } from "@tanstack/react-router";
import { Corporate } from "@/components/Corporate";
import { BackToServices } from "@/components/BackToServices";

export const Route = createFileRoute("/atendimento-corporativo")({
  component: () => (
    <div className="pt-24 min-h-screen">
      <div className="container px-4 pt-8">
        <BackToServices />
      </div>
      <Corporate />
    </div>
  ),
});
