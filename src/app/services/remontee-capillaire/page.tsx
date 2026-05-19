import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Remontée Capillaire Bruxelles — Injection Silicone | Traitement Humidité Bruxelles",
  description:
    "Traitement remontée capillaire à Bruxelles par injection de résine silicone. Diagnostic gratuit, garantie 10 ans. Appelez le 0489 57 65 65 pour un devis.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/services/remontee-capillaire",
  },
};

const faqItems = [
  {
    question: "Combien de temps dure un traitement par injection de résine silicone ?",
    answer:
      "L'injection elle-même prend généralement une demi-journée à une journée selon la longueur des murs à traiter. Le séchage complet de la résine dans les pores de la maçonnerie demande ensuite 48 heures. Les murs humides mettent encore plusieurs semaines à sécher complètement après le traitement.",
  },
  {
    question: "La remontée capillaire peut-elle revenir après le traitement ?",
    answer:
      "Avec l'injection de résine silicone correctement réalisée, le traitement est définitif. La résine polymérise dans les pores de la maçonnerie et crée une barrière chimique permanente. Nous offrons une garantie de 10 ans sur nos interventions.",
  },
  {
    question: "Comment savoir si j'ai de la remontée capillaire ou une infiltration ?",
    answer:
      "La remontée capillaire se distingue par des taches d'humidité situées dans les 80 premiers centimètres des murs depuis le sol, souvent accompagnées de salpêtre (dépôts blancs) et d'enduit friable. Les infiltrations apparaissent elles après des épisodes de pluie et peuvent toucher n'importe quelle hauteur du mur. Notre diagnostic permet de trancher avec certitude.",
  },
  {
    question: "Faut-il vider les pièces avant l'intervention ?",
    answer:
      "Il est préférable de dégager les meubles sur 50 cm autour des murs à traiter. Les meubles lourds peuvent rester en place si l'accès aux murs est possible. Nous protégeons vos sols durant l'intervention.",
  },
  {
    question: "Quel est le coût d'un traitement remontée capillaire à Bruxelles ?",
    answer:
      "Le tarif indicatif est de 80 à 150 € par mètre linéaire selon l'épaisseur des murs et la longueur à traiter. Un devis précis et gratuit est établi après diagnostic sur place. Aucun engagement n'est requis pour le diagnostic.",
  },
];

const communes = [
  "Uccle", "Ixelles", "Woluwe-Saint-Pierre", "Woluwe-Saint-Lambert",
  "Auderghem", "Watermael-Boitsfort", "Etterbeek", "Forest", "Saint-Gilles",
];

const autresServices = [
  { href: "/services/merule", label: "Traitement Mérule" },
  { href: "/services/condensation", label: "Humidité par Condensation" },
  { href: "/services/infiltrations", label: "Infiltrations d'Eau" },
];

