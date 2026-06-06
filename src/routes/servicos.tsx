import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const Route = createFileRoute('/servicos')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});