import { createFileRoute } from '@tanstack/react-router';
import { Corporate } from '@/components/Corporate';

export const Route = createFileRoute('/atendimento-corporativo')({
  component: () => (
    <div className="pt-24 min-h-screen">
      <Corporate />
    </div>
  ),
});