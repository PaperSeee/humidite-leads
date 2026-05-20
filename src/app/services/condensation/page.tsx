import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Condensation Bruxelles — VMC Isolation | Traitement Humidité Bruxelles",
  description:
    "Résoudre l'humidité par condensation à Bruxelles : VMC hygro-réglable, isolation, traitement ponts thermiques. Diagnostic gratuit, appelez le 0489 57 65 65.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/services/condensation",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre l'humidité de condensation et une infiltration ?",
    answer:
      "L'humidité de condensation apparaît principalement en hiver et dans les zones froides du logement : angles de plafond, coins de fenêtres, derrière les meubles contre les murs extérieurs. Elle ne dépend pas de la pluie et est causée par un excès de vapeur d'eau dans l'air intérieur. Les infiltrations, elles, apparaissent après des épisodes de pluie et à des endroits précis liés à un défaut de l'enveloppe du bâtiment.",
  },
  {
    question: "Une VMC suffit-elle à résoudre un problème de condensation ?",
    answer:
      "Dans la majorité des cas, oui. Une VMC hygro-réglable (double débit) est la solution la plus efficace contre la condensation car elle renouvelle l'air en continu et évacue la vapeur d'eau à la source. Cependant, si la condensation est liée à des ponts thermiques importants (murs non isolés, liaisons plancher-mur), une isolation complémentaire des parois froides est souvent nécessaire.",
  },
  {
    question: "Puis-je bénéficier de primes pour traiter la condensation à Bruxelles ?",
    answer:
      "Oui. Via le programme Rénolution de la Région de Bruxelles-Capitale, des primes sont disponibles pour l'isolation thermique (murs, toiture, planchers), qui réduit directement la condensation. L'installation d'une VMC peut également être éligible selon les conditions de votre logement. Nous pouvons vous orienter dans les démarches.",
  },
  {
    question: "Les moisissures dues à la condensation sont-elles dangereuses pour la santé ?",
    answer:
      "Oui, les moisissures noires (Aspergillus, Cladosporium, Stachybotrys) produisent des mycotoxines et des spores irritantes pour les voies respiratoires. Les personnes asthmatiques, allergiques et les enfants en bas âge sont particulièrement vulnérables. Un traitement curatif des zones touchées suivi d'une solution préventive durable est indispensable.",
  },
  {
    question: "Comment savoir si mon logement a un problème de pont thermique ?",
    answer:
      "Les ponts thermiques se reconnaissent à des zones particulièrement froides au toucher en hiver (angles, liaison plancher-mur, encadrements de fenêtres) et aux moisissures qui y apparaissent en priorité. Un diagnostic par thermographie infrarouge permet de les cartographier précisément et d'orienter les travaux d'isolation.",
  },
];

const autresServices = [
  { href: "/services/remontee-capillaire", label: "Remontée Capillaire" },
  { href: "/services/merule", label: "Traitement Mérule" },
  { href: "/services/infiltrations", label: "Infiltrations d'Eau" },
];

