import { createFileRoute } from "@tanstack/react-router";
import { Corporate } from "@/components/Corporate";
import { BackToServices } from "@/components/BackToServices";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/atendimento-corporativo")({
  component: () => (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <main className="pt-24">
        <div className="container px-4 pt-8">
          <BackToServices />
        </div>
        <Corporate />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
