import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Mérule Bruxelles — Champignon Urgence | Traitement Humidité Bruxelles",
  description:
    "Traitement d'urgence mérule à Bruxelles. Diagnostic, fongicide professionnel, rapport pour notaire. La mérule détruit votre structure : appelez le 0489 57 65 65 maintenant.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/services/merule",
  },
};

const faqItems = [
  {
    question: "La mérule bloque-t-elle la vente d'un bien immobilier en Belgique ?",
    answer:
      "En Belgique, la présence de mérule doit être déclarée lors d'une transaction immobilière. La dissimuler constitue un vice caché engageant la responsabilité du vendeur. Un rapport de traitement professionnel avec attestation d'intervention permet de rassurer les acheteurs et de débloquer la vente. Nous fournissons ce document officiel après chaque intervention.",
  },
  {
    question: "Mon assurance habitation couvre-t-elle le traitement de la mérule ?",
    answer:
      "Dans la majorité des cas, les assurances habitation belges ne couvrent pas le traitement de la mérule, car elle est considérée comme un défaut d'entretien ou un sinistre progressif. Cependant, si la mérule est la conséquence directe d'un dégât des eaux couvert (rupture de canalisation, infiltration soudaine), une partie des coûts peut être prise en charge. Vérifiez votre contrat et contactez votre assureur.",
  },
  {
    question: "La mérule peut-elle se propager à mes voisins ?",
    answer:
      "Oui, c'est l'un des dangers les plus méconnus de la mérule. Le champignon peut traverser les murs mitoyens en maçonnerie et ses spores se propagent par l'air. En Belgique, si vous découvrez de la mérule dans un immeuble à appartements ou une maison mitoyenne, vous avez une obligation morale — et potentiellement légale — d'en informer vos voisins et votre copropriété.",
  },
  {
    question: "Combien de temps dure un traitement de mérule ?",
    answer:
      "Le traitement lui-même dure généralement 1 à 3 jours selon l'étendue de la contamination. La dépose des bois contaminés, l'application du fongicide et le traitement des maçonneries adjacentes nécessitent souvent de libérer l'accès aux zones concernées. Un délai de séchage de 48 à 72h est ensuite nécessaire avant la remise en état.",
  },
  {
    question: "Comment éviter que la mérule ne revienne après traitement ?",
    answer:
      "La mérule se développe uniquement en présence d'humidité (taux supérieur à 20% dans le bois). Pour éviter toute récidive, il est indispensable de traiter la source d'humidité qui a permis son développement : remontée capillaire, infiltration, ventilation insuffisante. Notre protocole inclut systématiquement le diagnostic et la correction de cette source.",
  },
];

const autresServices = [
  { href: "/services/remontee-capillaire", label: "Remontée Capillaire" },
  { href: "/services/condensation", label: "Humidité par Condensation" },
  { href: "/services/infiltrations", label: "Infiltrations d'Eau" },
];

