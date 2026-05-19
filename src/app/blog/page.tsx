import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import Breadcrumb from "@/components/Breadcrumb"
import BlogCard from "@/components/BlogCard"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Conseils Humidité & Rénovation à Bruxelles | Traitement Humidité Bruxelles",
  description:
    "Conseils d'experts sur l'humidité, la rénovation et les aides financières à Bruxelles. Guides pratiques pour propriétaires et locataires en Région bruxelloise.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">
            Ressources & Guides
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Blog — Conseils &amp; Astuces Humidité
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Guides pratiques, conseils d&apos;experts et informations sur les aides
            financières disponibles en Région bruxelloise pour traiter l&apos;humidité
            et rénover votre logement.
          </p>
        </div>
      </section>

      {/* Liste articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-medium mb-2">
                Prochains articles bientôt disponibles
              </p>
              <p className="text-gray-400 text-sm">
                Revenez prochainement pour découvrir nos conseils d&apos;experts.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA — Vous avez un problème d'humidité ? */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Vous avez un problème d&apos;humidité ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts se déplacent gratuitement pour diagnostiquer votre situation
            et vous proposer la solution adaptée. Intervention possible sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              Appeler le 0489 57 65 65
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Formulaire de contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
