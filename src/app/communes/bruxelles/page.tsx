import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Bruxelles-Ville — Pentagone & Laeken | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Bruxelles-Ville. Pentagone historique, immeubles Laeken, caves denses. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/bruxelles",
  },
};

const faqs = [
  {
    question: "Les immeubles du Pentagone ont-ils des problèmes d'humidité particuliers ?",
    answer: "Le centre historique de Bruxelles concentre des bâtiments anciens, parfois de plusieurs siècles, dont les fondations n'ont jamais été étanchéifiées. L'humidité du sol remonte dans les murs et les caves. La densité du bâti complique parfois l'accès, mais nos méthodes d'injection minimales d'invasion permettent d'intervenir sans travaux lourds.",
  },
  {
    question: "Le quartier de Laeken a-t-il des problèmes d'humidité spécifiques ?",
    answer: "Laeken présente deux réalités : les villas résidentielles avec jardins, où les problèmes viennent surtout des infiltrations de toiture ou des fondations, et les immeubles plus denses vers le canal. Pour les villas, on traite fréquemment les infiltrations latérales (murs enterrés côté jardin) et les remontées par dalle de sous-sol.",
  },
  {
    question: "Comment traiter l'humidité dans un bâtiment classé du Pentagone ?",
    answer: "Les bâtiments classés demandent des méthodes non invasives et réversibles. On privilégie l'injection silicone avec des trous de petit diamètre (12mm) qui sont ensuite rebouchés à l'identique. Pour les façades classées, toute intervention visible nécessite une consultation préalable de Bruxelles Urbanisme que nous pouvons accompagner.",
  },
];

export default function BruxellesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Bruxelles-Ville", href: "/communes/bruxelles" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Bruxelles-Ville" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Bruxelles-Ville</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Bruxelles-Ville</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Bruxelles-Ville{" "}
              <span className="text-[#F97316]">— Pentagone, Laeken & Extensions</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              La commune de Bruxelles-Ville couvre un territoire vaste avec des réalités
              très différentes : le centre historique dense, le quartier résidentiel de Laeken,
              et les zones nord vers Neder-Over-Heembeek. Chaque secteur a ses propres
              problématiques d&apos;humidité.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité dans la plus grande commune de Bruxelles</h2>
              <p className="text-gray-600 mb-4">
                Le <strong>Pentagone</strong> — le centre médiéval de Bruxelles — abrite
                des bâtiments pluricentenaires dont les fondations n&apos;ont jamais connu de
                protection étanche. L&apos;humidité y est quasi universelle dans les caves et
                les rez-de-chaussée, aggravée par la nappe phréatique historiquement haute.
              </p>
              <p className="text-gray-600 mb-4">
                À <strong>Laeken</strong>, les villas résidentielles entourées de jardins
                ont des problèmes d&apos;infiltrations latérales dans les murs enterrés, surtout
                lorsque les drains périphériques sont colmatés. Les appartements des grandes
                avenues souffrent davantage de condensation.
              </p>
              <p className="text-gray-600">
                Vers <strong>Neder-Over-Heembeek et Haren</strong>, le bâti plus récent et
                moins dense a des problèmes de condensation liés aux changements thermiques
                entre logements mal isolés et extérieur.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Bruxelles-Ville</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires bâti historique Pentagone",
                    "Caves médiévales et fondations sans étanchéité",
                    "Infiltrations murs enterrés Laeken",
                    "Condensation appartements peu isolés",
                    "Humidité commerces rez-de-chaussée",
                    "Mérule bâtiments anciens non chauffés",
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
                <p className="text-sm text-gray-600">Toute la commune de Bruxelles-Ville : Pentagone, Laeken, Neder-Over-Heembeek, Haren et quartiers intermédiaires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Bruxelles-Ville</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Bruxelles-Ville</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }, { name: "Schaerbeek", slug: "schaerbeek" }, { name: "Anderlecht", slug: "anderlecht" }].map((c) => (
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
