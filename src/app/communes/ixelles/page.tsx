import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Ixelles — Maisons de Maître | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Ixelles. Condensation sur toitures plates, maisons de maître, appartements anciens. Diagnostic gratuit, intervention rapide. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/ixelles",
  },
};

const faqs = [
  {
    question:
      "Les toitures plates des immeubles ixellois sont-elles particulièrement sujettes à l'humidité ?",
    answer:
      "Oui, les toitures plates de nombreux immeubles d'Ixelles — surtout ceux construits ou rénovés dans les années 60 à 80 — utilisent des étanchéités vieillissantes qui se fissures. L'eau s'infiltre alors dans la dalle de béton et descend progressivement vers les appartements du dernier étage. Un diagnostic thermographique peut identifier précisément les zones de fuite avant toute intervention.",
  },
  {
    question:
      "Comment gérer la condensation dans un appartement ixellois avec peu de ventilation ?",
    answer:
      "La condensation est fréquente dans les appartements anciens d'Ixelles, souvent transformés à partir de maisons de maître sans adaptation de la ventilation. La solution passe par l'installation d'une VMC simple flux ou double flux, l'amélioration de l'isolation des parois froides (ponts thermiques), et parfois un traitement hydrofuge des murs exposés. Nous proposons un audit complet pour identifier les mesures prioritaires.",
  },
  {
    question:
      "Peut-on traiter l'humidité dans une copropriété ixelloise sans accord de tous les copropriétaires ?",
    answer:
      "Cela dépend de la localisation du problème. Si l'humidité touche votre appartement privatif (murs, plafond), vous pouvez agir de votre propre initiative. Si elle provient de parties communes (toiture, cave, façade), une décision en assemblée générale est nécessaire. Nous pouvons établir un rapport technique précisant l'origine du problème pour faciliter vos démarches auprès du syndic.",
  },
  {
    question:
      "Les maisons de maître d'Ixelles présentent-elles des risques de mérule ?",
    answer:
      "Les maisons de maître ixelloises, avec leurs caves voûtées et leurs sous-sols mal ventilés, peuvent présenter des risques de mérule, surtout si elles ont connu des problèmes d'humidité prolongés. Le champignon se développe dans des espaces confinés avec un taux d'humidité supérieur à 70% et des matériaux cellulosiques (bois, carton). Une inspection régulière des caves et des planchers en bois est recommandée.",
  },
];

export default function IxellesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Ixelles", href: "/communes/ixelles" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Ixelles" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Ixelles</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">
              Expert local Ixelles
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Ixelles{" "}
              <span className="text-[#F97316]">— Maisons de Maître & Appartements</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Ixelles est une commune où le bâti historique cohabite avec des
              immeubles modernes. Maisons de maître transformées en appartements,
              toitures plates fuyantes, caves sans ventilation : nous connaissons
              les pathologies spécifiques du bâti ixellois et les traitons efficacement.
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Humidité à Ixelles : spécificités du bâti dense
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ixelles présente une densité bâtie très élevée avec une architecture
                variée allant des maisons de maître néoclassiques aux immeubles de
                rapport des années 1970. Cette mixité crée des défis particuliers en
                matière d&apos;humidité, notamment dans les logements en sous-sol, les
                caves transformées et les appartements sous toitures plates.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La condensation est le problème le plus fréquent à Ixelles. Dans les
                appartements densément occupés avec peu de surface de ventilation, la
                vapeur d&apos;eau produite par les activités quotidiennes — douche, cuisine,
                respiration — se condense sur les parois froides, créant des moisissures
                noires caractéristiques dans les angles et derrière les meubles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les maisons de maître des quartiers Ma Campagne, Châtelain ou Flagey,
                subdivisées en appartements, souffrent souvent d&apos;une transformation
                réalisée sans traitement d&apos;étanchéité des caves, entraînant des
                remontées d&apos;humidité dans les niveaux inférieurs.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
                alt="Maison de maître Ixelles traitement humidité"
                width={600}
                height={420}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Problèmes typiques à Ixelles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Condensation sur toitures plates
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les immeubles construits dans les années 1960–1980 à Ixelles
                disposent souvent de toitures plates dont l&apos;étanchéité est en fin
                de vie. L&apos;eau de pluie s&apos;accumule et pénètre dans la structure, créant
                des auréoles brunes au plafond des derniers étages. Nous réalisons
                des diagnostics par carottage ou thermographie infrarouge pour
                localiser précisément les zones d&apos;infiltration.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Caves communes non traitées
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dans les immeubles ixellois à appartements, les caves communes sont
                souvent les premières victimes de l&apos;humidité. Un sous-sol constamment
                humide dégrade les murs, produit des odeurs désagréables dans tout
                l&apos;immeuble et peut provoquer l&apos;apparition de mérule. Un traitement de
                la cave bénéficie à l&apos;ensemble de la copropriété.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Moisissures dans les appartements anciens
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les appartements issus de la transformation de maisons de maître
                présentent souvent des angles humides, des seuils de fenêtres
                moisissants et des salles de bains sans ventilation adéquate.
                Nos solutions combinent traitement de surface, amélioration de
                l&apos;isolation thermique et installation d&apos;extracteurs d&apos;air performants.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Infiltrations de façade
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les façades en pierre bleue ou en brique des maisons ixelloises
                vieillissent et voient leurs joints se dégrader. L&apos;eau de pluie
                pénètre alors dans la maçonnerie et apparaît à l&apos;intérieur sous
                forme de taches d&apos;humidité. Un rejointoiement et un traitement
                hydrofuge de la façade stoppent durablement ces infiltrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos interventions à Ixelles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement condensation et ventilation (VMC)",
              "Imperméabilisation toiture plate",
              "Injection silicone (remontée capillaire)",
              "Traitement mérule et moisissures",
              "Assèchement de caves communes",
              "Rejointoiement et hydrofugation de façade",
              "Rapport technique pour syndic/copropriété",
              "Isolation thermique intérieure",
              "Diagnostic thermographique infrarouge",
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

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes — Humidité à Ixelles
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Ixelles */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Ixelles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Maisons de maître sur terre argileuse</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Caves communes des immeubles anciens</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Toitures plates très répandues à Ixelles</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Façades exposées aux pluies battantes</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">
                Diagnostic gratuit à Ixelles
              </h2>
              <p className="text-gray-300 mb-4">
                Propriétaire ou locataire à Ixelles ? Contactez-nous pour un
                diagnostic complet, gratuit et sans engagement.
              </p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à Ixelles et communes limitrophes</span>
              </div>
              <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0489 57 65 65
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Ixelles" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
