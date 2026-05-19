import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Woluwe-Saint-Pierre — Expert | Traitement Humidité Bruxelles",
  description:
    "Spécialiste humidité à Woluwe-Saint-Pierre. Villas résidentielles, sous-sols humides, humidité saisonnière. Diagnostic gratuit. Appelez le 0451 05 33 70.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/woluwe-saint-pierre",
  },
};

const faqs = [
  {
    question: "Pourquoi les sous-sols des villas de Woluwe-Saint-Pierre sont-ils souvent humides ?",
    answer: "Les villas résidentielles de Woluwe-Saint-Pierre sont souvent construites sur des terrains argileux qui retiennent l'eau. En période de fortes pluies, la nappe phréatique remonte et exerce une pression hydrostatique sur les parois enterrées. Sans drainage périphérique performant, cette eau pénètre dans les sous-sols. Nous réalisons des systèmes de drainage complets adaptés à ces terrains.",
  },
  {
    question: "L'humidité saisonnière à Woluwe-Saint-Pierre : comment l'expliquer ?",
    answer: "L'humidité saisonnière apparaît principalement en automne et en hiver à Woluwe-Saint-Pierre, quand les précipitations augmentent et que la végétation dense des jardins ralentit l'évaporation. Les jardins arborés de la commune contribuent à maintenir les sols humides. Cette humidité pénètre ensuite dans les fondations par capillarité ou par des joints défaillants.",
  },
  {
    question: "Peut-on aménager un sous-sol humide à Woluwe-Saint-Pierre ?",
    answer: "Oui, mais uniquement après traitement complet de l'humidité. Un sous-sol traité et assaini peut être converti en bureau, salle de jeux ou espace de rangement. Nous établissons un programme de travaux en deux phases : d'abord le traitement de l'humidité, puis les conseils pour l'aménagement intérieur avec les matériaux adaptés.",
  },
];

export default function WoluweSaintPierrePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Woluwe-Saint-Pierre", href: "/communes/woluwe-saint-pierre" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Woluwe-Saint-Pierre" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Woluwe-Saint-Pierre</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local WSP</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Woluwe-Saint-Pierre{" "}
              <span className="text-[#F97316]">— Villas & Sous-Sols</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Woluwe-Saint-Pierre, commune résidentielle huppée, compte de nombreuses
              villas avec sous-sols et jardins arborés. L&apos;humidité y est souvent
              saisonnière mais peut causer des dégâts importants si elle n&apos;est pas
              traitée rapidement. Nous intervenons dans toute la commune avec des
              solutions durables et certifiées.
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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Villa résidentielle à Woluwe-Saint-Pierre — problème d'humidité en sous-sol"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            L&apos;humidité à Woluwe-Saint-Pierre : spécificités locales
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Terrains argileux</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Les sols de Woluwe-Saint-Pierre sont majoritairement argileux. L&apos;argile retient l&apos;eau et exerce une pression importante sur les fondations et les murs enterrés des villas.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Jardins arborés denses</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Les grands jardins de la commune, souvent boisés, ralentissent l&apos;évaporation et maintiennent les sols saturés d&apos;eau. Les racines peuvent également endommager les canalisations et les fondations.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Villas des années 50–70</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Le parc immobilier de WSP, majoritairement construit entre 1950 et 1975, présente des fondations sans étanchéité horizontale et des sous-sols non traités qui absorbent l&apos;humidité du sol.</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Notre équipe intervient régulièrement dans les quartiers de Montgomery,
            Tomberg, Petite Suisse et des environs du parc de Woluwe. Nous adaptons
            nos techniques aux spécificités de chaque villa : épaisseur des murs,
            profondeur des fondations, type de sol.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos interventions à Woluwe-Saint-Pierre
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Drainage périphérique de villas",
              "Imperméabilisation des fondations",
              "Injection silicone anti-capillaire",
              "Assèchement de sous-sols",
              "Ventilation et déshumidification",
              "Traitement moisissures et mérule",
              "Diagnostic humidimétrique complet",
              "Réfection enduits et parements",
              "Conseil aménagement sous-sol",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Woluwe-Saint-Pierre</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Woluwe-Saint-Pierre */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Woluwe-Saint-Pierre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Sols argileux autour du parc de Woluwe</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Sous-sols des villas des années 50–70</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Manque de ventilation dans les maisons fermées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Terrasses et toitures des villas résidentielles</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Woluwe-Saint-Pierre</h2>
              <p className="text-gray-300 mb-4">Un technicien certifié se déplace dans toute la commune de Woluwe-Saint-Pierre pour évaluer votre situation. Gratuit et sans engagement.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à WSP et communes voisines</span>
              </div>
              <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0451 05 33 70
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Woluwe-Saint-Pierre" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
