import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Saint-Gilles — Maisons Art Nouveau | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Saint-Gilles. Maisons de maître art nouveau, caves voûtées, humidité historique. Diagnostic gratuit. 0451 05 33 70",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/saint-gilles",
  },
};

const faqs = [
  {
    question: "Les maisons art nouveau de Saint-Gilles sont-elles protégées ? Peut-on les traiter ?",
    answer: "Nombre de maisons art nouveau de Saint-Gilles sont classées ou font partie d'ensembles protégés. Cela ne vous empêche pas de traiter l'humidité, mais les méthodes d'intervention doivent être adaptées pour préserver les éléments patrimoniaux. Nous travaillons avec des techniques d'injection non invasives qui ne dégradent pas les façades en céramique ou les carrelages de style. Si votre bien est classé, nous pouvons vous accompagner dans les démarches auprès de Bruxelles Urbanisme.",
  },
  {
    question: "Les caves voûtées de Saint-Gilles sont-elles récupérables ?",
    answer: "Oui, même les caves voûtées les plus humides de Saint-Gilles peuvent être assainies. Le traitement comprend généralement un drainage, une injection dans les murs de fondation et une imperméabilisation intérieure par mortier drainant. Ces caves peuvent ensuite servir de cave à vin, de buanderie ou d'espace de stockage. Le délai de séchage varie de 3 à 9 mois selon le degré d'humidité initial.",
  },
  {
    question: "Comment identifier une humidité historique dans une maison art nouveau ?",
    answer: "L'humidité historique se reconnaît à plusieurs signes : des cernes d'humidité anciens sur les murs, des traces de traitements antérieurs (anciens produits bitumineux ou enduits étanches), des planchers en bois bombés ou désolidarisés. Un diagnostic humidimétrique professionnel avec mesure de l'humidité résiduelle dans les murs permet de quantifier l'ampleur et de dimensionner le traitement correctement.",
  },
];

export default function SaintGillesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Saint-Gilles", href: "/communes/saint-gilles" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Saint-Gilles" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Saint-Gilles</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Saint-Gilles</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Saint-Gilles{" "}
              <span className="text-[#F97316]">— Patrimoine Art Nouveau & Caves Voûtées</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Saint-Gilles abrite l&apos;une des plus belles concentrations de maisons
              art nouveau de Belgique. Ces joyaux architecturaux, avec leurs caves
              voûtées et leurs murs anciens, accumulent souvent une humidité
              historique qu&apos;il faut traiter avec des méthodes adaptées au patrimoine.
              Traitement Humidité Bruxelles est votre expert pour ces interventions délicates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors">
                <Phone size={18} />0451 05 33 70
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
              alt="Mur avec salpêtre dans une cave voûtée de maison art nouveau à Saint-Gilles"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Saint-Gilles : l&apos;humidité dans le bâti historique
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Saint-Gilles concentre un patrimoine architectural unique : les maisons
            de maître art nouveau de Victor Horta et de ses contemporains, les belles
            demeures bourgeoises de l&apos;avenue Louise, les maisons de rapport du début
            du XXe siècle. Ce bâti, datant majoritairement de 1890 à 1920, accumule
            plus de cent ans d&apos;humidité structurelle.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Les caves voûtées de ces immeubles, creusées dans un sol argileux jamais
            traité, présentent souvent des murs suintants depuis des décennies. Les
            premières tentatives de traitement réalisées dans les années 1970–1980
            avec des produits bitumineux ont parfois aggravé la situation en bloquant
            l&apos;évaporation naturelle et en accumulant l&apos;humidité dans la maçonnerie.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Nous intervenons dans les quartiers de Barrière, de Morichar, de Parvis
            et de Bethléem avec une approche respectueuse du bâti historique : injection
            non invasive, enduits à la chaux, hydrofuges respirants. Nous préservons
            la valeur patrimoniale de votre bien tout en résolvant définitivement
            le problème d&apos;humidité.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à Saint-Gilles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement patrimoine bâti historique",
              "Injection silicone non invasive",
              "Assèchement de caves voûtées",
              "Enduits à la chaux respirants",
              "Traitement mérule et moisissures",
              "Hydrofugation façades art nouveau",
              "Diagnostic humidité historique",
              "Rapport pour biens classés",
              "Conseil rénovation patrimoine",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Saint-Gilles</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Saint-Gilles */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Saint-Gilles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Caves voûtées des maisons art nouveau classées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Humidité historique dans les sous-sols profonds</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Grandes fenêtres = ponts thermiques importants</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Ornements de façade qui retiennent l&apos;eau</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Saint-Gilles</h2>
              <p className="text-gray-300 mb-4">Votre maison de maître ou appartement saint-gillois souffre d&apos;humidité ? Contactez-nous pour un diagnostic spécialisé, gratuit et adapté au bâti historique.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à Saint-Gilles et communes voisines</span>
              </div>
              <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0451 05 33 70
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Saint-Gilles" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
