import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Infiltrations d'Eau Bruxelles — Toiture Façade Terrasse | Traitement Humidité Bruxelles",
  description:
    "Traitement des infiltrations d'eau à Bruxelles : toiture, façade, terrasse, fondations. Diagnostic thermographique, solutions durables. Appelez le 0489 57 65 65.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/services/infiltrations",
  },
};

const faqItems = [
  {
    question: "Comment savoir d'où vient une infiltration d'eau dans ma maison ?",
    answer:
      "Identifier la source d'une infiltration est souvent complexe car l'eau peut parcourir un long chemin avant d'apparaître là où vous la voyez. Un test visuel par temps de pluie, une thermographie infrarouge et une inspection complète de l'enveloppe du bâtiment (toiture, façade, terrasse, fondations) permettent de localiser le point d'entrée exact. Ne vous fiez pas uniquement à l'endroit où l'humidité est visible.",
  },
  {
    question: "L'injection polyuréthane est-elle une solution définitive pour les fissures ?",
    answer:
      "L'injection de résine polyuréthane (ou époxy pour les fissures structurelles) est une solution très efficace et durable pour colmater les fissures dans les fondations, les murs en béton et les caves. La résine polyuréthane réagit au contact de l'eau et gonfle pour remplir complètement la fissure, même active. La garantie est généralement de 10 ans.",
  },
  {
    question: "Mon assurance couvre-t-elle les infiltrations par toiture ?",
    answer:
      "Cela dépend de la cause et de votre contrat. Les infiltrations liées à une tempête (tuiles arrachées, souche de cheminée tombée) sont généralement couvertes par l'assurance incendie/tempête. Les infiltrations dues à un vieillissement normal ou à un manque d'entretien de la toiture sont rarement prises en charge. Un rapport d'expertise de notre part peut appuyer votre dossier.",
  },
  {
    question: "Quelle est la durée de vie d'une membrane d'étanchéité de terrasse ?",
    answer:
      "Une membrane d'étanchéité de terrasse a une durée de vie de 15 à 25 ans selon le type de matériau (EPDM, bitume modifié, résine liquide) et les conditions d'exposition. Les zones les plus fragiles sont les relevés (jonctions avec les murs) et les évacuations d'eau. Un contrôle annuel et un entretien préventif permettent d'allonger significativement la durée de vie.",
  },
  {
    question: "Peut-on traiter une infiltration en cave sans travaux extérieurs ?",
    answer:
      "Dans certains cas, oui. Le cuvelage intérieur (application d'un mortier hydrofuge ou d'une membrane étanche côté intérieur) permet de retenir l'eau sans intervenir sur l'extérieur. C'est la solution privilégiée quand l'accès à l'extérieur est impossible (voirie, voisins mitoyens). Elle ne supprime pas la pression de l'eau mais l'empêche de pénétrer à l'intérieur.",
  },
];

const typesInfiltration = [
  {
    titre: "Toiture",
    desc: "Ardoises fêlées ou manquantes, tuiles déplacées par le vent, faîtage dégradé, solins de cheminée décollés, noues bouchées, gouttières débordantes. Les toitures bruxelloises en ardoise naturelle nécessitent un entretien régulier tous les 10–15 ans.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    titre: "Façade",
    desc: "Joints de maçonnerie dégradés (rejointoiement nécessaire), briques poreuses ou gélives, fissures verticales ou horizontales en façade, appuis de fenêtres mal scellés, joints de dilatation défaillants entre deux corps de bâtiment.",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    titre: "Terrasse",
    desc: "Étanchéité vieillissante ou fissurée, relevés décollés des murs, joints de margelles fissurés, évacuations d'eau bouchées ou mal positionnées, pentes insuffisantes créant des stagnations d'eau qui dégradent l'étanchéité.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    titre: "Fondations",
    desc: "Pression hydrostatique sur les parois enterrées, absence de drainage périphérique, fissures dans les fondations en béton, joints de dilatation défaillants dans les caves, nappe phréatique haute en terrain argileux.",
    color: "bg-gray-50 border-gray-100",
  },
];

const autresServices = [
  { href: "/services/remontee-capillaire", label: "Remontée Capillaire" },
  { href: "/services/merule", label: "Traitement Mérule" },
  { href: "/services/condensation", label: "Humidité par Condensation" },
];

