import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Info } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tarifs Traitement Humidité Bruxelles — Devis Gratuit | Traitement Humidité Bruxelles",
  description:
    "Tarifs indicatifs traitement humidité à Bruxelles. Remontée capillaire 80–150€/ml, mérule 25–45€/m². Diagnostic gratuit, devis détaillé sans engagement. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/tarifs",
  },
};

const pricingData = [
  {
    service: "Diagnostic complet",
    price: "GRATUIT",
    detail: "Visite sur site, mesure d'humidité, rapport écrit",
    highlight: true,
  },
  {
    service: "Injection de résine silicone (remontée capillaire)",
    price: "60 – 120 € / ml",
    detail: "Injection horizontale dans les joints de maçonnerie, barrière chimique permanente",
    highlight: false,
  },
  {
    service: "Traitement complet remontée capillaire",
    price: "80 – 150 € / ml",
    detail: "Injection + réfection d'enduit + traitement salpêtre inclus",
    highlight: false,
  },
  {
    service: "Traitement mérule",
    price: "25 – 45 € / m²",
    detail: "Dépose bois contaminés, fongicide professionnel, traitement préventif",
    highlight: false,
  },
  {
    service: "Assèchement de cave / sous-sol",
    price: "Devis sur mesure",
    detail: "Selon surface, état des murs et type de sol — généralement 800 à 3.500€",
    highlight: false,
  },
  {
    service: "Drainage périphérique",
    price: "Devis sur mesure",
    detail: "Installation d'un drain autour des fondations — selon périmètre de la maison",
    highlight: false,
  },
  {
    service: "Traitement condensation (VMC simple flux)",
    price: "800 – 1.800 €",
    detail: "Fourniture et pose d'une VMC simple flux hygroréglable",
    highlight: false,
  },
  {
    service: "Hydrofugation de façade",
    price: "8 – 18 € / m²",
    detail: "Nettoyage + application d'hydrofuge pénétrant, protection 5–10 ans",
    highlight: false,
  },
  {
    service: "Traitement anti-algues et mousses",
    price: "6 – 12 € / m²",
    detail: "Nettoyage haute pression + traitement biocide + hydrofuge",
    highlight: false,
  },
  {
    service: "Rapport technique (assureur/notaire)",
    price: "150 – 300 €",
    detail: "Rapport détaillé avec photos, mesures et préconisations pour tiers",
    highlight: false,
  },
];

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Tarifs", href: "/tarifs" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Tarifs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Tarifs Traitement Humidité Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Tarifs indicatifs de nos prestations. Chaque situation est unique —
            votre devis personnalisé sera gratuit, détaillé et sans engagement.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Info size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Important :</strong> Ces tarifs sont indicatifs et donnés à titre
              orientatif. Le coût réel dépend de nombreux facteurs : surface à traiter,
              épaisseur des murs, type de matériaux, accessibilité, ampleur du problème.
              Seul un diagnostic sur site permet d&apos;établir un devis précis. Notre diagnostic
              est <strong>entièrement gratuit</strong>.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="bg-[#1E3A5F] text-white px-6 py-4 grid grid-cols-3 gap-4 font-semibold text-sm">
              <div className="col-span-2">Prestation</div>
              <div className="text-right">Tarif indicatif</div>
            </div>
            {pricingData.map((item, index) => (
              <div
                key={index}
                className={`px-6 py-4 grid grid-cols-3 gap-4 border-b border-gray-100 last:border-0 ${
                  item.highlight ? "bg-green-50" : index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="col-span-2">
                  <p className={`font-semibold text-sm ${item.highlight ? "text-green-700" : "text-gray-900"}`}>
                    {item.service}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                </div>
                <div className="text-right">
                  <span className={`font-bold text-sm ${item.highlight ? "text-green-700 text-base" : "text-[#1E3A5F]"}`}>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            * TVA belge en vigueur applicable selon le type de travaux et l&apos;âge du bien.
            Taux réduit de 6% possible pour biens de plus de 10 ans.
          </p>
        </div>
      </section>

      {/* Facteurs qui influencent le prix */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Facteurs qui influencent le coût
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                factor: "Surface et longueur à traiter",
                desc: "Plus les murs à traiter sont longs ou étendus, plus le coût sera élevé mais le prix unitaire peut baisser.",
              },
              {
                factor: "Épaisseur des murs",
                desc: "Les murs épais des constructions anciennes (40–80 cm) nécessitent plus de produit et de temps que les murs modernes.",
              },
              {
                factor: "Type de matériaux",
                desc: "La brique, la pierre bleue et le béton ne réagissent pas de la même façon aux traitements. L'évaluation est essentielle.",
              },
              {
                factor: "Accessibilité",
                desc: "Un sous-sol accessible facilement réduira le temps d'intervention. Les espaces confinés ou difficiles d'accès augmentent les coûts.",
              },
              {
                factor: "Ampleur des dégâts",
                desc: "Un problème détecté tôt coûte moins cher à traiter. La mérule ancienne avec bois très dégradés nécessite plus de travaux de dépose.",
              },
              {
                factor: "Réfection des finitions",
                desc: "Le coût du traitement peut être augmenté si vous souhaitez inclure la réfection des enduits et la peinture après séchage.",
              },
            ].map((item) => (
              <div key={item.factor} className="bg-[#F8FAFC] rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  {item.factor}
                </p>
                <p className="text-gray-600 text-xs leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TVA et subventions */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">TVA réduite et aides en Belgique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">TVA à 6% pour les travaux</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                En Belgique, les travaux de rénovation dans un logement privé de
                plus de 10 ans bénéficient d&apos;un taux de TVA réduit à 6% (au lieu
                de 21%). Les traitements d&apos;humidité entrent généralement dans cette
                catégorie. Demandez à votre entrepreneur une attestation de travaux
                pour en bénéficier.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Primes Bruxelles Environnement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Certains travaux d&apos;amélioration de l&apos;isolation et de la ventilation
                peuvent être éligibles aux primes Rénolution de la Région bruxelloise.
                Nous pouvons vous conseiller sur les primes disponibles lors de
                notre diagnostic et vous fournir les documents nécessaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Obtenez votre devis gratuit</h2>
              <p className="text-gray-300 mb-6">
                Chaque situation est unique. Contactez-nous pour un diagnostic
                complet sur site et un devis personnalisé, détaillé et transparent.
                Aucun frais de déplacement, aucun engagement.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Diagnostic gratuit sur site sous 48h",
                  "Devis détaillé remis par écrit",
                  "Pas de frais cachés sur la facture finale",
                  "TVA à 6% sur les travaux éligibles",
                  "Garantie 10 ans sur les travaux",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#F97316]" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold text-lg">
                <Phone size={20} />0489 57 65 65
              </a>
              <p className="text-gray-400 text-xs mt-1">Lun–Ven 8h–18h | Sam 9h–15h</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demander un devis gratuit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
