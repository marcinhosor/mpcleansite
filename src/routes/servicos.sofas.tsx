import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/servicos/sofas')({
  component: ServiceSofa,
});

function ServiceSofa() {
  return (
    <div className="container px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">Higienização de Sofás Premium</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="prose prose-lg">
          <p>
            O sofá é o protagonista da sua sala. Na MP Clean, tratamos cada peça como uma obra de arte, 
            utilizando técnicas que preservam as fibras e restauram o aspecto original do tecido.
          </p>
          <h3>Por que escolher nossa higienização?</h3>
          <ul>
            <li>Extração profunda de resíduos e microorganismos.</li>
            <li>Produtos biodegradáveis e seguros.</li>
            <li>Preservação de texturas e cores.</li>
          </ul>
        </div>
        <div className="bg-gray-100 aspect-video rounded-lg">
          {/* Imagem Placeholder */}
        </div>
      </div>
    </div>
  );
}