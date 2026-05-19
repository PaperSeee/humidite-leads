import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Etterbeek — Appartements Haussmanniens | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Etterbeek. Appartements haussmanniens, caves communes, condensation. Diagnostic gratuit, intervention rapide. 0451 05 33 70",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/etterbeek",
  },
};

const faqs = [
  {
    question: "Les appartements anciens d'Etterbeek sont-ils plus touchés par la condensation ?",
    answer: "Oui, les appartements des immeubles haussmanniens d'Etterbeek, construits avec des murs épais en pierre ou en brique, ont des parois qui se refroidissent rapidement en hiver. La vapeur d'eau intérieure se condense sur ces surfaces froides, créant des moisissures dans les angles, derrière les meubles et sur les châssis de fenêtres. Une isolation thermique intérieure (doublage) ou une amélioration de la ventilation résout généralement le problème.",
  },
  {
    question: "Qui est responsable de l'humidité dans une cave commune à Etterbeek ?",
    answer: "Dans un immeuble en copropriété à Etterbeek, la cave commune est une partie commune dont l'entretien et la réparation incombent à la copropriété, donc au syndic. Si l'humidité dans votre cave privative provient d'une infiltration par les parties communes (murs mitoyens, dalles), c'est à la copropriété d'intervenir. Nous fournissons des rapports techniques qui précisent l'origine du problème pour faciliter ces démarches.",
  },
  {
    question: "Comment éviter que la condensation revienne dans mon appartement etterbeekois ?",
    answer: "La prévention de la condensation repose sur trois piliers : ventiler correctement (aérer 10 minutes par jour, même en hiver), chauffer régulièrement (éviter les pièces froides non chauffées), et éliminer les ponts thermiques (angles de murs, jonctions plancher-mur). Dans les cas persistants, l'installation d'une VMC hygroréglable automatise la ventilation et réduit durablement le risque de condensation.",
  },
];

export default function EtterbeekPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Etterbeek", href: "/communes/etterbeek" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Etterbeek" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Etterbeek</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Etterbeek</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Etterbeek{" "}
              <span className="text-[#F97316]">— Appartements & Caves Communes</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Etterbeek abrite un bâti dense composé d&apos;immeubles haussmanniens du
              début du XXe siècle avec leurs caractéristiques caves communes. La
              condensation dans les appartements et l&apos;humidité des espaces communs
              sont nos domaines d&apos;intervention privilégiés dans cette commune.
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
              alt="Cave commune humide dans un immeuble haussmannien d'Etterbeek"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etterbeek : condensation et humidité en milieu dense</h2>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Etterbeek est l&apos;une des communes les plus densément peuplées de
            Bruxelles-Capitale. Ses immeubles de rapport des années 1900 à 1930,
            avec leurs grandes pièces, leurs hauts plafonds et leurs fenêtres à
            guillotine, présentent des caractéristiques thermiques qui favorisent
            la condensation en période hivernale.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Les caves communes des immeubles etterbeekois, souvent inaccessibles
            pendant des années, accumulent l&apos;humidité sans ventilation suffisante.
            Cette humidité diffuse vers les appartements des rez-de-chaussée, créant
            des problèmes de moisissures récurrents malgré les tentatives de peinture
            anti-humidité des occupants.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Nous intervenons dans les quartiers du Cinquantenaire, de la Chasse
            Royale et des environs de la place Montgomery pour diagnostiquer avec
            précision ces problèmes complexes et apporter des solutions durables.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à Etterbeek</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement condensation (VMC, isolation)",
              "Assèchement de caves communes",
              "Rapport technique pour syndic",
              "Injection silicone (remontées capillaires)",
              "Traitement moisissures noires",
              "Isolation thermique intérieure",
              "Ventilation hygroréglable",
              "Diagnostic thermographique",
              "Imperméabilisation murs enterrés",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Etterbeek</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Etterbeek */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Etterbeek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Immeubles haussmanniens sur caves voûtées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Caves communes des copropriétés</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Appartements anciens avec ponts thermiques</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Toitures et façades des immeubles XIXe</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Etterbeek</h2>
              <p className="text-gray-300 mb-4">Propriétaire ou locataire à Etterbeek ? Faites diagnostiquer votre problème d&apos;humidité gratuitement par nos experts.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à Etterbeek et communes voisines</span>
              </div>
              <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0451 05 33 70
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Etterbeek" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
