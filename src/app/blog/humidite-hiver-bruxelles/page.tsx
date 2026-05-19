import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Calendar, Clock, User } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Humidité en Hiver à Bruxelles : Causes, Risques et Solutions | Traitement Humidité Bruxelles",
  description:
    "Pourquoi l'hiver amplifie l'humidité à Bruxelles ? Condensation, infiltrations, remontées capillaires : causes, risques par quartier et solutions pour protéger votre logement.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/blog/humidite-hiver-bruxelles",
  },
};

export default function ArticleHumiditeHiverPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Humidité en Hiver à Bruxelles : Causes, Risques et Solutions",
    description:
      "Pourquoi l'hiver amplifie les problèmes d'humidité à Bruxelles ? Condensation, infiltrations, remontées capillaires : comprendre et agir avant les dégâts.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
    author: {
      "@type": "Organization",
      name: "L'équipe Traitement Humidité Bruxelles",
      url: "https://traitement-humidite-bruxelles.be",
    },
    publisher: {
      "@type": "Organization",
      name: "Traitement Humidité Bruxelles",
      url: "https://traitement-humidite-bruxelles.be",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://traitement-humidite-bruxelles.be/blog/humidite-hiver-bruxelles",
    },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Humidité en hiver à Bruxelles", href: "/blog/humidite-hiver-bruxelles" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Humidité en hiver à Bruxelles" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero image */}
      <div className="w-full h-64 sm:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1400&q=80"
          alt="Maison bruxelloise sous la pluie en hiver"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gray-600">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-500">Humidité en hiver</span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              Guide pratique
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime="2026-05-15">15 mai 2026</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              8 min de lecture
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              L&apos;équipe Traitement Humidité Bruxelles
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Humidité en Hiver à Bruxelles : Causes, Risques et Solutions
          </h1>

          {/* Intro */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-[#F97316] pl-4">
            L&apos;hiver bruxellois est redoutable pour les logements. Avec son climat
            atlantique typique — pluies fréquentes, températures proches de zéro,
            humidité ambiante élevée — la saison froide amplifie chaque problème
            d&apos;humidité existant et en révèle souvent de nouveaux. Ce guide vous
            explique pourquoi, quels quartiers sont les plus touchés et comment
            protéger votre logement avant que les dégâts ne s&apos;aggravent.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Les 3 problèmes d&apos;humidité qui explosent en hiver
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            1. La condensation : le chauffage contre le froid
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            En hiver, vous chauffez votre intérieur. L&apos;air chaud retient davantage
            de vapeur d&apos;eau que l&apos;air froid. Lorsque cet air humide et chaud entre
            en contact avec une paroi froide — un mur extérieur non isolé, un angle
            de plafond, un vitrage simple — la vapeur se transforme en eau liquide.
            C&apos;est la condensation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            À Bruxelles, ce phénomène est particulièrement marqué dans les logements
            qui ont été partiellement rénovés : double vitrage posé sans adaptation
            de la ventilation, isolation d&apos;un seul côté du bâtiment, fermeture
            hermétique des grilles de ventilation pour &quot;éviter les courants d&apos;air&quot;.
            Le résultat : une humidité relative intérieure qui dépasse régulièrement
            70% et des moisissures noires qui colonisent les angles et les joints.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Un foyer de 4 personnes produit jusqu&apos;à 10 litres de vapeur d&apos;eau par
            jour (respiration, cuisine, douches, linge). Sans renouvellement d&apos;air
            suffisant, cette humidité s&apos;accumule inexorablement. Découvrez nos{" "}
            <Link href="/services/condensation" className="text-[#F97316] font-medium hover:underline">
              solutions contre l&apos;humidité de condensation
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2. Les infiltrations : pluies battantes et cycles gel/dégel
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            L&apos;hiver bruxellois apporte des précipitations intenses et fréquentes.
            Chaque épisode de pluie teste l&apos;étanchéité de votre toiture, de votre
            façade et de vos terrasses. Les défauts mineurs — un joint de faîtage
            fissuré, une ardoise légèrement déplacée, un relevé d&apos;étanchéité de
            terrasse décollé — qui passaient inaperçus en été deviennent des sources
            d&apos;infiltration active en hiver.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Les cycles gel/dégel sont particulièrement destructeurs pour la maçonnerie
            bruxelloise. L&apos;eau infiltrée dans les joints de mortier ou dans les pores
            des briques gèle la nuit, augmente de volume et fait éclater les matériaux.
            Au dégel, le joint est plus large, la brique plus fissurée — et la prochaine
            pluie s&apos;y engouffre davantage. Ce phénomène s&apos;auto-amplifie à chaque hiver.
            Nos experts traitent les{" "}
            <Link href="/services/infiltrations" className="text-[#F97316] font-medium hover:underline">
              infiltrations d&apos;eau à Bruxelles
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3. Les remontées capillaires aggravées par la saturation du sol
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Les remontées capillaires, phénomène permanent, s&apos;aggravent en hiver pour
            une raison simple : le sol est saturé en eau. Après des mois de pluies
            automnales et hivernales, la nappe phréatique est haute et le terrain
            argileux — typique du sous-sol bruxellois — est gorgé d&apos;eau. La pression
            sur les fondations et les murs enterrés est à son maximum. Les maisons
            sans barrière d&apos;étanchéité horizontale (constructions avant 1960) voient
            leur taux d&apos;humidité en bas des murs atteindre des niveaux critiques entre
            décembre et mars. Consultez notre page sur le{" "}
            <Link href="/services/remontee-capillaire" className="text-[#F97316] font-medium hover:underline">
              traitement de la remontée capillaire
            </Link>.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Les quartiers bruxellois les plus touchés
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tous les logements bruxellois ne sont pas égaux face à l&apos;humidité hivernale.
            La nature du bâti, l&apos;époque de construction et la situation géographique
            jouent un rôle déterminant.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                quartier: "Uccle — Les villas des années 30–60",
                desc: "Les villas uccleoises construites entre 1930 et 1960 sont particulièrement exposées aux remontées capillaires. Leurs fondations en moellon ou en brique n'ont jamais été équipées de barrière d'étanchéité, et leurs caves volumineux restent humides tout l'hiver. Le sous-sol argileux du plateau ucclois retient l'eau et maintient une pression constante sur les murs enterrés.",
              },
              {
                quartier: "Saint-Gilles — Les maisons Art nouveau",
                desc: "Le patrimoine architectural Art nouveau et Art déco de Saint-Gilles est magnifique mais vulnérable. Les façades ornementées en pierre bleue ou en céramique, les balcons en console de fer, les corniches décoratives sont autant de points d'infiltration potentiels. La maçonnerie d'époque, souvent refaite partiellement, présente des joints de mortier inégaux qui absorbent massivement l'eau de pluie.",
              },
              {
                quartier: "Forest — Les maisons ouvrières mitoyennes",
                desc: "Les rangées de maisons ouvrières en brique rouge des années 1900–1930 qui jalonnent Forest souffrent d'un double problème : remontées capillaires (absence de coupure d'étanchéité) et infiltrations par les toitures en zinc souvent centenaires. La mitoyenneté complique les interventions sur les murs gouttereaux et les joints de separation.",
              },
            ].map((item) => (
              <div key={item.quartier} className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">{item.quartier}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5 gestes préventifs avant l&apos;hiver
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La meilleure protection contre l&apos;humidité hivernale reste la prévention.
            Voici les gestes concrets que vous pouvez effectuer avant novembre :
          </p>
          <ol className="space-y-3 mb-8">
            {[
              {
                num: 1,
                action: "Vérifier et remplacer les joints de fenêtres",
                detail: "Des joints de fenêtres durcis ou fissurés laissent s'infiltrer l'humidité par capillarité et peuvent aussi créer des ponts thermiques locaux. Le remplacement des joints coûte quelques euros et évite des dégâts importants.",
              },
              {
                num: 2,
                action: "Purger et vérifier les descentes de gouttières",
                detail: "Des gouttières obstruées par les feuilles d'automne débordent et concentrent l'eau sur la façade et les fondations. Un nettoyage annuel en octobre est le geste préventif le plus rentable pour une maison bruxelloise.",
              },
              {
                num: 3,
                action: "Ventiler correctement, même en hiver",
                detail: "Ne condamnez pas vos grilles de ventilation pour 'avoir moins froid'. Aérez 10 minutes matin et soir en hiver — cela suffit à évacuer la vapeur d'eau accumulée pendant la nuit sans faire chuter la température de façon significative.",
              },
              {
                num: 4,
                action: "Inspecter la cave et mesurer le taux d'humidité",
                detail: "Un hygromètre de cave (moins de 15€) vous permet de suivre le taux d'humidité. Si l'humidité relative dépasse 80% en cave de façon persistante, c'est le signal qu'une intervention professionnelle s'impose avant l'hiver suivant.",
              },
              {
                num: 5,
                action: "Faire inspecter la toiture par un professionnel",
                detail: "Une inspection de toiture annuelle ou bisannuelle permet de détecter les ardoises fissurées, les joints de faîtage dégradés ou les solins décollés avant qu'ils ne causent une infiltration. Le coût d'une inspection est infime comparé à celui d'une réfection de plafond.",
              },
            ].map((item) => (
              <li key={item.num} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4">
                <span className="w-7 h-7 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.action}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quand appeler un expert ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Certains signaux d&apos;alarme ne doivent pas être ignorés. Ils indiquent un
            problème qui dépasse le stade des gestes préventifs et nécessite une
            intervention professionnelle :
          </p>
          <div className="space-y-3 mb-8">
            {[
              {
                signal: "Filaments blancs cotonneux sur le bois ou les murs",
                gravite: "URGENT",
                graviteColor: "bg-red-100 text-red-700",
                action: "Suspicion de mérule — appelez immédiatement. Chaque semaine compte.",
                lien: "/services/merule",
                lienLabel: "En savoir sur la mérule",
              },
              {
                signal: "Salpêtre qui revient chaque année, même après grattage",
                gravite: "Important",
                graviteColor: "bg-orange-100 text-orange-700",
                action: "La remontée capillaire est active. Un traitement par injection est nécessaire.",
                lien: "/services/remontee-capillaire",
                lienLabel: "Traitement remontée capillaire",
              },
              {
                signal: "Moisissures qui reviennent après nettoyage en moins de 3 mois",
                gravite: "À traiter",
                graviteColor: "bg-yellow-100 text-yellow-700",
                action: "La cause profonde (condensation ou infiltration) n'est pas traitée.",
                lien: "/services/condensation",
                lienLabel: "Solutions condensation",
              },
              {
                signal: "Tache d'humidité qui apparaît après chaque pluie",
                gravite: "À traiter",
                graviteColor: "bg-yellow-100 text-yellow-700",
                action: "Infiltration active à localiser et traiter avant l'hiver.",
                lien: "/services/infiltrations",
                lienLabel: "Traitement infiltrations",
              },
            ].map((item) => (
              <div key={item.signal} className="bg-[#F8FAFC] rounded-xl p-4 border border-gray-100">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${item.graviteColor}`}>
                    {item.gravite}
                  </span>
                  <p className="font-semibold text-gray-900 text-sm">{item.signal}</p>
                </div>
                <p className="text-gray-600 text-xs mb-2 pl-0">{item.action}</p>
                <Link href={item.lien} className="text-[#F97316] text-xs font-semibold hover:underline">
                  {item.lienLabel} →
                </Link>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Les aides financières disponibles à Bruxelles
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bonne nouvelle : la Région de Bruxelles-Capitale propose plusieurs
            mécanismes de soutien pour les travaux qui luttent contre l&apos;humidité.
          </p>
          <div className="space-y-3 mb-8">
            {[
              {
                titre: "Primes Rénolution",
                desc: "Le programme Rénolution subventionne l'isolation des murs, de la toiture et des planchers — travaux qui réduisent directement la condensation et les infiltrations. Le montant des primes varie selon vos revenus. Renseignez-vous sur le site de Bruxelles Environnement.",
              },
              {
                titre: "TVA à 6% sur les travaux de rénovation",
                desc: "Pour tout logement de plus de 10 ans, les travaux de rénovation bénéficient d'un taux de TVA réduit à 6% au lieu de 21%, réduisant significativement la facture.",
              },
              {
                titre: "Primes communales complémentaires",
                desc: "Certaines communes bruxelloises (Ixelles, Saint-Gilles, Uccle) proposent des primes complémentaires aux primes régionales pour l'amélioration de l'habitat. Renseignez-vous auprès de votre administration communale.",
              },
            ].map((aide) => (
              <div key={aide.titre} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{aide.titre}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{aide.desc}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-[#1E3A5F] text-white rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-3">
              En conclusion : n&apos;attendez pas le printemps
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              L&apos;hiver bruxellois révèle les faiblesses de chaque logement. Les
              problèmes d&apos;humidité identifiés maintenant ne feront qu&apos;empirer si
              vous attendez la belle saison — les dégâts s&apos;accumulent et les coûts
              de traitement augmentent. Notre équipe effectue des diagnostics
              gratuits toute l&apos;année, y compris en période hivernale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0489576565"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={16} />
                0489 57 65 65
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-5 py-3 rounded-xl transition-colors"
              >
                Demander un diagnostic <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Navigation interne */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              Articles liés
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/services/remontee-capillaire"
                className="text-sm text-[#1E3A5F] hover:text-[#F97316] border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                Traitement Remontée Capillaire
              </Link>
              <Link
                href="/services/condensation"
                className="text-sm text-[#1E3A5F] hover:text-[#F97316] border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                Humidité par Condensation
              </Link>
              <Link
                href="/services/merule"
                className="text-sm text-[#1E3A5F] hover:text-[#F97316] border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                Traitement Mérule
              </Link>
              <Link
                href="/blog"
                className="text-sm text-[#1E3A5F] hover:text-[#F97316] border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
