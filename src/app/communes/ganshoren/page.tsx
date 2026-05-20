import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Ganshoren — Petite Commune Résidentielle | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Ganshoren. Villas années 50–60, condensation, remontées capillaires. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/ganshoren",
  },
};

const faqs = [
  {
    question: "Les petites maisons de Ganshoren ont-elles des problèmes d'humidité différents des grandes villas ?",
    answer: "Pas fondamentalement. Les mêmes mécanismes s'appliquent : remontées capillaires si les fondations n'ont pas de barrière étanche, condensation si l'isolation est insuffisante. La différence est souvent dans l'ampleur : une maison plus petite a généralement moins de surface de murs à traiter, ce qui rend l'intervention plus rapide et moins coûteuse.",
  },
  {
    question: "Notre cave à Ganshoren sent le moisi mais n'est pas visible humide — est-ce grave ?",
    answer: "Une odeur de moisi sans humidité visible est souvent due à une humidité résiduelle dans les matériaux poreux (brique, béton). L'humidimètre de contact permet de mesurer l'humidité réelle des murs et d'identifier si le problème est actif ou residuel. Un traitement préventif vaut mieux qu'attendre que les taches apparaissent.",
  },
  {
    question: "Peut-on avoir un devis gratuit à Ganshoren sans engagement ?",
    answer: "Oui, le diagnostic et le devis sont entièrement gratuits et sans engagement. Un technicien se déplace chez vous pour mesurer l'humidité des murs, identifier la source du problème et vous proposer un plan de traitement avec tarif détaillé. Vous décidez ensuite librement si vous souhaitez donner suite.",
  },
];

export default function GanshorenPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Ganshoren", href: "/communes/ganshoren" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Ganshoren" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Ganshoren</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Ganshoren</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Ganshoren{" "}
              <span className="text-[#F97316]">— Villas Résidentielles & Caves</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Ganshoren, la plus petite commune de Bruxelles, présente un tissu résidentiel
              homogène de villas des années 50 et 60. Condensation insuffisante, remontées
              capillaires discrètes — on détecte et traite avant que les dégâts ne s&apos;installent.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Ganshoren : un problème souvent discret</h2>
              <p className="text-gray-600 mb-4">
                Dans les villas résidentielles de Ganshoren, l&apos;humidité est souvent
                <strong> discrète mais présente</strong>. Les caves légèrement humides, les
                murs de sous-sol qui suintent à peine, les odeurs de renfermé — autant de
                signes que l&apos;humidité s&apos;installe progressivement sans déclencher d&apos;alarme.
              </p>
              <p className="text-gray-600 mb-4">
                Les maisons quatre façades avec sous-sol sont particulièrement exposées aux
                <strong> infiltrations latérales</strong> par les murs enterrés côté jardin.
                L&apos;humidité du sol traverse la maçonnerie non protégée et s&apos;accumule dans
                les murs et la dalle du sous-sol.
              </p>
              <p className="text-gray-600">
                Un diagnostic humidimétrique complet permet de mesurer précisément où le
                problème se situe et d&apos;adapter le traitement — qu&apos;il s&apos;agisse d&apos;injection,
                d&apos;imperméabilisation ou de drainage.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Ganshoren</h3>
                <ul className="space-y-2">
                  {[
                    "Infiltrations murs enterrés villas",
                    "Caves légèrement humides ou odorantes",
                    "Condensation fenêtres insuffisamment isolées",
                    "Remontées capillaires discrètes",
                    "Moisissures salle de bain mal ventilée",
                    "Humidité sous terrasse ou dalle jardin",
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
                <p className="text-sm text-gray-600">Toute la commune de Ganshoren. Délai d&apos;intervention rapide vu la taille de la commune.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Ganshoren</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Ganshoren</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Jette", slug: "jette" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" }].map((c) => (
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
