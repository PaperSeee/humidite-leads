import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Uccle — Expert Local | Traitement Humidité Bruxelles",
  description:
    "Spécialiste traitement humidité à Uccle. Remontées capillaires dans villas art déco, caves humides, jardins en pente. Diagnostic gratuit, intervention 48h. 0451 05 33 70",
  alternates: {
    canonical:
      "https://traitement-humidite-bruxelles.be/communes/uccle",
  },
};

const faqs = [
  {
    question:
      "Pourquoi les maisons art déco d'Uccle sont-elles particulièrement touchées par les remontées capillaires ?",
    answer:
      "Les constructions des années 1930 à 1950, nombreuses à Uccle, n'intégraient pas de membrane d'étanchéité horizontale dans leurs fondations. L'humidité du sol remonte donc librement dans les murs par capillarité. Les sous-sols des villas uccleoises, souvent profonds, aggravent ce phénomène. Notre traitement par injection de résine silicone crée une barrière imperméable durable.",
  },
  {
    question:
      "Les jardins en pente à Uccle aggravent-ils les problèmes d'humidité ?",
    answer:
      "Oui, les terrains en déclivité favorisent la concentration des eaux de ruissellement contre les murs enterrés et les fondations. À Uccle, de nombreuses villas sont implantées sur des talus où les eaux de pluie s'accumulent en bas de pente. Un drainage périphérique combiné à un traitement d'imperméabilisation des fondations est souvent nécessaire.",
  },
  {
    question:
      "Mon sous-sol ucclois sent le moisi sans qu'on voie de l'humidité : est-ce grave ?",
    answer:
      "Une odeur de moisi révèle une humidité relative élevée, souvent supérieure à 70%, favorable au développement de moisissures et potentiellement de mérule. Même invisible, ce taux d'humidité dégrade les matériaux et nuit à la qualité de l'air intérieur. Un diagnostic avec hygromètre permet de mesurer l'ampleur du problème et d'agir avant que les dégâts ne deviennent visibles et coûteux.",
  },
  {
    question:
      "Combien coûte un traitement de remontée capillaire pour une villa à Uccle ?",
    answer:
      "Le coût dépend de la longueur de murs à traiter et de l'épaisseur des murs (souvent plus de 40 cm dans les constructions anciennes d'Uccle). À titre indicatif, comptez entre 80 et 150€ par mètre linéaire pour une injection silicone. Pour une villa standard avec cave, le budget se situe généralement entre 2.500 et 6.000€ selon l'ampleur des travaux. Notre devis est gratuit et sans engagement.",
  },
];

