import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Anderlecht — Canal & Maisons Ouvrières | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Anderlecht. Canal de Charleroi, caves humides, remontées capillaires maisons ouvrières. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/anderlecht",
  },
};

const faqs = [
  {
    question: "Pourquoi les maisons près du canal d'Anderlecht sont-elles si humides ?",
    answer: "La nappe phréatique est particulièrement haute dans les zones proches du canal de Charleroi-Bruxelles. Cette humidité du sol remonte par capillarité dans les murs en brique des maisons ouvrières, dont les fondations n'ont souvent pas de barrière étanche. Un traitement par injection de résine silicone est la solution la plus efficace pour créer une barrière permanente contre les remontées.",
  },
  {
    question: "Nos caves à Anderlecht ont les murs qui suintent — est-ce dangereux ?",
    answer: "Des murs qui suintent indiquent une infiltration active. Ce n'est pas immédiatement structurellement dangereux, mais l'humidité permanente favorise le développement de moisissures et de salpêtre qui dégradent progressivement les maçonneries. Si vous observez aussi des efflorescences blanches (salpêtre), c'est un signe que l'eau circule activement dans les murs et qu'un traitement s'impose rapidement.",
  },
  {
    question: "Le traitement humidité est-il possible dans un bien en location ?",
    answer: "Oui, et c'est même souvent obligatoire si l'humidité rend le logement insalubre. En tant que propriétaire, vous avez l'obligation légale de fournir un logement salubre. Nous établissons un devis formel avec rapport d'état avant et après traitement, utile pour justifier l'intervention auprès de votre locataire et de votre assurance.",
  },
];

export default function AnderlechtPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Anderlecht", href: "/communes/anderlecht" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Anderlecht" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Anderlecht</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Anderlecht</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Anderlecht{" "}
              <span className="text-[#F97316]">— Canal & Remontées Capillaires</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Anderlecht et ses quartiers riverains du canal de Charleroi cumulent
              une nappe phréatique haute et des maisons ouvrières sans barrière
              étanche. Les remontées capillaires y sont particulièrement fréquentes
              et agressives. Diagnostic gratuit, intervention rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0489576565" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors">
                <Phone size={18} />0489 57 65 65
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-colors">
                Devis gratuit <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Anderlecht : le rôle du canal</h2>
              <p className="text-gray-600 mb-4">
                Le canal de Charleroi-Bruxelles longe Anderlecht sur plusieurs kilomètres.
                Dans son voisinage, la nappe phréatique est élevée et la saturation du sol
                en eau crée des conditions propices aux <strong>remontées capillaires</strong>
                dans les murs des maisons ouvrières des années 1900 à 1950.
              </p>
              <p className="text-gray-600 mb-4">
                Ces maisons en brique, construites sans rupture capillaire dans les fondations,
                absorbent l&apos;humidité du sol qui monte progressivement dans les murs.
                Les dégâts peuvent atteindre 1 à 2 mètres de hauteur et provoquer
                efflorescences, décollements d&apos;enduit et moisissures.
              </p>
              <p className="text-gray-600">
                La solution la plus durable est l&apos;<strong>injection de résine silicone</strong>
                dans la base des murs pour créer une barrière étanche permanente. Un traitement
                correctement effectué arrête définitivement les remontées sans nécessiter
                de travaux lourds.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Anderlecht</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires maisons canal",
                    "Caves inondées ou suintantes",
                    "Efflorescences et salpêtre sur briques",
                    "Moisissures rez-de-chaussée et caves",
                    "Infiltrations depuis cour intérieure",
                    "Condensation dans logements denses",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-[#F97316]" />
                  <span className="font-semibold text-gray-900 text-sm">Zone couverte</span>
                </div>
                <p className="text-sm text-gray-600">Toute la commune d&apos;Anderlecht : Cureghem, Neerpede, Scheut, centre historique et zones canal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Anderlecht</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Anderlecht</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }, { name: "Forest", slug: "forest" }, { name: "Saint-Gilles", slug: "saint-gilles" }].map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1E3A5F] hover:text-[#1E3A5F] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors">
                <MapPin size={12} className="text-[#F97316]" />{c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
