import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ Traitement Humidité Bruxelles — Toutes Vos Questions | Traitement Humidité Bruxelles",
  description:
    "Toutes les réponses sur le traitement de l'humidité à Bruxelles. Coût, durée, mérule, garantie, subventions, assurance. Experts disponibles au 0489 57 65 65.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/faq",
  },
};

const allFaqs = [
  {
    question: "Combien coûte un traitement humidité à Bruxelles ?",
    answer: "Le coût d'un traitement dépend du type et de l'ampleur du problème. À titre indicatif : l'injection de résine silicone (remontée capillaire) coûte entre 60 et 150€ par mètre linéaire, le traitement de la mérule entre 25 et 45€ par m², et l'installation d'une VMC entre 800 et 1.800€. Notre diagnostic sur site est entièrement gratuit et vous permettra d'obtenir un devis précis et personnalisé, sans engagement.",
  },
  {
    question: "Quelle est la durée d'un chantier de traitement humidité ?",
    answer: "La durée varie selon le type d'intervention. Un traitement par injection de résine silicone pour une remontée capillaire sur un mur standard dure 1 à 2 jours. Le traitement de la mérule nécessite 2 à 4 jours selon la surface et l'ampleur des dégâts. L'installation d'une VMC prend généralement 1 journée. Des travaux plus complexes (drainage périphérique, réfection complète de cave) peuvent s'étaler sur 5 à 10 jours. Nous vous fournissons un planning précis lors du devis.",
  },
  {
    question: "La mérule est-elle dangereuse pour la santé ?",
    answer: "La mérule elle-même n'est pas directement toxique pour l'homme, mais elle représente une double menace. D'abord structurelle : elle détruit rapidement le bois de construction (poutres, parquets, charpentes), pouvant compromettre la stabilité du bâtiment. Ensuite sanitaire : les spores et filaments qu'elle libère dans l'air peuvent provoquer des irritations respiratoires, des allergies et aggraver des maladies existantes. Une habitation fortement infestée peut devenir temporairement inhabitable le temps des travaux.",
  },
  {
    question: "Mon assurance habitation couvre-t-elle les dégâts d'humidité ?",
    answer: "En Belgique, la couverture dépend de votre contrat et de la cause du problème. Les dégâts liés à un événement soudain et accidentel (rupture de canalisation, infiltration suite à une tempête) sont généralement couverts. En revanche, l'humidité chronique (remontées capillaires, condensation, mérule) est souvent considérée comme un défaut d'entretien et n'est pas couverte. Nous fournissons des rapports techniques détaillés qui peuvent aider à défendre votre dossier auprès de votre assureur.",
  },
  {
    question: "Quelle garantie offrez-vous sur vos travaux ?",
    answer: "Traitement Humidité Bruxelles garantit tous ses travaux pendant 10 ans. Cette garantie couvre le traitement effectué : en cas de réapparition du problème traité dans les 10 ans, nous intervenons à nouveau sans frais supplémentaires. Cette garantie est formalisée dans un document remis à la fin du chantier. Nous sommes également couverts par une assurance responsabilité civile professionnelle (RC Pro) qui garantit les dommages éventuels causés lors des travaux.",
  },
  {
    question: "Comment savoir si j'ai de la mérule dans ma maison ?",
    answer: "Les signes caractéristiques de la mérule sont : des filaments blancs cotonneux ou grisâtres sur les murs et le bois (ressemblant à du coton ou à des toiles d'araignées épaisses), des plaques orange-rouille ou marron (les fructifications), une odeur forte de champignon de sous-bois, du bois qui sonne creux, se fissure en cubes et s'effrite sous la pression des doigts, et des taches brunes sur les planchers ou les lambris. Si vous observez un ou plusieurs de ces signes, contactez-nous immédiatement car la mérule progresse rapidement.",
  },
  {
    question: "Faut-il quitter son logement pendant les travaux ?",
    answer: "Pour la plupart des interventions (injection silicone, traitement de condensation, VMC), il n'est pas nécessaire de quitter son logement. Les travaux se font dans des zones localisées avec peu de perturbations pour les occupants. En revanche, pour le traitement de la mérule, il est fortement recommandé de quitter temporairement le logement lors de l'application des fongicides, car les produits professionnels nécessitent un temps de ventilation de 24 à 48 heures avant de pouvoir réintégrer les espaces traités.",
  },
  {
    question: "Combien de temps dure un diagnostic humidité ?",
    answer: "Un diagnostic complet sur site dure généralement entre 45 minutes et 2 heures, selon la taille du bien et la complexité des problèmes. Le technicien inspecte visuellement l'ensemble du bien, effectue des mesures d'humidité dans les murs avec un humidimètre professionnel, et recueille toutes les informations nécessaires. Le rapport écrit du diagnostic vous est transmis dans les 24 à 48 heures suivant la visite.",
  },
  {
    question: "Intervenez-vous en appartement ?",
    answer: "Oui, nous intervenons dans tous les types de logements : maisons individuelles, appartements en copropriété, studios, lofts. Pour les appartements en copropriété, nous avons l'habitude de travailler avec les syndics et les gestionnaires d'immeubles. Si l'origine du problème se trouve dans les parties communes (cave commune, toiture, façade), nous fournissons un rapport technique qui facilite la prise de décision en assemblée générale.",
  },
  {
    question: "Les travaux de traitement humidité sont-ils subventionnés en Belgique ?",
    answer: "En Région bruxelloise, certains travaux liés à l'humidité peuvent bénéficier d'aides financières. Les travaux d'isolation thermique et de ventilation (VMC) sont éligibles aux primes Rénolution si votre bien remplit certaines conditions. La TVA réduite à 6% s'applique aux travaux de rénovation dans les logements de plus de 10 ans, ce qui inclut généralement les traitements d'humidité. Nous vous informons des aides disponibles lors de notre diagnostic.",
  },
  {
    question: "Quelle différence entre humidité ascensionnelle et condensation ?",
    answer: "L'humidité ascensionnelle (ou remontée capillaire) est une eau qui provient du sol et remonte dans les murs par les pores des matériaux. Elle touche principalement les parties basses des murs (0 à 120 cm), crée du salpêtre et se manifeste de façon relativement constante, indépendamment de la météo. La condensation, elle, est produite par l'humidité de l'air intérieur qui se dépose sur les parois froides. Elle touche souvent les angles, les fenêtres et les zones peu ventilées, et s'aggrave en hiver. Un diagnostic permet de distinguer clairement les deux.",
  },
  {
    question: "Combien de temps dure le traitement par injection de résine ?",
    answer: "Le traitement lui-même (forage des trous et injection) prend 1 à 2 jours selon la longueur des murs à traiter. Mais l'assèchement complet des murs après traitement prend beaucoup plus longtemps : en général 3 à 12 mois selon l'épaisseur des murs, le degré d'humidité initial et les conditions climatiques. Pendant cette période, vous observerez une amélioration progressive. Nous vous donnons des conseils pour accélérer le séchage (ventilation, chauffage modéré).",
  },
  {
    question: "Peut-on peindre après un traitement d'humidité ?",
    answer: "Oui, mais en respectant un délai de séchage suffisant. Il faut attendre que les murs aient retrouvé un taux d'humidité inférieur à 5% (mesuré avec un humidimètre) avant de peindre. Ce délai varie de 3 à 9 mois selon les cas. Nous déconseillons fortement les peintures imperméabilisantes qui bloquent la respiration du mur. Nous recommandons à la place des peintures minérales (silicatées, à la chaux) qui laissent le mur 'respirer' tout en offrant une belle finition.",
  },
  {
    question: "Intervenez-vous en urgence pour la mérule ?",
    answer: "Oui, pour les cas de mérule avérée, nous proposons des interventions d'urgence avec un délai de prise en charge de 24 à 48 heures. La mérule progresse rapidement et chaque jour de retard aggrave les dégâts et augmente le coût des travaux. Appelez-nous directement au 0489 57 65 65 pour signaler une urgence — nous ferons le nécessaire pour intervenir le plus vite possible.",
  },
  {
    question: "Quelle zone couvrez-vous à Bruxelles ?",
    answer: "Nous intervenons dans l'ensemble des 19 communes de la Région de Bruxelles-Capitale : Anderlecht, Auderghem, Berchem-Sainte-Agathe, Bruxelles, Etterbeek, Evere, Forest, Ganshoren, Ixelles, Jette, Koekelberg, Molenbeek-Saint-Jean, Saint-Gilles, Saint-Josse-ten-Noode, Schaerbeek, Uccle, Watermael-Boitsfort, Woluwe-Saint-Lambert et Woluwe-Saint-Pierre. Nous intervenons également dans les communes voisines (Rixensart, La Hulpe, Rhode-Saint-Genèse) sur demande.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Questions Fréquentes — Traitement Humidité Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Retrouvez toutes les réponses à vos questions sur le traitement de
            l&apos;humidité, nos tarifs, nos garanties et nos méthodes d&apos;intervention.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={allFaqs} />
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-nous directement. Un expert vous répondra dans les plus
            brefs délais ou vous proposera un diagnostic gratuit sur site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0489576565" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={18} />0489 57 65 65
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#1E3A5F] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              Formulaire de contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
