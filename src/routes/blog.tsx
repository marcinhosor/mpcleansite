import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const posts = [
  {
    title: "Quanto custa higienizar um sofá de alto padrão?",
    excerpt: "Saiba por que investir em uma limpeza profissional premium protege seu patrimônio...",
    date: "Junho 2024",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Vale a pena impermeabilizar um sofá novo?",
    excerpt: "A proteção invisível que preserva a durabilidade e a beleza do seu estofado por anos.",
    date: "Maio 2024",
    image: "https://images.unsplash.com/photo-1549493597-1df9557f92e1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Como conservar um sofá de linho?",
    excerpt: "Dicas essenciais para manter a elegância do linho sem comprometer as fibras naturais.",
    date: "Abril 2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
  }
];

export const Route = createFileRoute('/blog')({
  component: () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <section className="container px-4 py-16">
          <h1 className="text-5xl font-serif mb-4 text-center">Blog MP Clean</h1>
          <p className="text-center text-gray-600 mb-16 uppercase tracking-widest text-sm">Cuidado, Saúde e Estilo de Vida</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <p className="text-xs text-[#C9A34E] font-bold mb-2 tracking-widest uppercase">{post.date}</p>
                <h2 className="text-2xl font-serif mb-4 group-hover:text-[#C9A34E] transition-colors">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-bold border-b border-[#C9A34E] pb-1 uppercase tracking-wider">Leia mais</span>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
});