export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string        // format "2026-05-15"
  dateLabel: string   // format "15 mai 2026"
  category: string    // ex: "Conseils", "Humidité", "Rénovation"
  readTime: string    // ex: "5 min"
  imageUrl: string
  imageAlt: string
  excerpt: string     // 2-3 phrases résumé
}

export const blogPosts: BlogPost[] = [
  {
    slug: "humidite-hiver-bruxelles",
    title: "Humidité en Hiver à Bruxelles : Causes, Risques et Solutions",
    description: "Pourquoi l'hiver amplifie les problèmes d'humidité à Bruxelles et comment y remédier durablement.",
    date: "2026-05-15",
    dateLabel: "15 mai 2026",
    category: "Conseils",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Maison bruxelloise sous la pluie en hiver",
    excerpt: "Le climat bruxellois, avec ses pluies fréquentes et ses hivers humides, met à rude épreuve les habitations. Découvrez pourquoi l'hiver aggrave les problèmes d'humidité et quelles solutions existent.",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
