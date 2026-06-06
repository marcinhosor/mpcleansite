import { createFileRoute } from '@tanstack/react-router';
import { Impermeabilization } from '@/components/Impermeabilization';

export const Route = createFileRoute('/servicos/impermeabilizacao')({
  component: () => <Impermeabilization />,
});