import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/servicos")({
  component: () => (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1B18]">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});
