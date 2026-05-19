import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Auderghem — Infiltrations Fondations | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Auderghem. Maisons 4 façades, infiltrations par fondations, jardins. Diagnostic gratuit, garantie 10 ans. Appelez le 0489 57 65 65.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/auderghem",
  },
};

const faqs = [
  {
    question: "Pourquoi les maisons 4 façades d'Auderghem sont-elles vulnérables aux infiltrations ?",
    answer: "Les maisons 4 façades d'Auderghem, entourées de jardins, exposent leurs quatre côtés aux intempéries. La pluie battante impacte directement les façades sur toute leur surface, et si les joints de maçonnerie sont dégradés ou les briques poreuses, l'eau s'infiltre dans la structure. De plus, le contact direct avec la terre du jardin facilite les remontées capillaires sur tout le périmètre.",
  },
  {
    question: "Comment protéger les fondations d'une maison auderghemoise contre l'humidité ?",
    answer: "La protection des fondations passe par plusieurs interventions complémentaires : un drainage périphérique pour éloigner l'eau du sol, l'application d'un enduit d'imperméabilisation sur les parois enterrées, et si nécessaire une injection de résine silicone dans les murs pour bloquer les remontées capillaires. Nous établissons un plan d'action personnalisé selon l'état de chaque habitation.",
  },
  {
    question: "Les jardins d'Auderghem favorisent-ils les problèmes d'humidité ?",
    answer: "Paradoxalement, oui. Les grands jardins d'Auderghem, souvent arrosés et plantés d'arbres, maintiennent les sols saturés. Les racines des arbres proches des fondations peuvent créer des voies d'eau dans la maçonnerie. Une plantation trop proche de la maison (moins de 3 mètres) est souvent une source de problèmes d'humidité que nous identifions lors du diagnostic.",
  },
];

export default function AuderghemPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Auderghem", href: "/communes/auderghem" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Auderghem" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Auderghem</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Auderghem</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Auderghem{" "}
              <span className="text-[#F97316]">— Maisons 4 Façades & Fondations</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Auderghem est une commune verdoyante où les maisons 4 façades dominent.
              Exposées sur tout leur périmètre, avec des jardins qui maintiennent
              les sols humides, ces habitations présentent des risques spécifiques
              d&apos;infiltration par les fondations et les façades. Nous intervenons
              avec des solutions adaptées à ce type de bâti.
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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Maison 4 façades à Auderghem avec problème d'infiltration par les fondations"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Humidité à Auderghem : le défi des maisons exposées</h2>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Auderghem, avec la forêt de Soignes en toile de fond, bénéficie d&apos;un
            cadre naturel exceptionnel mais aussi d&apos;un climat humide particulièrement
            marqué. Les maisons 4 façades qui composent l&apos;essentiel du parc immobilier
            communal sont exposées aux pluies sur toutes leurs surfaces, avec des
            fondations en contact direct avec des terres souvent gorgées d&apos;eau.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Les quartiers de Val Duchesse, du Rouge Cloître ou des abords du Parc
            Seny voient régulièrement des propriétaires faire appel à nos services.
            Les problèmes les plus fréquents sont les infiltrations par les fondations
            suite à des épisodes de pluie intense, les remontées capillaires dans les
            garages enterrés et les moisissures dans les sous-sols mal ventilés.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à Auderghem</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Drainage périphérique complet",
              "Imperméabilisation des fondations",
              "Injection silicone horizontale",
              "Hydrofugation de façades",
              "Traitement des garages enterrés",
              "Réfection de joint de maçonnerie",
              "Traitement moisissures",
              "Diagnostic humidimétrique",
              "Assèchement et rénovation d'enduits",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Auderghem</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Auderghem */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Auderghem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Maisons 4 façades sur terrain humide</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Caves isolées et peu ventilées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Maisons bien isolées mais sous-ventilées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Fondations et dalles de terrasse exposées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Auderghem</h2>
              <p className="text-gray-300 mb-4">Un expert Traitement Humidité Bruxelles se déplace chez vous à Auderghem pour évaluer vos problèmes d&apos;humidité. Gratuit, sans engagement.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à Auderghem et communes voisines</span>
              </div>
              <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0489 57 65 65
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Auderghem" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
