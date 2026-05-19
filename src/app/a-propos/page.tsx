import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Award, Shield, Users, Star } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "À Propos de Traitement Humidité Bruxelles — Expert Humidité depuis 10 ans",
  description:
    "Traitement Humidité Bruxelles, votre expert en traitement d'humidité depuis plus de 10 ans. Certifiés, assurés RC Pro, garantie 10 ans, 500+ chantiers réalisés en région bruxelloise.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/a-propos",
  },
};

export default function AProposPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">À propos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            À Propos de Traitement Humidité Bruxelles
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Votre expert en traitement de l&apos;humidité en région bruxelloise depuis
            plus de 10 ans. Une équipe certifiée, des méthodes éprouvées, une
            garantie sans égale.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Notre histoire</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Une expertise au service des habitations bruxelloises
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Traitement Humidité Bruxelles a été fondé il y a plus de 10 ans par une équipe
                de professionnels passionnés par la préservation du patrimoine
                immobilier bruxellois. Face au constat que de nombreux propriétaires
                se retrouvaient démunis face aux problèmes d&apos;humidité chronique
                dans leurs habitations, nous avons développé une approche complète
                et certifiée du traitement de l&apos;humidité.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Notre équipe connaît parfaitement le bâti bruxellois dans toute
                sa diversité : des maisons de maître art nouveau de Saint-Gilles
                aux villas art déco d&apos;Uccle, en passant par les maisons ouvrières
                de Forest et les copropriétés modernes de Woluwe. Chaque type de
                construction présente ses spécificités, et nos techniciens adaptent
                leurs méthodes en conséquence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Aujourd&apos;hui, avec plus de 500 chantiers réalisés dans les 9
                communes où nous sommes spécialisés, Traitement Humidité Bruxelles s&apos;est
                imposé comme une référence régionale en matière de traitement
                de l&apos;humidité. Notre taux de satisfaction client dépasse 97%
                et notre garantie 10 ans témoigne de notre confiance dans
                nos méthodes.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Équipe Traitement Humidité Bruxelles en intervention"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs et chiffres */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Traitement Humidité Bruxelles en chiffres</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "Années d'expérience", icon: Award },
              { number: "500+", label: "Chantiers réalisés", icon: CheckCircle },
              { number: "97%", label: "Clients satisfaits", icon: Star },
              { number: "10 ans", label: "Garantie travaux", icon: Shield },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <item.icon size={28} className="text-[#F97316] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#1E3A5F] mb-1">{item.number}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notre équipe et nos certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Notre équipe de techniciens certifiés suit régulièrement des
                formations pour se tenir à jour des dernières techniques et
                réglementations en matière de traitement de l&apos;humidité. Chaque
                technicien dispose d&apos;un certificat de formation aux techniques
                d&apos;injection silicone, au diagnostic de la mérule et aux méthodes
                de traitement des pathologies du bâtiment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous travaillons exclusivement avec des produits professionnels
                homologués, testés et approuvés pour leur efficacité et leur
                respect de l&apos;environnement. Nos fournisseurs sont des leaders
                européens du secteur, et tous nos produits disposent de fiches
                techniques et de données de sécurité à votre disposition.
              </p>
              <div className="space-y-3">
                {[
                  "Certification traitement remontées capillaires par injection",
                  "Formation diagnostic et traitement mérule",
                  "Habilitation produits biocides professionnels (EU BPR)",
                  "Assurance responsabilité civile professionnelle",
                  "Formation continue annuelle",
                  "Membre de l'Association Belge des Experts en Bâtiment",
                ].map((cert) => (
                  <div key={cert} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={20} className="text-[#F97316]" />
                Nos engagements
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Transparence totale",
                    desc: "Devis détaillé remis par écrit avant tout début de travaux. Pas de surprise sur la facture.",
                  },
                  {
                    title: "Respect de votre bien",
                    desc: "Nos techniciens travaillent avec soin pour minimiser les perturbations et préserver votre intérieur.",
                  },
                  {
                    title: "Suivi post-travaux",
                    desc: "Nous restons disponibles après le chantier pour répondre à vos questions et assurer le suivi.",
                  },
                  {
                    title: "Garantie sans condition",
                    desc: "Notre garantie 10 ans est formalisée par écrit. Problème récurrent = retour gratuit.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Faites confiance aux experts en humidité de Bruxelles
          </h2>
          <p className="text-gray-300 mb-8">
            Avec 10 ans d&apos;expérience et plus de 500 chantiers réalisés, Traitement Humidité Bruxelles
            Bruxelles est votre partenaire de confiance pour tous vos problèmes
            d&apos;humidité. Contactez-nous pour un diagnostic gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={18} />0451 05 33 70
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