export default function UcclePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Uccle", href: "/communes/uccle" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Uccle" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-gray-300">Uccle</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">
              Expert local Uccle
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Uccle{" "}
              <span className="text-[#F97316]">— Expert Local</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Spécialiste des problèmes d&apos;humidité dans les villas et maisons
              de la commune d&apos;Uccle. Caves humides, remontées capillaires dans
              les constructions art déco, moisissures : nous connaissons les
              spécificités du bâti ucclois et apportons des solutions durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0451053370"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} />
                0451 05 33 70
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                Devis gratuit <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                L&apos;humidité à Uccle : une réalité du bâti historique
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Uccle est l&apos;une des communes bruxelloises les plus verdoyantes,
                mais aussi l&apos;une des plus touchées par les problèmes
                d&apos;humidité structurelle. La majorité du parc immobilier ucclois
                date des années 1930 à 1960 : villas art déco, maisons à
                colombages, habitations de style Beaux-Arts. Ces constructions,
                bien que charmeuses, n&apos;intègrent généralement pas de barrière
                d&apos;étanchéité dans leurs fondations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La topographie d&apos;Uccle — avec ses nombreuses collines, ses
                jardins en déclivité et ses sous-sols enterrés — crée des
                conditions idéales pour l&apos;accumulation d&apos;eau contre les murs.
                Les remontées capillaires sont le problème numéro un : l&apos;eau du
                sol remonte dans les briques et les pierres, dégradant peu à peu
                l&apos;enduit, gonflant la peinture et faisant apparaître le salpêtre.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Traitement Humidité Bruxelles intervient régulièrement à Uccle — dans les
                quartiers du Vivier d&apos;Oie, de Calevoet, du Prince d&apos;Orange et de
                Stalle — pour traiter durablement ces problèmes avec des
                techniques certifiées.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
                alt="Villa art déco Uccle avec problème d'humidité"
                width={600}
                height={420}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes spécifiques */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Problèmes d&apos;humidité spécifiques à Uccle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Remontées capillaires dans les villas années 30–50
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les briques et moellons des constructions d&apos;avant-guerre absorbent
                l&apos;humidité du terrain comme une éponge. Sans barrière
                d&apos;étanchéité, l&apos;eau peut monter jusqu&apos;à 1,5 mètre de hauteur dans
                les murs. Notre traitement par injection de résine silicone sous
                pression crée une barrière chimique permanente dans les joints de
                maçonnerie.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 text-[#F97316] rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Caves et sous-sols envahis par l&apos;eau
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les villas uccleoises disposent souvent de grandes caves
                semi-enterrées qui constituent des espaces de vie ou de stockage.
                La pression hydrostatique du sol, accentuée par les jardins en
                pente, fait pénétrer l&apos;eau à travers les parois et le dallage.
                Drainage périphérique, imperméabilisation et ventilation sont
                nos outils de prédilection.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Salpêtre et efflorescences
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ces dépôts blancs cristallisés sur les murs sont le signe
                visible d&apos;une remontée capillaire. Les sels minéraux transportés
                par l&apos;eau s&apos;accumulent en surface en séchant, dégradant les
                enduits et la peinture. Un traitement efficace doit s&apos;attaquer
                à la source, pas seulement aux symptômes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-100 text-red-500 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Infiltrations par toitures et cheminées anciennes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les toits à fortes pentes des villas uccleoises, souvent couverts
                d&apos;ardoises ou de tuiles mécaniques centenaires, présentent des
                risques d&apos;infiltration en cas de fissure ou de joint de
                cheminée défaillant. L&apos;eau pénètre dans la maçonnerie et provoque
                des taches brunes caractéristiques sur les plafonds et murs
                intérieurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos interventions */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos interventions à Uccle
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Notre équipe se déplace régulièrement dans toutes les parties de la
            commune : du quartier du Vivier d&apos;Oie aux rues calmes de Calevoet,
            en passant par les grandes avenues de Linkebeek ou les maisons de
            l&apos;avenue Brugmann. Nous adaptons nos méthodes aux matériaux
            traditionnels et aux spécificités architecturales de chaque bien.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Injection de résine silicone (remontée capillaire)",
              "Drainage périphérique de cave",
              "Imperméabilisation des murs enterrés",
              "Traitement fongicide (mérule, moisissures)",
              "Assèchement et réfection des enduits",
              "Contrôle ventilation et isolation",
              "Traitement salpêtre et efflorescences",
              "Diagnostic humidimétrique complet",
              "Rapport technique pour notaire/assureur",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Google */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            Vous avez fait appel à nos services ? Partagez votre expérience sur notre{" "}
            <span className="font-semibold text-[#1E3A5F]">fiche Google</span> — vos avis aident d&apos;autres habitants de la région.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes — Humidité à Uccle
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Uccle */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Uccle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Fréquente dans les villas art déco des années 30–50</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Cave humide = risque élevé de développement</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Toitures plates des extensions modernes</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Jardins en pente et fondations exposées</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">
                Votre diagnostic gratuit à Uccle
              </h2>
              <p className="text-gray-300 mb-6">
                Un technicien certifié se déplace chez vous à Uccle pour
                évaluer votre problème d&apos;humidité. Gratuit, sans engagement.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">
                  Intervention à Uccle et communes voisines
                </span>
              </div>
              <a
                href="tel:0451053370"
                className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4"
              >
                <Phone size={22} />
                0451 05 33 70
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">
                Demandez votre diagnostic
              </h3>
              <ContactForm defaultCommune="Uccle" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
