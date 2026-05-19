import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Conseils Humidité & Rénovation à Bruxelles | Traitement Humidité Bruxelles",
  description:
    "Conseils d'experts sur l'humidité, la rénovation et les aides financières à Bruxelles. Guides pratiques pour propriétaires et locataires en Région bruxelloise.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/blog",
  },
};

const articles = [
  {
    slug: "humidite-hiver-bruxelles",
    titre: "Humidité en Hiver à Bruxelles : Causes, Risques et Solutions",
    description:
      "Pourquoi l'hiver amplifie les problèmes d'humidité à Bruxelles ? Condensation, infiltrations, remontées capillaires : comprendre et agir avant les dégâts.",
    date: "15 mai 2026",
    dateISO: "2026-05-15",
    duree: "8 min de lecture",
    categorie: "Guide pratique",
    categorieColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
    imageAlt: "Maison bruxelloise sous la pluie en hiver",
  },
];

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
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Blog — Conseils Humidité & Rénovation à Bruxelles
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <Link href={`/blog/${article.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${article.categorieColor}`}>
                      {article.categorie}
                    </span>
                  </div>
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="font-bold text-gray-900 text-lg mb-2 hover:text-[#F97316] transition-colors leading-snug">
                      {article.titre}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        <time dateTime={article.dateISO}>{article.date}</time>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.duree}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="flex items-center gap-1 text-[#F97316] font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Lire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Placeholder prochain article */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
              <p className="text-gray-400 text-sm font-medium mb-2">Prochain article</p>
              <p className="text-gray-500 text-sm">
                Bientôt disponible — Abonnez-vous pour être informé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Un problème d&apos;humidité dans votre logement ?
          </h2>
          <p className="text-gray-300 mb-8">
            Nos experts se déplacent gratuitement pour diagnostiquer votre situation
            et vous proposer la solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0451053370"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Appeler le 0451 05 33 70
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
  );
}
