import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Forest — Maisons Ouvrières Salpêtre | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Forest. Maisons ouvrières, briques exposées, salpêtre. Traitement remontée capillaire, mérule. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/forest",
  },
};

const faqs = [
  {
    question: "Pourquoi le salpêtre est-il si fréquent dans les maisons ouvrières de Forest ?",
    answer: "Les maisons ouvrières de Forest, construites entre 1880 et 1930 pour accueillir les travailleurs des industries bruxelloises, ont des fondations sans aucun traitement d'étanchéité. L'eau du sol remonte dans les murs en brique par capillarité et, en s'évaporant, laisse des dépôts de sels minéraux (salpêtre) en surface. Ces cristaux blancs ou grisâtres font gonfler et décoller la peinture. Le traitement par injection de résine silicone crée une barrière permanente pour stopper ce phénomène.",
  },
  {
    question: "Le salpêtre est-il dangereux pour la santé ?",
    answer: "Le salpêtre lui-même n'est pas directement dangereux pour la santé, mais l'humidité qu'il signale favorise le développement de moisissures qui, elles, peuvent provoquer des problèmes respiratoires, des allergies et aggraver l'asthme. De plus, l'humidité chronique dans les maisons de Forest détériore les structures en bois (planchers, poutres) et peut conduire à l'apparition de mérule sur le long terme.",
  },
  {
    question: "Peut-on peindre sur du salpêtre après traitement ?",
    answer: "Oui, mais uniquement après avoir traité la cause (remontée capillaire) et laissé les murs sécher complètement. Le délai de séchage est généralement de 3 à 6 mois selon l'épaisseur des murs et le degré d'humidité. Nous recommandons ensuite d'utiliser une peinture respirante (silicatée ou à la chaux) plutôt que les peintures vinyliques qui emprisonnent l'humidité résiduelle.",
  },
];

export default function ForestPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Forest", href: "/communes/forest" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Forest" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Forest</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Forest</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Forest{" "}
              <span className="text-[#F97316]">— Maisons Ouvrières & Salpêtre</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Forest conserve un précieux patrimoine de maisons ouvrières en brique
              apparente datant de la fin du XIXe siècle. Ces constructions sans
              isolation ni barrière d&apos;étanchéité souffrent quasi universellement de
              remontées capillaires, de salpêtre et de moisissures. Traitement Humidité Bruxelles apporte
              des solutions durables respectueuses de ce bâti historique.
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

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Mur en brique avec salpêtre — maison ouvrière de Forest"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Forest : le patrimoine ouvrier face à l&apos;humidité
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Forest est une commune en pleine transformation, où les ruelles de
            maisons ouvrières en brique rouge côtoient des bâtiments contemporains.
            Le quartier de l&apos;Altitude 100, les rues autour de la place Saint-Denis
            et les maisons derrière l&apos;abbaye de Forest concentrent un bâti ancien
            qui n&apos;a jamais été conçu pour résister à l&apos;humidité selon les normes
            actuelles.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Les maisons mitoyennes en bandes, caractéristiques de Forest, partagent
            leurs murs et leurs fondations. Un problème d&apos;humidité chez un voisin
            peut donc migrer vers votre habitation. Cette réalité rend d&apos;autant plus
            important un traitement efficace qui isole complètement le bâtiment des
            remontées d&apos;eau.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Nous traitons régulièrement le salpêtre dans les rez-de-chaussée de Forest,
            les moisissures dans les caves semi-enterrées et les remontées capillaires
            dans les murs mitoyens. Nos méthodes sont adaptées au bâti en brique
            traditionnelle belge pour ne pas endommager les matériaux d&apos;origine.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à Forest</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement salpêtre et efflorescences",
              "Injection silicone anti-capillaire",
              "Réfection d'enduits à la chaux",
              "Traitement moisissures et mérule",
              "Diagnostic humidimétrique",
              "Assèchement de caves",
              "Imperméabilisation murs mitoyens",
              "Nettoyage et traitement de façades",
              "Conseil rénovation bâti ancien",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            Vous avez fait appel à nos services ? Partagez votre expérience sur notre{" "}
            <span className="font-semibold text-[#1E3A5F]">fiche Google</span> — vos avis aident d&apos;autres habitants de la région.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Forest</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Forest */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Forest
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Maisons ouvrières en brique des années 1900–1930</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Salpêtre et humidité chronique dans les caves</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Mauvaise isolation thermique des murs en brique</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Toitures en ardoise vieillissantes</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Forest</h2>
              <p className="text-gray-300 mb-4">Problème de salpêtre ou d&apos;humidité dans votre maison de Forest ? Contactez-nous pour un diagnostic gratuit et un devis clair.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à Forest et communes voisines</span>
              </div>
              <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0489 57 65 65
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Forest" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