export default function RemonteeCapillairePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Traitement Remontée Capillaire",
    description:
      "Traitement de la remontée capillaire par injection de résine silicone hydrophobe. Diagnostic gratuit, garantie 10 ans, intervention à Bruxelles et communes.",
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
        price: "80-150",
        priceCurrency: "EUR",
        unitText: "par mètre linéaire",
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
          { name: "Remontée capillaire", href: "/services/remontee-capillaire" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/types-humidite" },
          { label: "Remontée capillaire" },
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
            <span className="text-gray-300">Remontée capillaire</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Traitement de la Remontée Capillaire à Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mb-8">
            L&apos;injection de résine silicone est la solution durable et garantie contre
            la remontée capillaire. Nos experts interviennent dans toute la Région
            bruxelloise avec un diagnostic gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              0489 57 65 65 — Appel gratuit
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

      {/* Section 1 — Qu'est-ce que la remontée capillaire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Qu&apos;est-ce que la remontée capillaire ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              La remontée capillaire est un phénomène physique par lequel l&apos;eau du sol
              s&apos;infiltre dans les matériaux de construction poreux — briques, mortier,
              pierre bleue — et monte par capillarité dans les murs. Ce phénomène peut
              élever l&apos;humidité jusqu&apos;à 80 à 120 cm de hauteur dans un mur exposé.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              En Belgique, et particulièrement à Bruxelles, ce problème est extrêmement
              répandu dans les constructions antérieures à 1960. Ces bâtisses en brique
              belge typique n&apos;étaient pas équipées de barrière d&apos;étanchéité horizontale
              dans leurs fondations, car la technique n&apos;existait pas encore ou n&apos;était
              pas systématisée. Le sous-sol bruxellois, souvent argileux et retenant
              l&apos;eau, aggrave le phénomène.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              En remontant dans la maçonnerie, l&apos;eau entraîne avec elle des sels
              minéraux dissous dans le sol. Ces sels cristallisent à la surface des murs
              lorsque l&apos;eau s&apos;évapore, formant le salpêtre — ces dépôts blancs
              caractéristiques — et détériorent progressivement les enduits, les peintures
              et même la structure en brique. Sans traitement, la dégradation s&apos;accélère
              année après année.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Une barrière d&apos;étanchéité vieillissante sur des constructions plus
              récentes, une canalisation enterrée qui fuit, ou un terrain particulièrement
              saturé en eau peuvent également provoquer ce type d&apos;humidité, même dans
              des bâtiments construits après 1970.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Signes à reconnaître */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Signes à reconnaître
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La remontée capillaire présente des symptômes assez caractéristiques qui
              permettent de l&apos;identifier, même sans expertise technique. Voici ce qu&apos;il
              faut observer :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Taches blanches (salpêtre)",
                  desc: "Des dépôts blanchâtres cristallisés sur les briques ou sous les enduits, en bas des murs. C'est le signe le plus révélateur d'une remontée capillaire active.",
                },
                {
                  titre: "Peinture qui cloque et se détache",
                  desc: "La pression des sels qui cristallisent sous la surface fait gonfler et décoller les couches de peinture. L'enduit devient friable et poudrant.",
                },
                {
                  titre: "Moisissures basses",
                  desc: "Des moisissures noires apparaissent sur les plinthes, dans les angles bas ou derrière les meubles. Elles se situent toujours dans les 80 premiers cm depuis le sol.",
                },
                {
                  titre: "Odeur de moisi en cave",
                  desc: "Une odeur persistante de terre humide ou de champignon dans les pièces basses et les caves, même après aération, indique une humidité de fond chronique.",
                },
                {
                  titre: "Humidité constante en bas des murs",
                  desc: "Les murs restent frais ou humides au toucher en bas, quelle que soit la saison et même sans pluie récente — contrairement aux infiltrations.",
                },
                {
                  titre: "Plinthes et parquet qui gondolent",
                  desc: "L'humidité chronique fait travailler le bois : les parquets se soulèvent, les plinthes se déforment, les portes de cave ferment mal.",
                },
              ].map((item) => (
                <div key={item.titre} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
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

      {/* Section 3 — Notre technique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Notre technique : injection de résine silicone
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L&apos;injection de résine silicone hydrophobe est aujourd&apos;hui la méthode de
              référence pour traiter définitivement la remontée capillaire. Elle consiste
              à créer une barrière chimique imperméable à l&apos;intérieur même de la
              maçonnerie, bloquant la montée de l&apos;eau à sa source.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  titre: "Diagnostic et mesure d'humidité",
                  desc: "Avant toute intervention, nous effectuons un diagnostic complet avec hygromètre et sonde de profondeur pour mesurer le taux d'humidité dans l'épaisseur du mur et confirmer la présence de remontée capillaire.",
                },
                {
                  num: "2",
                  titre: "Carottage tous les 10 cm",
                  desc: "Des trous de 12 à 16 mm de diamètre sont forés horizontalement dans le mur, à une hauteur de 15 à 25 cm depuis le sol. L'espacement entre chaque trou est de 10 cm pour garantir une barrière continue sur toute l'épaisseur du mur.",
                },
                {
                  num: "3",
                  titre: "Injection de résine hydrophobe",
                  desc: "La résine silicone est injectée sous faible pression dans chaque trou. Elle pénètre dans les pores de la brique et du mortier par capillarité, puis se polymérise en 48h pour créer une membrane chimique imperméable sur toute la largeur du mur.",
                },
                {
                  num: "4",
                  titre: "Colmatage et finition",
                  desc: "Les trous sont rebouchés avec un mortier adapté. Les enduits dégradés par le salpêtre sont déposés et refaits avec un enduit assainissant qui laisse respirer le mur tout en résistant aux remontées résiduelles.",
                },
                {
                  num: "5",
                  titre: "Séchage et suivi",
                  desc: "La résine sèche en 48h, mais les murs mettent plusieurs semaines à évacuer l'humidité accumulée. Nous effectuons un contrôle après 3 mois pour vérifier l'efficacité du traitement.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 bg-blue-50 rounded-xl p-4">
                  <span className="w-8 h-8 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{step.titre}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#1E3A5F] text-white rounded-xl p-5">
              <p className="font-semibold mb-1">Garantie incluse</p>
              <p className="text-gray-300 text-sm">
                Tous nos traitements par injection de résine silicone sont garantis{" "}
                <strong className="text-white">10 ans</strong>. Si la remontée
                capillaire réapparaît dans cette période, nous intervenons à nouveau
                sans frais supplémentaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Tarifs */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Tarifs indicatifs
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-2">Mur mince (&lt; 30 cm)</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">80 – 100 €</p>
                <p className="text-gray-400 text-xs mt-1">par mètre linéaire</p>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-[#F97316] text-center">
                <p className="text-[#F97316] text-xs font-semibold uppercase mb-2">Le plus courant</p>
                <p className="text-gray-500 text-sm mb-2">Mur standard (30–50 cm)</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">100 – 130 €</p>
                <p className="text-gray-400 text-xs mt-1">par mètre linéaire</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-2">Mur épais (&gt; 50 cm)</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">130 – 150 €</p>
                <p className="text-gray-400 text-xs mt-1">par mètre linéaire</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Ces tarifs incluent le diagnostic, le carottage, l&apos;injection de résine
              silicone et le rebouchage des trous. Les travaux de réfection d&apos;enduit
              assainissant sont facturés séparément si nécessaire. Un devis détaillé et
              gratuit est toujours établi avant toute intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0489576565"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} />
                Devis gratuit au 0489 57 65 65
              </a>
              <Link
                href="/tarifs"
                className="flex items-center justify-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Voir tous les tarifs <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Zones d'intervention */}
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

      {/* Section 6 — FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes — Remontée capillaire
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

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Murs humides en bas ? Agissez maintenant.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            La remontée capillaire ne se règle pas seule. Plus on attend, plus
            les dégâts sur les enduits, les plinthes et la structure s&apos;accumulent.
            Notre diagnostic est gratuit et sans engagement.
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
            <ContactForm defaultProblem="Remontée capillaire" />
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
