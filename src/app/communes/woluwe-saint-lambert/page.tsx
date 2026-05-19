import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Woluwe-Saint-Lambert — Expert | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Woluwe-Saint-Lambert. Mérule dans caves, copropriétés, bâtiments mixtes. Diagnostic gratuit, intervention rapide. 0451 05 33 70",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/woluwe-saint-lambert",
  },
};

const faqs = [
  {
    question: "La mérule est-elle fréquente dans les caves de Woluwe-Saint-Lambert ?",
    answer: "Les caves de WSL, souvent mal ventilées et touchées par l'humidité depuis des années, constituent un terrain fertile pour la mérule. Ce champignon lignivore se développe dans le bois humide et peut traverser les parois en maçonnerie. Dès les premiers signes (filaments blancs cotonneux, odeur de champignon), une intervention rapide est indispensable.",
  },
  {
    question: "Comment gérer l'humidité en copropriété à Woluwe-Saint-Lambert ?",
    answer: "Dans les copropriétés de WSL, l'humidité provient souvent des parties communes : cave, toiture, façade. Une intervention nécessite généralement l'accord du syndic et une décision en assemblée générale. Nous fournissons un rapport technique complet qui facilite ces démarches et permet d'obtenir des devis comparatifs.",
  },
  {
    question: "Les immeubles mixtes (commerce + logement) présentent-ils des risques spécifiques ?",
    answer: "Oui, les bâtiments mixtes de WSL présentent des risques accrus car les activités commerciales en rez-de-chaussée (restaurants, laveries, etc.) produisent beaucoup de vapeur d'eau qui migre vers les étages résidentiels. Une ventilation adaptée à chaque usage est essentielle pour éviter les problèmes de condensation dans les appartements.",
  },
];

export default function WoluweSaintLambertPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Woluwe-Saint-Lambert", href: "/communes/woluwe-saint-lambert" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Woluwe-Saint-Lambert" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Woluwe-Saint-Lambert</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local WSL</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Woluwe-Saint-Lambert{" "}
              <span className="text-[#F97316]">— Mérule & Copropriétés</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              À Woluwe-Saint-Lambert, les bâtiments mixtes, les copropriétés des années
              70–80 et les caves mal ventilées créent des conditions propices au
              développement de la mérule et à l&apos;accumulation d&apos;humidité. Nous
              intervenons avec expertise dans toute la commune.
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
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
              alt="Cave commune humide dans un immeuble de Woluwe-Saint-Lambert"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Woluwe-Saint-Lambert : un bâti diversifié aux défis multiples
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            WSL se distingue de sa voisine Woluwe-Saint-Pierre par une plus grande
            diversité architecturale. On y trouve des villas résidentielles côtoyant
            des immeubles de rapport, des bâtiments mixtes commerciaux et des
            copropriétés construites dans les années 1970–1985.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Cette diversité implique des problèmes d&apos;humidité variés. Les caves des
            immeubles collectifs de WSL sont souvent peu ou pas ventilées, créant
            des conditions idéales pour la mérule. Les copropriétés de l&apos;avenue
            Georges Henri ou de la chaussée de Roodebeek présentent régulièrement
            des problèmes d&apos;infiltrations en parties communes.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Traitement Humidité Bruxelles travaille en étroite collaboration avec les syndics de
            copropriété de la commune pour établir des diagnostics collectifs et des
            programmes de travaux planifiés, minimisant les nuisances pour les occupants.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à WSL</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement mérule (urgence et curatif)",
              "Diagnostic en copropriété",
              "Rapport technique pour syndic",
              "Injection silicone anti-capillaire",
              "Assèchement de caves communes",
              "Traitement moisissures et fongicides",
              "Ventilation et extraction d'air",
              "Imperméabilisation façades",
              "Suivi post-traitement",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à WSL</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Woluwe-Saint-Lambert */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Woluwe-Saint-Lambert
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Bâtiments mixtes et copropriétés anciens</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Caves communes des immeubles des années 60</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Appartements mal ventilés</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Toitures plates des immeubles</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Woluwe-Saint-Lambert</h2>
              <p className="text-gray-300 mb-4">Particulier, bailleur ou syndic à WSL ? Contactez-nous pour un diagnostic complet gratuit et un devis transparent.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à WSL et communes voisines</span>
              </div>
              <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0451 05 33 70
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Woluwe-Saint-Lambert" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
