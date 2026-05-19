import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean // si true : card plus grande, image plus haute
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={`relative w-full ${featured ? "h-64" : "h-48"} overflow-hidden`}>
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes={featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        {/* Badge catégorie */}
        <div className="mb-3">
          <span className="inline-block bg-orange-100 text-[#F97316] text-xs font-semibold px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Titre */}
        <Link href={`/blog/${post.slug}`}>
          <h2
            className={`font-bold text-[#1E3A5F] hover:text-[#F97316] transition-colors leading-snug mb-2 ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Excerpt tronqué 2 lignes */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-[#F97316] font-semibold text-sm hover:gap-2 transition-all"
            aria-label={`Lire l'article : ${post.title}`}
          >
            Lire <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
