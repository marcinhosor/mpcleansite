import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog')({
  component: () => (
    <div className="container px-4 py-32">
      <h1 className="text-4xl font-serif mb-12">Blog MP Clean</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <article className="space-y-4">
          <div className="bg-gray-200 aspect-video" />
          <h2 className="text-2xl font-serif">Quanto custa higienizar um sofá de alto padrão?</h2>
          <p className="text-gray-600">Descubra os fatores que influenciam no valor do serviço premium...</p>
        </article>
      </div>
    </div>
  ),
});