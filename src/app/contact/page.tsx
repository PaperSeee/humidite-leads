import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact — Diagnostic Gratuit Humidité Bruxelles | Traitement Humidité Bruxelles",
  description:
    "Contactez Traitement Humidité Bruxelles pour votre diagnostic gratuit humidité. Formulaire en ligne, téléphone 0489 57 65 65. Réponse sous 2h en heures ouvrables.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Contactez-Nous — Diagnostic Gratuit
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Prenez contact avec nos experts pour votre diagnostic d&apos;humidité
            gratuit. Nous vous répondons sous 2 heures en heures ouvrables.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Infos de contact */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                      <Phone size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Téléphone</p>
                      <a href="tel:0489576565" className="text-[#1E3A5F] font-bold text-lg hover:text-[#F97316] transition-colors">
                        0489 57 65 65
                      </a>
                      <p className="text-gray-500 text-xs">Urgences 7j/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                      <Mail size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <a href="mailto:contact@traitement-humidite-bruxelles.be" className="text-[#1E3A5F] text-sm hover:text-[#F97316] transition-colors break-all">
                        contact@traitement-humidite-bruxelles.be
                      </a>
                      <p className="text-gray-500 text-xs">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                      <MapPin size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Zone d&apos;intervention</p>
                      <p className="text-gray-600 text-sm">Bruxelles et communes limitrophes</p>
                      <p className="text-gray-500 text-xs">19 communes BXL + environs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                      <Clock size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Horaires</p>
                      <p className="text-gray-600 text-sm">Lun–Ven : 8h00–18h00</p>
                      <p className="text-gray-600 text-sm">Sam : 9h00–15h00</p>
                      <p className="text-[#F97316] text-sm font-medium">Urgences 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Pourquoi nous appeler ?</h3>
                <ul className="space-y-2">
                  {[
                    "Diagnostic gratuit et sans engagement",
                    "Intervention possible sous 48h",
                    "Devis écrit et transparent",
                    "Garantie 10 ans sur les travaux",
                    "Assurance RC Pro",
                    "500+ chantiers réalisés à Bruxelles",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-[#F97316] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] text-white rounded-xl p-5">
                <h3 className="font-bold mb-2">Urgence mérule ?</h3>
                <p className="text-gray-300 text-sm mb-3">
                  La mérule est une urgence absolue. Appelez-nous immédiatement
                  pour une intervention prioritaire.
                </p>
                <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold">
                  <Phone size={18} />0489 57 65 65
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Formulaire de contact gratuit
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Remplissez le formulaire ci-dessous et un expert vous contactera
                  sous 2h en heures ouvrables pour convenir d&apos;un rendez-vous
                  de diagnostic.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