export default function MerulePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Traitement Mérule",
    description:
      "Traitement d'urgence de la mérule (Serpula lacrymans) à Bruxelles. Diagnostic, dépose des bois contaminés, fongicide professionnel, rapport final pour notaire.",
    provider: {
      "@type": "LocalBusiness",
      name: "Traitement Humidité Bruxelles",
      telephone: "0489576565",
    },
    areaServed: "Bruxelles",
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "25-45",
        priceCurrency: "EUR",
        unitText: "par m²",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/types-humidite" },
          { name: "Mérule", href: "/services/merule" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/types-humidite" },
          { label: "Mérule" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — urgence */}
      <section className="bg-red-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/types-humidite" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-red-200">Mérule</span>
          </div>
          <div className="flex items-start gap-3 bg-red-800 border border-red-600 rounded-xl p-4 mb-6 max-w-2xl">
            <AlertTriangle size={24} className="text-yellow-300 flex-shrink-0 mt-0.5" />
            <p className="text-red-100 font-semibold">
              URGENCE — La mérule peut détruire la structure en bois de votre
              habitation en quelques mois. N&apos;attendez pas pour agir.
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Traitement de la Mérule à Bruxelles — Intervention d&apos;Urgence
          </h1>
          <p className="text-red-100 text-lg max-w-3xl mb-8">
            La mérule (Serpula lacrymans) est le champignon lignivore le plus
            dévastateur. Nos experts interviennent en urgence avec un protocole
            professionnel complet et un rapport officiel pour votre notaire ou assureur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              URGENCE — 0489 57 65 65
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-red-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Demande urgente en ligne <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — Un champignon dévastateur */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              La mérule : un champignon dévastateur
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              La mérule (Serpula lacrymans) est un champignon lignivore — c&apos;est-à-dire
              qu&apos;il se nourrit du bois — considéré comme l&apos;un des plus destructeurs au
              monde pour le bâti. Il appartient à la catégorie des champignons de
              pourriture cubique brune : il dégrade la cellulose du bois, le rendant sec,
              brun foncé et s&apos;effritant en cubes caractéristiques — comme du café moulu.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ce qui rend la mérule particulièrement redoutable, c&apos;est sa vitesse de
              propagation et sa capacité à se développer dans l&apos;obscurité et les espaces
              confinés : sous les parquets, dans les murs creux, sous les escaliers, dans
              les caves et les vides sanitaires. En quelques mois seulement, elle peut
              rendre des poutraisons, des planchers et des charpentes totalement hors
              d&apos;usage. Une structure en bois saine peut être entièrement détruite en
              moins d&apos;un an.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Autre particularité alarmante : la mérule peut traverser la maçonnerie
              en pierre ou en brique pour atteindre des éléments en bois situés dans
              des pièces ou même des logements adjacents. Ses spores, invisibles à
              l&apos;oeil nu, se propagent par l&apos;air et peuvent contaminer l&apos;ensemble d&apos;un
              immeuble ou les habitations voisines.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 mb-1">Obligation légale en Belgique</p>
                  <p className="text-red-700 text-sm leading-relaxed">
                    En Belgique, la présence de mérule doit être déclarée lors de toute
                    transaction immobilière. La dissimuler constitue un vice caché
                    engageant la responsabilité civile et pénale du vendeur. Un
                    traitement professionnel documenté est indispensable avant toute vente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Identification */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Comment identifier la mérule ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La mérule se développe souvent dans des endroits invisibles au quotidien.
              Voici les signes qui doivent vous alerter et vous inciter à faire appel
              à un expert sans délai :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Filaments blancs cotonneux",
                  desc: "Un mycélium blanc, cotonneux ou grisâtre, ressemblant à du coton ou à de la laine de verre, se développe sur les surfaces en bois, les murs et sous les revêtements de sol.",
                },
                {
                  titre: "Odeur de champignon forte",
                  desc: "Une odeur intense de champignon de cave, terreuse et âcre, persistante même après aération. Elle est souvent le premier signe perceptible avant même la détection visuelle.",
                },
                {
                  titre: "Bois qui s'effrite",
                  desc: "Le bois atteint se fragmente en petits cubes bruns caractéristiques. Il sonne creux quand on frappe dessus et s'écrase facilement sous la pression des doigts.",
                },
                {
                  titre: "Taches brunes sur le bois",
                  desc: "Des taches brun foncé apparaissent sur les planches, poutres et lambourdes. Le bois perd sa résistance mécanique bien avant que la dégradation soit visible à l'oeil nu.",
                },
                {
                  titre: "Fructifications orange/rouille",
                  desc: "À un stade avancé, le champignon produit des fructifications plates de couleur orange à rouille avec les bords blancs. C'est à ce stade que les spores se disséminent massivement.",
                },
                {
                  titre: "Parquet ou plancher mou",
                  desc: "Un plancher en bois qui s'enfonce légèrement quand on marche dessus, des lames qui sonnent creux ou des marches d'escalier devenues spongieuses sont des signaux d'alarme.",
                },
              ].map((item) => (
                <div key={item.titre} className="bg-white rounded-xl p-4 border border-red-100">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.titre}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Protocole d'intervention */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Notre protocole d&apos;intervention
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le traitement de la mérule ne souffre aucune approximation. Notre
              protocole est rigoureux, documenté et conforme aux meilleures pratiques
              professionnelles belges et européennes.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  titre: "Diagnostic et bilan d'étendue",
                  desc: "Inspection complète de toutes les zones accessibles et cachées — sondage des planchers, des murs creux, des gîtes et poutres. Utilisation d'une sonde d'humidité et d'une caméra endoscopique pour évaluer précisément l'étendue de la contamination. Sans bilan complet, on risque de traiter trop court et de voir le champignon réapparaître.",
                },
                {
                  num: "2",
                  titre: "Dépose des éléments contaminés",
                  desc: "Tous les bois atteints — planches, lambourdes, poutres, boiseries — sont déposés et évacués conformément aux normes sanitaires. Les bois sont emballés avant leur sortie du chantier pour éviter toute dissémination de spores dans l'habitation.",
                },
                {
                  num: "3",
                  titre: "Traitement fongicide biocide professionnel",
                  desc: "Application d'un fongicide professionnel biocide agréé sur toutes les surfaces : maçonneries, bois sains adjacents aux zones contaminées, sol. Le produit pénètre en profondeur pour neutraliser le mycélium, même invisible. Deux passages sont parfois nécessaires pour les contaminations importantes.",
                },
                {
                  num: "4",
                  titre: "Traitement de la source d'humidité",
                  desc: "La mérule ne se développe que dans des conditions d'humidité élevée. Sans supprimer la cause — remontée capillaire, infiltration, défaut de ventilation — le champignon reviendra inévitablement. Cette étape est incluse dans notre protocole.",
                },
                {
                  num: "5",
                  titre: "Rapport final pour notaire et assureur",
                  desc: "À l'issue de l'intervention, nous rédigeons un rapport technique complet mentionnant l'étendue de la contamination, les zones traitées, les produits utilisés et les recommandations. Ce document est indispensable pour toute transaction immobilière ou déclaration à l'assureur.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 bg-red-50 rounded-xl p-4">
                  <span className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{step.titre}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Pourquoi agir vite */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi agir vite ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  titre: "Propagation rapide",
                  desc: "La mérule peut progresser de 5 à 10 cm par semaine dans des conditions favorables. Un plancher sain peut être entièrement dégradé en 6 à 12 mois.",
                  icon: <AlertTriangle size={24} className="text-red-500" />,
                },
                {
                  titre: "Impact sur la valeur immobilière",
                  desc: "La présence de mérule non traitée peut réduire drastiquement la valeur d'un bien et bloquer toute vente, refinancement ou succession.",
                  icon: <AlertTriangle size={24} className="text-orange-500" />,
                },
                {
                  titre: "Obligation légale",
                  desc: "En Belgique, la mérule doit être déclarée lors d'une vente. Un traitement non documenté n'a aucune valeur légale aux yeux d'un notaire ou d'un tribunal.",
                  icon: <AlertTriangle size={24} className="text-yellow-600" />,
                },
              ].map((item) => (
                <div key={item.titre} className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="mb-3">{item.icon}</div>
                  <p className="font-semibold text-gray-900 mb-2">{item.titre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Tarifs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Tarifs indicatifs
            </h2>
            <div className="bg-[#F8FAFC] rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-gray-900">Traitement mérule</p>
                <p className="text-2xl font-bold text-red-700">25 – 45 €/m²</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tarif indicatif selon l&apos;étendue de la contamination, l&apos;accessibilité
                des zones et les travaux de dépose nécessaires. Devis urgent possible
                sous 24h. Le rapport final pour notaire est inclus dans le tarif.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0489576565"
                className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} />
                URGENCE — 0489 57 65 65
              </a>
              <Link
                href="/tarifs"
                className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Voir tous les tarifs <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes — Mérule
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="bg-white rounded-xl border border-gray-100 group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 list-none">
                    {item.question}
                    <span className="text-[#F97316] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1E3A5F] mb-4">Zones d&apos;intervention à Bruxelles</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "uccle", name: "Uccle" },
              { slug: "ixelles", name: "Ixelles" },
              { slug: "woluwe-saint-pierre", name: "Woluwe-Saint-Pierre" },
              { slug: "woluwe-saint-lambert", name: "Woluwe-Saint-Lambert" },
              { slug: "auderghem", name: "Auderghem" },
              { slug: "watermael-boitsfort", name: "Watermael-Boitsfort" },
              { slug: "etterbeek", name: "Etterbeek" },
              { slug: "forest", name: "Forest" },
              { slug: "saint-gilles", name: "Saint-Gilles" },
            ].map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="bg-[#F8FAFC] hover:bg-[#1E3A5F] hover:text-white text-[#1E3A5F] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-gray-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA urgence */}
      <section className="py-14 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle size={40} className="text-yellow-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Suspicion de mérule ? N&apos;attendez pas.
          </h2>
          <p className="text-red-200 mb-8 max-w-2xl mx-auto">
            Chaque semaine de retard aggrave les dégâts et augmente le coût du
            traitement. Notre équipe se déplace en urgence pour un diagnostic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              Appeler maintenant — 0489 57 65 65
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-red-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Formulaire d&apos;urgence <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Demandez une intervention d&apos;urgence
          </h2>
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <ContactForm defaultProblem="Mérule (champignon)" />
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="py-12 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Nos autres services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {autresServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#F97316] hover:text-[#F97316] text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
              >
                {service.label} <ArrowRight size={14} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#F97316] hover:text-[#F97316] text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Contact <ArrowRight size={14} />
            </Link>
            <Link
              href="/tarifs"
              className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#F97316] hover:text-[#F97316] text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Tarifs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
