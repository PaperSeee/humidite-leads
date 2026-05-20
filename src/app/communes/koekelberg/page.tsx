import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Koekelberg — Maisons 1910–1930 & Caves | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Koekelberg. Maisons mitoyennes 1910–1935, caves brique, remontées capillaires. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/koekelberg",
  },
};

const faqs = [
  {
    question: "Les maisons de Koekelberg des années 20 ont-elles des fondations sans protection ?",
    answer: "Oui, c'est quasi systématique pour les maisons construites avant 1950. Les fondations en brique ou en béton cyclopéen n'incluaient pas de membrane d'étanchéité. L'humidité du sol monte par capillarité dans les murs jusqu'à 1 mètre voire 1,5 mètre de hauteur. Le traitement par injection silicone créé une barrière étanche définitive dans l'épaisseur du mur.",
  },
  {
    question: "Nos cours intérieures à Koekelberg sont-elles une source d'humidité ?",
    answer: "Fréquemment, oui. Les cours intérieures mal drainées concentrent l'eau de pluie contre les murs de caves et de rez-de-chaussée. Si votre cour est légèrement en pente vers la maison plutôt que vers l'extérieur, ou si les caniveaux sont bouchés, l'eau s'infiltre directement dans les fondations. Un regrading de la cour ou un drain périphérique résout ce problème.",
  },
  {
    question: "L'humidité affecte-t-elle la valeur de notre bien à Koekelberg ?",
    answer: "Oui, significativement. Un rapport humidité non traité lors d'une vente immobilière peut faire baisser le prix de 5 à 15%. À l'inverse, un bien dont l'humidité a été traitée avec garantie décennale présente un argument de vente fort. On fournit un certificat de traitement et la garantie fabricant sur les produits d'injection.",
  },
];

export default function KoekelbergPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Koekelberg", href: "/communes/koekelberg" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Koekelberg" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Koekelberg</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Koekelberg</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Koekelberg{" "}
              <span className="text-[#F97316]">— Bâti 1910–1935 & Caves Brique</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Koekelberg et ses maisons mitoyennes des années 1910 à 1935 ont des fondations
              en brique sans aucune barrière étanche. Les remontées capillaires sont le
              problème d&apos;humidité le plus fréquent dans la commune — et le plus traitable.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Koekelberg : fondations sans protection</h2>
              <p className="text-gray-600 mb-4">
                Le bâti de Koekelberg, construit entre 1910 et 1935, est typique de l&apos;architecture
                populaire bruxelloise de l&apos;entre-deux-guerres. Ces <strong>maisons mitoyennes
                en brique</strong> ont des sous-sols partiellement enterrés dont les murs
                n&apos;ont jamais reçu de traitement hydrofuge.
              </p>
              <p className="text-gray-600 mb-4">
                L&apos;humidité du sol remonte par capillarité dans les murs de fondation et
                continue jusqu&apos;au rez-de-chaussée. Les signes classiques : <strong>salpêtre</strong>
                (efflorescences blanches cristallisées), décollements de peinture à la base
                des murs, taches sombres humides en hiver.
              </p>
              <p className="text-gray-600">
                Le traitement par injection de résine silicone dans les murs crée une
                <strong> barrière chimique permanente</strong> qui arrête les remontées.
                Intervention propre, sans travaux lourds, efficace en quelques jours.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Koekelberg</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires maisons mitoyennes",
                    "Salpêtre et efflorescences murs cave",
                    "Décollements peinture base rez-de-chaussée",
                    "Cours intérieures mal drainées",
                    "Infiltrations toiture ardoise ancienne",
                    "Condensation appartements peu ventilés",
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
                <p className="text-sm text-gray-600">Toute la commune de Koekelberg, avenue de la Basilique et rues résidentielles incluses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Koekelberg</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Koekelberg</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ganshoren", slug: "ganshoren" }, { name: "Jette", slug: "jette" }, { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }].map((c) => (
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
