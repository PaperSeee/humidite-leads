import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Evere — Maisons Semi-Détachées & Condensation | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Evere. Maisons semi-détachées, caves humides, condensation. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/evere",
  },
};

const faqs = [
  {
    question: "Les maisons semi-détachées d'Evere ont-elles des problèmes d'humidité particuliers ?",
    answer: "Les maisons semi-détachées partagent un mur mitoyen qui peut être une source d'humidité si le voisin a un problème non traité. L'humidité migre à travers les murs non étanches d'un logement à l'autre. On diagnostique les deux côtés du mur mitoyen pour s'assurer d'identifier correctement la source et traiter là où le problème est actif.",
  },
  {
    question: "Notre appartement à Evere a des traces d'humidité sur un mur extérieur — d'où vient-elle ?",
    answer: "Les traces sur mur extérieur peuvent venir de trois sources : infiltration par la façade (joints de briques défaillants ou fissures), condensation intérieure contre le mur froid, ou remontée capillaire depuis les fondations. Un mesure humidimétrique par profil de hauteur permet de distinguer les trois : les remontées diminuent avec la hauteur, la condensation touche les zones froides, les infiltrations suivent les points d'entrée d'eau.",
  },
  {
    question: "Intervenez-vous dans les appartements des immeubles d'Evere ?",
    answer: "Oui, aussi bien dans les maisons individuelles que dans les appartements. Pour les parties communes d'un immeuble (caves, couloirs, façades), on coordonne avec le syndic. Pour les appartements privés, on intervient sur mandat du propriétaire ou du locataire avec accord du propriétaire.",
  },
];

export default function EverePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Evere", href: "/communes/evere" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Evere" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Evere</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Evere</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Evere{" "}
              <span className="text-[#F97316]">— Semi-Détachées & Condensation</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Evere et ses quartiers résidentiels présentent des problèmes d&apos;humidité
              variés : murs mitoyens, caves semi-enterrées, condensation dans les
              appartements. Un diagnostic précis avant tout traitement pour ne pas
              confondre les sources.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Evere : diagnostic avant traitement</h2>
              <p className="text-gray-600 mb-4">
                Evere présente un mix de maisons semi-détachées et d&apos;immeubles à appartements.
                Ces deux types de bâti ont des <strong>problématiques d&apos;humidité distinctes</strong>
                qui nécessitent un diagnostic différencié avant toute intervention.
              </p>
              <p className="text-gray-600 mb-4">
                Les maisons semi-détachées des années 50 à 70 souffrent souvent de
                <strong> remontées capillaires</strong> dans les murs de fondation et de
                <strong> condensation</strong> dans les pièces peu ventilées. Les murs mitoyens
                peuvent transmettre l&apos;humidité d&apos;un logement à l&apos;autre si le problème
                n&apos;est traité que d&apos;un côté.
              </p>
              <p className="text-gray-600">
                Dans les appartements, la <strong>condensation</strong> est le problème dominant.
                Elle se manifeste en hiver sur les murs froids et les fenêtres, favorisant
                les moisissures dans les coins. Une meilleure ventilation et l&apos;isolation
                des ponts froids sont les solutions prioritaires.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Evere</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires maisons semi-détachées",
                    "Humidité mur mitoyen partagé",
                    "Condensation appartements peu chauffés",
                    "Caves semi-enterrées humides",
                    "Moisissures salle de bain mal ventilée",
                    "Infiltrations façade briques joints défaillants",
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
                <p className="text-sm text-gray-600">Toute la commune d&apos;Evere, parc Walckiers, chaussée de Louvain et avenue de l&apos;Héliport inclus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Evere</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Evere</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Schaerbeek", slug: "schaerbeek" }, { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" }, { name: "Bruxelles-Ville", slug: "bruxelles" }].map((c) => (
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