export default function InfiltrationsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Traitement Infiltrations d'Eau",
    description:
      "Diagnostic et traitement des infiltrations d'eau à Bruxelles : toiture, façade, terrasse, fondations. Thermographie infrarouge, injection polyuréthane, membrane étanchéité.",
    provider: {
      "@type": "LocalBusiness",
      name: "Traitement Humidité Bruxelles",
      telephone: "0489576565",
    },
    areaServed: "Bruxelles",
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
          { name: "Infiltrations", href: "/services/infiltrations" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/types-humidite" },
          { label: "Infiltrations" },
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

      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/types-humidite" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Infiltrations d&apos;eau</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Traitement des Infiltrations d&apos;Eau à Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mb-8">
            Toiture qui fuit, façade poreuse, terrasse qui s&apos;infiltre, cave humide
            après chaque pluie : nos experts localisent précisément la source
            d&apos;infiltration et appliquent une solution durable adaptée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              0489 57 65 65 — Diagnostic gratuit
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Demander un devis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — Types d'infiltrations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Types d&apos;infiltrations d&apos;eau
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Une infiltration d&apos;eau provient toujours d&apos;un défaut de l&apos;enveloppe du
              bâtiment — l&apos;ensemble des éléments qui séparent l&apos;intérieur de l&apos;extérieur.
              Ces défauts peuvent se situer à plusieurs endroits, et l&apos;eau suit souvent
              un chemin complexe avant d&apos;apparaître là où vous la remarquez.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {typesInfiltration.map((type) => (
                <div key={type.titre} className={`rounded-xl p-5 border ${type.color}`}>
                  <p className="font-bold text-gray-900 text-base mb-2">{type.titre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Diagnostic */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Notre diagnostic infiltration
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Identifier avec précision la source d&apos;une infiltration est la clé d&apos;un
              traitement efficace. Intervenir sans diagnostic complet revient à traiter
              les symptômes sans s&apos;attaquer à la cause, ce qui conduit systématiquement
              à la récidive. Nous utilisons plusieurs méthodes complémentaires :
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Test à l'eau / simulation de pluie",
                  desc: "Arrosage systématique de zones suspectes pour reproduire les conditions d'infiltration et localiser le point d'entrée. Méthode simple mais efficace pour les façades et les terrasses.",
                },
                {
                  titre: "Thermographie infrarouge",
                  desc: "La caméra thermique détecte les différences de température liées à la présence d'humidité dans les matériaux. Elle révèle des infiltrations invisibles à l'oeil nu dans les murs, les dalles et les toitures. Particulièrement efficace par temps froid.",
                },
                {
                  titre: "Inspection visuelle experte",
                  desc: "Examen complet de la toiture, des façades, des terrasses, des joints et des fissures par un technicien expérimenté. Connaissance des points faibles typiques des constructions bruxelloises des différentes époques.",
                },
                {
                  titre: "Sonde d'humidité et hygromètre",
                  desc: "Mesure du taux d'humidité dans les matériaux (mur, dalle, bois) pour évaluer l'étendue de la zone touchée et distinguer une infiltration active d'une humidité résiduelle ancienne.",
                },
              ].map((methode) => (
                <div key={methode.titre} className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3">
                  <CheckCircle size={18} className="text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{methode.titre}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{methode.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Solutions durables */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Nos solutions durables
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Selon la source et l&apos;importance de l&apos;infiltration, nous appliquons
              la solution technique la plus adaptée. Voici nos principales interventions :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Injection polyuréthane",
                  desc: "Injection de résine polyuréthane expansive dans les fissures et joints défaillants des fondations, murs en béton ou caves. La résine réagit au contact de l'humidité et gonfle pour colmater hermétiquement, même sous pression d'eau.",
                  application: "Fondations, caves, fissures actives",
                },
                {
                  titre: "Membrane d'étanchéité",
                  desc: "Pose ou réfection de membrane bitumineuse, EPDM ou résine liquide sur les toitures plates et terrasses. Traitement soigné des points singuliers (relevés, pénétrations, évacuations) qui sont les premiers à défaillir.",
                  application: "Toitures plates, terrasses",
                },
                {
                  titre: "Rejointoiement et hydrofugation",
                  desc: "Dépose des joints dégradés à la meuleuse et rejointoiement avec un mortier adapté aux maçonneries belges. Application d'un produit hydrofuge pénétrant sur la façade pour réduire son absorption d'eau sans empêcher la vapeur de s'échapper.",
                  application: "Façades en brique",
                },
                {
                  titre: "Cuvelage cave",
                  desc: "Application d'un mortier imperméable ou d'une membrane d'étanchéité côté intérieur des murs de cave pour retenir les infiltrations. Solution privilégiée quand l'intervention extérieure est impossible.",
                  application: "Caves, sous-sols",
                },
              ].map((sol) => (
                <div key={sol.titre} className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">{sol.titre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{sol.desc}</p>
                  <span className="text-xs bg-[#1E3A5F] text-white px-2 py-1 rounded-full">
                    {sol.application}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes — Infiltrations
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
              { slug: "anderlecht", name: "Anderlecht" },
              { slug: "auderghem", name: "Auderghem" },
              { slug: "berchem-sainte-agathe", name: "Berchem-Sainte-Agathe" },
              { slug: "bruxelles", name: "Bruxelles" },
              { slug: "etterbeek", name: "Etterbeek" },
              { slug: "evere", name: "Evere" },
              { slug: "forest", name: "Forest" },
              { slug: "ganshoren", name: "Ganshoren" },
              { slug: "ixelles", name: "Ixelles" },
              { slug: "jette", name: "Jette" },
              { slug: "koekelberg", name: "Koekelberg" },
              { slug: "molenbeek-saint-jean", name: "Molenbeek-Saint-Jean" },
              { slug: "saint-gilles", name: "Saint-Gilles" },
              { slug: "saint-josse-ten-noode", name: "Saint-Josse-ten-Noode" },
              { slug: "schaerbeek", name: "Schaerbeek" },
              { slug: "uccle", name: "Uccle" },
              { slug: "watermael-boitsfort", name: "Watermael-Boitsfort" },
              { slug: "woluwe-saint-lambert", name: "Woluwe-Saint-Lambert" },
              { slug: "woluwe-saint-pierre", name: "Woluwe-Saint-Pierre" },
            ].map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="bg-[#F8FAFC] hover:bg-[#1E3A5F] hover:text-white text-[#1E3A5F] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-gray-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Infiltration après chaque pluie ? Stoppons-la durablement.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Chaque épisode de pluie aggrave les dégâts. Notre diagnostic localise
            la source précise et nous proposons le traitement adapté — sans travaux
            inutiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              Appeler le 0489 57 65 65
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Formulaire de contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Demandez votre diagnostic gratuit
          </h2>
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <ContactForm defaultProblem="Infiltration d'eau" />
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