export default function CondensationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Traitement Humidité par Condensation",
    description:
      "Solutions contre l'humidité de condensation à Bruxelles : VMC hygro-réglable, isolation des parois froides, traitement des ponts thermiques. Diagnostic gratuit.",
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
          { name: "Condensation", href: "/services/condensation" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/types-humidite" },
          { label: "Condensation" },
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
            <span className="text-gray-300">Condensation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Résoudre l&apos;Humidité par Condensation à Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mb-8">
            Moisissures noires dans les angles, vitres qui pleurent, odeur de renfermé :
            la condensation est la cause d&apos;humidité la plus fréquente dans les logements
            belges. Des solutions durables existent — VMC, isolation, traitement des
            ponts thermiques.
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

      {/* Section 1 — Pourquoi la condensation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi la condensation apparaît-elle ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              La condensation se produit lorsque de l&apos;air chaud et chargé de vapeur
              d&apos;eau entre en contact avec une paroi dont la température est inférieure
              au &quot;point de rosée&quot; — la température en dessous de laquelle la vapeur
              d&apos;eau se transforme en eau liquide. L&apos;air ne peut plus retenir sa
              vapeur, qui se dépose alors sur la paroi froide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dans un logement bruxellois typique, plusieurs facteurs créent ces
              conditions défavorables simultanément :
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  titre: "Écart de température air/paroi",
                  desc: "En hiver à Bruxelles, l'air intérieur chauffé à 20°C contient beaucoup plus de vapeur d'eau que la paroi extérieure d'un mur non isolé (souvent à 8–12°C). La différence de température crée la condensation.",
                },
                {
                  titre: "Ponts thermiques",
                  desc: "Les liaisons entre dalles et murs, les encadrements métalliques de fenêtres et les angles de murs sont des zones où l'isolant est discontinu. La paroi y est plus froide et la condensation s'y concentre.",
                },
                {
                  titre: "Manque de ventilation",
                  desc: "Sans renouvellement d'air suffisant, la vapeur d'eau produite par les occupants (respiration, douches, cuisine) s'accumule. Un occupant produit en moyenne 2 à 4 litres de vapeur d'eau par jour.",
                },
                {
                  titre: "Activités génératrices d'humidité",
                  desc: "Cuisson sans hotte aspirante, douches sans extraction, linge séché à l'intérieur, plantes en grand nombre : autant de sources de vapeur d'eau qui saturent rapidement l'air d'un logement mal ventilé.",
                },
              ].map((item) => (
                <div key={item.titre} className="bg-[#F8FAFC] rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-2">{item.titre}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              En Belgique, le problème est accentué par le fait que de nombreux
              logements bruxellois — notamment les maisons de maître et les appartements
              des années 60–80 — ont été isolés partiellement (vitrages doubles sans
              ventilation adaptée), ce qui aggrave l&apos;accumulation de vapeur d&apos;eau
              à l&apos;intérieur.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Reconnaître la condensation */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Reconnaître la condensation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contrairement à la remontée capillaire ou aux infiltrations, la
              condensation se manifeste en hauteur et dans les zones froides du
              logement, pas en bas des murs. Voici les signes les plus typiques :
            </p>
            <div className="space-y-3">
              {[
                {
                  signe: "Moisissures noires dans les angles de plafond",
                  explication: "Les angles supérieurs des pièces sont les zones les plus froides (ponts thermiques à la liaison plancher-mur) et les moins ventilées. C'est là que la condensation s'installe en premier.",
                },
                {
                  signe: "Vitres qui 'pleurent' le matin",
                  explication: "La nuit, la temperature des vitrages chute fortement. L'air chaud intérieur, encore chargé en vapeur d'eau, condense sur le verre. De petites gouttes apparaissent et coulent sur le châssis.",
                },
                {
                  signe: "Odeur de renfermé persistante",
                  explication: "Une odeur de confinement qui persiste même après aération, surtout en hiver, indique que l'humidité relative de l'air dépasse régulièrement 70% — conditions idéales pour les moisissures.",
                },
                {
                  signe: "Taches noires derrière les meubles",
                  explication: "Les meubles placés contre les murs extérieurs empêchent la circulation d'air et créent une zone froide et stagnante. Les moisissures s'y développent en priorité.",
                },
                {
                  signe: "Joints de carrelage noircis (salle de bain, cuisine)",
                  explication: "Les pièces avec production importante de vapeur d'eau et ventilation insuffisante sont particulièrement exposées. Les joints absorbants deviennent de véritables réservoirs à moisissures.",
                },
              ].map((item) => (
                <div key={item.signe} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.signe}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.explication}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Nos solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Nos solutions contre la condensation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Il n&apos;existe pas une seule solution contre la condensation mais une
              combinaison de mesures adaptées à la configuration de votre logement.
              Voici nos principales interventions, de la plus curative à la plus
              préventive :
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "VMC hygro-réglable (solution principale)",
                  badge: "Recommandé",
                  badgeColor: "bg-teal-100 text-teal-700",
                  desc: "La Ventilation Mécanique Contrôlée hygro-réglable ajuste automatiquement le débit d'extraction selon le taux d'humidité de l'air. Elle évacue la vapeur d'eau à la source (salle de bain, cuisine, WC) et maintient un air sain en continu. C'est la solution la plus efficace et la plus durable contre la condensation.",
                },
                {
                  titre: "Isolation par l'intérieur des parois froides",
                  badge: "Curatif + préventif",
                  badgeColor: "bg-blue-100 text-blue-700",
                  desc: "Le doublage des murs extérieurs avec un isolant thermique (laine de roche, mousse polyuréthane projetée, panneau PIR) augmente la température de surface de la paroi au-dessus du point de rosée. La condensation ne peut plus se former. Solution permanente et éligible aux primes Rénolution.",
                },
                {
                  titre: "Traitement des ponts thermiques",
                  badge: "Ciblé",
                  badgeColor: "bg-indigo-100 text-indigo-700",
                  desc: "Identification par thermographie infrarouge des zones froides spécifiques (angles, liaisons plancher-mur, encadrements) et traitement ciblé par isolation locale. Plus économique qu'une isolation complète quand les ponts thermiques sont localisés.",
                },
                {
                  titre: "Peinture anti-humidité (solution temporaire)",
                  badge: "Temporaire",
                  badgeColor: "bg-gray-100 text-gray-600",
                  desc: "Les peintures anti-moisissures permettent de traiter les zones déjà touchées et de ralentir la réapparition des moisissures. Elles ne s'attaquent pas à la cause de la condensation et ne constituent pas une solution durable. Elles sont utiles en complément d'une intervention structurelle.",
                },
              ].map((solution) => (
                <div key={solution.titre} className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-gray-900">{solution.titre}</p>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${solution.badgeColor}`}>
                      {solution.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Réglementation belge */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Aides financières et réglementation belge
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              À Bruxelles, plusieurs mécanismes permettent de financer les travaux
              qui réduisent l&apos;humidité par condensation :
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Primes Rénolution (Région de Bruxelles-Capitale)",
                  desc: "Le programme Rénolution accorde des primes pour l'isolation des murs (intérieur ou extérieur), de la toiture et du plancher. Ces travaux réduisent directement les ponts thermiques et limitent la condensation. Le montant varie selon vos revenus et le type de travaux.",
                },
                {
                  titre: "TVA à 6% sur les travaux",
                  desc: "Pour les habitations de plus de 10 ans, les travaux de rénovation (isolation, VMC) bénéficient d'un taux de TVA réduit à 6% au lieu de 21%, à condition que les travaux soient réalisés par un entrepreneur enregistré.",
                },
                {
                  titre: "Performance Énergétique des Bâtiments (PEB)",
                  desc: "La réglementation PEB bruxelloise impose des exigences de ventilation dans les nouvelles constructions et les rénovations importantes. L'installation d'une VMC peut être rendue obligatoire selon l'ampleur des travaux de votre projet.",
                },
              ].map((item) => (
                <div key={item.titre} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">{item.titre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes — Condensation
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="bg-[#F8FAFC] rounded-xl border border-gray-100 group">
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
            Moisissures ou vitres qui pleurent chaque hiver ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            La condensation a des solutions durables et souvent éligibles aux primes
            bruxelloises. Notre diagnostic détermine les causes précises et vous
            propose la meilleure combinaison de solutions.
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
            <ContactForm defaultProblem="Humidité de condensation" />
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
