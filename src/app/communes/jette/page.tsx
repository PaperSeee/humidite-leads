import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Jette — Villas Résidentielles & Condensation | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Jette. Villas années 50–70, condensation, remontées capillaires. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/jette",
  },
};

const faqs = [
  {
    question: "Notre villa des années 60 à Jette a des moisissures dans les coins — pourquoi ?",
    answer: "Les moisissures dans les coins hauts des pièces sont typiques de la condensation. Dans les maisons des années 60, l'isolation thermique est insuffisante et les ponts froids (angles, jonctions mur-plafond) favorisent la condensation de la vapeur d'eau de l'air ambiant. La solution combine amélioration de la ventilation et éventuellement isolation des zones froides concernées.",
  },
  {
    question: "L'humidité de notre cave à Jette monte-t-elle dans les murs du rez-de-chaussée ?",
    answer: "C'est très probable si votre cave est humide et que les murs du rez-de-chaussée montrent des traces d'humidité à moins d'un mètre du sol. La remontée capillaire ne s'arrête pas à la dalle — elle continue dans les murs jusqu'à ce que l'évaporation équilibre la montée. Un traitement par injection dans les murs crée une barrière permanente.",
  },
  {
    question: "On rénove notre villa à Jette — faut-il traiter l'humidité avant ou après ?",
    answer: "Avant, impérativement. Traiter l'humidité après les finitions revient à recommencer les travaux de peinture et d'enduit dans les zones traitées. On recommande : 1) diagnostic humidité, 2) traitement si nécessaire, 3) séchage (3 à 6 mois), 4) finitions. Ce séquencement vous économise du temps et de l'argent.",
  },
];

export default function JettePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Jette", href: "/communes/jette" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Jette" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Jette</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Jette</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Jette{" "}
              <span className="text-[#F97316]">— Villas & Condensation Années 60</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Jette et ses villas quatre façades des années 50 à 70 présentent des
              problématiques d&apos;humidité liées à l&apos;isolation insuffisante de l&apos;époque.
              Condensation dans les angles, remontées en cave, infiltrations par dalle —
              on diagnostique et on traite précisément.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Jette : les villas des Trente Glorieuses</h2>
              <p className="text-gray-600 mb-4">
                Les villas jettoise construites dans les années 1950 à 1970 correspondent
                à une époque où l&apos;isolation thermique n&apos;était pas une priorité. Résultat :
                des <strong>ponts froids importants</strong> aux angles et jonctions, qui
                favorisent la condensation dès que la différence de température entre
                l&apos;intérieur et l&apos;extérieur est marquée.
              </p>
              <p className="text-gray-600 mb-4">
                Les caves de ces villas, souvent en béton ou en parpaings, présentent
                des <strong>infiltrations par la dalle</strong> ou les murs périphériques
                enterrés. L&apos;imperméabilisation intérieure par enduit drainant ou drain
                périphérique est la solution la plus efficace pour ces configurations.
              </p>
              <p className="text-gray-600">
                Pour les projets de <strong>rénovation thermique</strong> — de plus en plus
                fréquents à Jette — on recommande de traiter l&apos;humidité avant d&apos;isoler,
                pour éviter de piéger l&apos;humidité résiduelle sous la nouvelle isolation.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Jette</h3>
                <ul className="space-y-2">
                  {[
                    "Condensation angles villas mal isolées",
                    "Infiltrations dalle cave béton",
                    "Remontées capillaires parpaings",
                    "Moisissures salle de bain et cuisine",
                    "Humidité sous isolation rénovation",
                    "Ponts froids fenêtres et angles",
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
                <p className="text-sm text-gray-600">Toute la commune de Jette, quartiers des Quatre-Vents, Miroir, Karreveld inclus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Jette</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Jette</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ganshoren", slug: "ganshoren" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" }].map((c) => (
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
