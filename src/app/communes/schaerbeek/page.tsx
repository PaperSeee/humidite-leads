import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Schaerbeek — Belle Époque & Caves | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Schaerbeek. Maisons Belle Époque, caves profondes, condensation immeubles. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/schaerbeek",
  },
};

const faqs = [
  {
    question: "Les maisons Belle Époque de Schaerbeek ont-elles des problèmes d'humidité spécifiques ?",
    answer: "Oui. Les maisons construites entre 1895 et 1914 ont des sous-sols semi-enterrés avec des caves voûtées en brique. Sans barrière étanche dans les fondations, l'humidité du sol remonte par capillarité dans les murs. Les décollements d'enduit et les taches sombres à la base des murs intérieurs sont les signes classiques de ce problème.",
  },
  {
    question: "La condensation dans les appartements de Schaerbeek — est-ce traitable ?",
    answer: "La condensation est fréquente dans les appartements schaerbeekois densément occupés, surtout en hiver. Elle se distingue des remontées capillaires par ses traces en hauteur (fenêtres, coins supérieurs) plutôt qu'à la base des murs. Le traitement combine amélioration de la ventilation et parfois isolation thermique des ponts froids. Un diagnostic permet de confirmer le type d'humidité.",
  },
  {
    question: "Intervenez-vous dans les immeubles à appartements de Schaerbeek ?",
    answer: "Oui, avec une coordination nécessaire avec le syndic pour les parties communes. Pour les appartements privés, nous intervenons sur accord du locataire ou du propriétaire. On fournit un rapport d'état complet pour le dossier de copropriété ou pour l'assurance.",
  },
];

export default function SchaerbeekPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Schaerbeek", href: "/communes/schaerbeek" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Schaerbeek" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Schaerbeek</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Schaerbeek</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Schaerbeek{" "}
              <span className="text-[#F97316]">— Belle Époque & Caves Profondes</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Schaerbeek et ses avenues Belle Époque concentrent un bâti historique
              remarquable avec des caves profondes souvent humides. Entre remontées
              capillaires dans les maisons de maître et condensation dans les
              appartements, chaque cas demande une expertise spécifique.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Schaerbeek : caves et condensation</h2>
              <p className="text-gray-600 mb-4">
                Schaerbeek abrite de somptueuses avenues Belle Époque — avenue Louis Bertrand,
                avenue Rogier — avec des maisons construites entre 1895 et 1914. Ces propriétés
                ont des <strong>sous-sols semi-enterrés</strong> avec caves voûtées dont les
                murs absorbent l&apos;humidité du sol par capillarité depuis leur construction.
              </p>
              <p className="text-gray-600 mb-4">
                Dans la partie plus résidentielle de Schaerbeek, les <strong>immeubles à
                appartements</strong> connaissent souvent des problèmes de condensation,
                surtout dans les appartements peu ventilés. Ce phénomène différent des
                remontées capillaires demande un diagnostic précis avant tout traitement.
              </p>
              <p className="text-gray-600">
                Notre équipe intervient sur les deux types de problèmes avec les méthodes
                adaptées : <strong>injection silicone</strong> pour les remontées capillaires
                et <strong>amélioration de la ventilation</strong> pour la condensation.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Schaerbeek</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires maisons Belle Époque",
                    "Caves voûtées humides avenue Rogier",
                    "Condensation appartements densément occupés",
                    "Infiltrations toitures ardoises vieillissantes",
                    "Salpêtre et efflorescences en cave",
                    "Taches noires (moisissures) coins intérieurs",
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
                <p className="text-sm text-gray-600">Toute la commune de Schaerbeek : avenues Belle Époque, quartier Helmet, Josaphat et zones résidentielles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Schaerbeek</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Schaerbeek</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Etterbeek", slug: "etterbeek" }, { name: "Evere", slug: "evere" }, { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode" }].map((c) => (
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
