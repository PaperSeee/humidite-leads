import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Types d'Humidité : Identifier et Traiter | Traitement Humidité Bruxelles",
  description:
    "Guide complet des types d'humidité : remontée capillaire, mérule, condensation, infiltrations. Comment les identifier et les traiter efficacement à Bruxelles.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/types-humidite",
  },
};

export default function TypesHumiditePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Types d'humidité", href: "/types-humidite" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Types d'humidité" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Types d&apos;humidité</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Types d&apos;Humidité : Comment Identifier et Traiter
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Chaque problème d&apos;humidité a une origine spécifique et demande un
            traitement adapté. Découvrez comment identifier votre problème et quelles
            solutions apporter pour chaque type d&apos;humidité.
          </p>
        </div>
      </section>

      {/* Navigation interne */}
      <div className="bg-[#F8FAFC] border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm">
            <a href="#remontee-capillaire" className="text-[#1E3A5F] font-medium hover:text-[#F97316] whitespace-nowrap">Remontée capillaire</a>
            <a href="#merule" className="text-[#1E3A5F] font-medium hover:text-[#F97316] whitespace-nowrap">Mérule</a>
            <a href="#condensation" className="text-[#1E3A5F] font-medium hover:text-[#F97316] whitespace-nowrap">Condensation</a>
            <a href="#infiltrations" className="text-[#1E3A5F] font-medium hover:text-[#F97316] whitespace-nowrap">Infiltrations</a>
          </div>
        </div>
      </div>

      {/* 1. Remontée capillaire */}
      <section id="remontee-capillaire" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">1</span>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Traitement disponible</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Remontée capillaire
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La remontée capillaire est le problème d&apos;humidité le plus répandu
                en Belgique, particulièrement dans les constructions antérieures à 1960
                qui ne disposaient pas de barrière d&apos;étanchéité horizontale dans leurs
                fondations. L&apos;eau du sol s&apos;infiltre dans les matériaux de construction
                poreux (brique, pierre, mortier) par capillarité et monte jusqu&apos;à
                80–120 cm de hauteur dans les murs.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Symptômes à identifier :</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Salpêtre (dépôts blancs cristallisés) en bas des murs",
                  "Peinture qui cloque, gonfle ou se détache",
                  "Enduit friable et poudrant",
                  "Taches d'humidité sur les 80 premiers centimètres des murs",
                  "Odeur de terre ou de moisi dans les pièces basses",
                  "Moisissures noires sur les plinthes et angles bas",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-900 mb-3">Causes principales :</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Absence de coupure de capillarité dans les fondations (constructions
                avant 1960), dégradation de la barrière d&apos;origine, murs enterrés sans
                protection, canalisations fuyardes enterrées près des fondations.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Solutions et traitements :</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Injection de résine silicone (méthode principale)</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Des trous sont forés dans le mur à 15–25 cm du sol et de la résine
                    silicone hydrophobe est injectée sous pression. En polymérisant dans
                    les pores de la maçonnerie, elle crée une barrière chimique
                    imperméable sur toute l&apos;épaisseur du mur. Garantie 10 ans.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Drain périphérique (pour les fortes pressions)</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Installation d&apos;un système de drainage autour des fondations pour
                    collecter et évacuer l&apos;eau avant qu&apos;elle n&apos;atteigne les murs.
                    Efficace en cas de nappe phréatique haute ou de terrain argileux.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Remontée capillaire dans un mur"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full mb-4"
                loading="lazy"
              />
              <div className="bg-[#1E3A5F] text-white rounded-xl p-4">
                <p className="font-semibold mb-1">Tarif indicatif :</p>
                <p className="text-[#F97316] text-lg font-bold">80 – 150 € / mètre linéaire</p>
                <p className="text-gray-300 text-xs mt-1">Devis gratuit — Prix selon épaisseur des murs et longueur à traiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mérule */}
      <section id="merule" className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold">2</span>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase">URGENCE — Intervention immédiate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Mérule (Serpula lacrymans)
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-start gap-3">
                <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm font-semibold">
                  La mérule est une urgence absolue. Ce champignon peut détruire
                  la structure en bois d&apos;une habitation en quelques mois. N&apos;attendez pas.
                </p>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La mérule (Serpula lacrymans) est le champignon lignivore le plus
                destructeur qui existe. Elle se développe dans les espaces confinés
                et humides (caves, sous-planchers, murs creux) et dévore littéralement
                le bois en quelques mois, le rendant sec, brun et friable comme du café.
                Elle peut traverser les murs en maçonnerie pour atteindre d&apos;autres
                éléments en bois et contaminer les habitations voisines.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Symptômes à identifier :</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Filaments blancs cotonneux ou grisâtres sur les murs et bois",
                  "Plaques orange/rouille (fructifications du champignon)",
                  "Bois qui sonne creux et s'effrite sous la pression",
                  "Odeur forte de champignon de cave",
                  "Bois brun avec des fissures cubiques caractéristiques",
                  "Mycelium blanc sous les papiers peints ou parquets",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <AlertTriangle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-900 mb-3">Traitement de la mérule :</h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">1. Diagnostic et cartographie</p>
                  <p className="text-gray-600 text-xs">Identification de toutes les zones contaminées, même cachées, avant intervention.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">2. Élimination des bois contaminés</p>
                  <p className="text-gray-600 text-xs">Dépose et évacuation sécurisée de tous les bois touchés selon les normes sanitaires.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">3. Traitement fongicide professionnel</p>
                  <p className="text-gray-600 text-xs">Application de fongicide professionnel sur toutes les surfaces (murs, bois sains) pour éradiquer le champignon.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">4. Traitement de la source d&apos;humidité</p>
                  <p className="text-gray-600 text-xs">Élimination de la cause (remontée capillaire, infiltration) pour éviter la récidive.</p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Traitement mérule expert Bruxelles"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full mb-4"
                loading="lazy"
              />
              <div className="bg-red-600 text-white rounded-xl p-4">
                <p className="font-semibold mb-1">Tarif indicatif :</p>
                <p className="text-yellow-300 text-lg font-bold">25 – 45 € / m²</p>
                <p className="text-red-200 text-xs mt-1">Devis urgent possible sous 24h — N&apos;attendez pas pour appeler</p>
                <a href="tel:0451053370" className="flex items-center gap-2 mt-2 text-white font-bold">
                  <Phone size={16} />0451 05 33 70
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Condensation */}
      <section id="condensation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold">3</span>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Problème très fréquent</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Humidité de condensation
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La condensation est la forme d&apos;humidité la plus fréquente dans les
                logements belges contemporains. Elle se produit quand l&apos;air chaud et
                humide de l&apos;intérieur entre en contact avec des parois froides. L&apos;air
                ne peut plus retenir toute sa vapeur d&apos;eau et celle-ci se dépose sur
                les surfaces : fenêtres, angles de murs, carrelages de salle de bains.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Symptômes :</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Buée sur les vitres le matin",
                  "Moisissures noires dans les angles de murs et plafonds",
                  "Traces noires sur les joints de carrelage",
                  "Odeur de renfermé",
                  "Parois froides au toucher en hiver",
                  "Taches sombres derrière les meubles collés aux murs",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-900 mb-3">Solutions :</h3>
              <div className="space-y-3">
                <div className="bg-teal-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Ventilation mécanique contrôlée (VMC)</p>
                  <p className="text-gray-600 text-xs">Installation d&apos;une VMC simple ou double flux qui renouvelle l&apos;air en permanence et évacue la vapeur d&apos;eau produite par les occupants. Solution durable et efficace.</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Isolation thermique des parois froides</p>
                  <p className="text-gray-600 text-xs">Doublage intérieur des murs froids avec des matériaux isolants pour supprimer les ponts thermiques où se concentre la condensation.</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Traitement curatif des moisissures</p>
                  <p className="text-gray-600 text-xs">Nettoyage et traitement fongicide des zones touchées avant la mise en place des solutions préventives.</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
                alt="Problème de condensation et moisissures"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infiltrations */}
      <section id="infiltrations" className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold">4</span>
                <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Sources multiples possibles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Infiltrations d&apos;eau
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Les infiltrations d&apos;eau résultent d&apos;une pénétration d&apos;eau depuis
                l&apos;extérieur à travers des défauts de l&apos;enveloppe du bâtiment : toiture
                défaillante, joint de terrasse fissuré, façade poreuse ou fissurée.
                Contrairement aux remontées capillaires, les infiltrations apparaissent
                généralement après des épisodes de pluie et peuvent toucher tous les
                niveaux du bâtiment.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Sources d&apos;infiltration :</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { title: "Toiture", desc: "Tuiles fêlées, joints de cheminée défaillants, gouttières obstruées" },
                  { title: "Façade", desc: "Joints de maçonnerie dégradés, briques poreuses, fissures" },
                  { title: "Terrasse", desc: "Étanchéité vieillissante, joints de margelles fissurés" },
                  { title: "Fondations", desc: "Pression hydrostatique, joints de dilatation, fissures structurelles" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-3 border border-gray-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-gray-900 mb-3">Diagnostic et traitement :</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Identifier précisément la source d&apos;une infiltration demande une expertise
                technique : test de pluie, thermographie infrarouge, sonde d&apos;humidité.
                Notre diagnostic complet permet d&apos;intervenir au bon endroit pour stopper
                durablement l&apos;infiltration plutôt que de traiter les symptômes.
              </p>
              <ul className="space-y-2">
                {[
                  "Réfection d'étanchéité de toiture plate",
                  "Rejointoiement et hydrofugation de façade",
                  "Reprise d'étanchéité de terrasse",
                  "Injection de fissures structurelles",
                  "Imperméabilisation de fondations",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
                alt="Infiltration d'eau par toiture ou façade"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vous avez identifié votre problème ?</h2>
          <p className="text-gray-300 mb-8">
            Contactez-nous pour un diagnostic gratuit. Nos experts identifieront
            précisément le type d&apos;humidité et vous proposeront le traitement adapté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={18} />Appeler maintenant
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors">
              Formulaire de contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Demandez votre diagnostic gratuit</h2>
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
