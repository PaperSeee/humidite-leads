import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Saint-Gilles — Maisons Art Nouveau & Caves Voûtées | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Saint-Gilles. Maisons de maître art nouveau, caves voûtées, humidité historique. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/saint-gilles",
  },
};

const faqs = [
  {
    question: "Les maisons art nouveau de Saint-Gilles sont-elles protégées ? Peut-on les traiter ?",
    answer: "Nombre de maisons art nouveau de Saint-Gilles sont classées ou font partie d'ensembles protégés. Cela ne vous empêche pas de traiter l'humidité, mais les méthodes d'intervention doivent être adaptées pour préserver les éléments patrimoniaux. Nous travaillons avec des techniques d'injection non invasives qui ne dégradent pas les façades en céramique ou les carrelages de style. Si votre bien est classé, nous pouvons vous accompagner dans les démarches auprès de Bruxelles Urbanisme.",
  },
  {
    question: "Les caves voûtées de Saint-Gilles sont-elles récupérables ?",
    answer: "Oui, même les caves voûtées les plus humides de Saint-Gilles peuvent être assainies. Le traitement comprend généralement un drainage, une injection dans les murs de fondation et une imperméabilisation intérieure par mortier drainant. Ces caves peuvent ensuite servir de cave à vin, de buanderie ou d'espace de stockage. Le délai de séchage varie de 3 à 9 mois selon le degré d'humidité initial.",
  },
  {
    question: "Comment identifier une humidité historique dans une maison art nouveau ?",
    answer: "L'humidité historique se reconnaît à plusieurs signes : des cernes d'humidité anciens sur les murs, des traces de traitements antérieurs (anciens produits bitumineux ou enduits étanches), des planchers en bois bombés ou désolidarisés. Un diagnostic humidimétrique professionnel avec mesure de l'humidité résiduelle dans les murs permet de quantifier l'ampleur et de dimensionner le traitement correctement.",
  },
];

export default function SaintGillesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Saint-Gilles", href: "/communes/saint-gilles" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Saint-Gilles" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Saint-Gilles</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Saint-Gilles</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Saint-Gilles{" "}
              <span className="text-[#F97316]">— Patrimoine Art Nouveau & Caves Voûtées</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Saint-Gilles abrite l&apos;une des plus belles concentrations de maisons
              art nouveau de Belgique. Ces joyaux architecturaux, avec leurs caves
              voûtées et leurs murs anciens, accumulent souvent une humidité
              historique qu&apos;il faut traiter avec des méthodes adaptées au patrimoine.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Saint-Gilles : caves art nouveau et remontées</h2>
              <p className="text-gray-600 mb-4">
                Les maisons de maître construites entre 1895 et 1910 autour du <strong>Parvis
                de Saint-Gilles</strong> et de la chaussée de Waterloo ont des sous-sols
                semi-enterrés avec caves voûtées en brique. Leurs fondations, sans aucune
                protection étanche, absorbent l&apos;humidité du sol depuis plus d&apos;un siècle.
              </p>
              <p className="text-gray-600 mb-4">
                La <strong>brique des caves voûtées</strong> est souvent saturée d&apos;humidité
                et couverte de salpêtre. Cette humidité historique n&apos;empêche pas de traiter :
                on calcine d&apos;abord les murs pour les assécher, puis on applique une résine
                d&apos;injection et enfin un enduit drainant qui laisse respirer la brique.
              </p>
              <p className="text-gray-600">
                Pour les biens <strong>classés ou à valeur patrimoniale</strong>, on adapte
                nos méthodes pour préserver les éléments décoratifs : carrelages de couloir,
                ferronneries, façades en céramique. Aucun élément d&apos;époque n&apos;est sacrifié.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Saint-Gilles</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires maisons de maître art nouveau",
                    "Caves voûtées humides et salpêtrées",
                    "Planchers bois décollés par humidité historique",
                    "Infiltrations depuis cour intérieure",
                    "Condensation appartements reconvertis",
                    "Moisissures enduits anciens dégradés",
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
                <p className="text-sm text-gray-600">Toute la commune de Saint-Gilles, Parvis, chaussée de Waterloo, rues résidentielles incluses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Saint-Gilles</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Saint-Gilles</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ixelles", slug: "ixelles" }, { name: "Forest", slug: "forest" }, { name: "Anderlecht", slug: "anderlecht" }].map((c) => (
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
