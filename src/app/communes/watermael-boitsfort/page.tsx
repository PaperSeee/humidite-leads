import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Watermael-Boitsfort — Mousses & Verdure | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Watermael-Boitsfort. Humidité biologique, mousses sur façades, maisons dans la verdure. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/watermael-boitsfort",
  },
};

const faqs = [
  {
    question: "Qu'est-ce que l'humidité biologique et pourquoi touche-t-elle surtout Watermael-Boitsfort ?",
    answer: "L'humidité biologique désigne le développement de micro-organismes (mousses, lichens, algues, moisissures) sur les surfaces humides. À Watermael-Boitsfort, la proximité de la forêt de Soignes crée un microclimat humide avec peu d'ensoleillement pour de nombreuses habitations. Les façades nord exposées à l'ombre accumulent l'humidité et voient se développer des mousses et des algues qui dégradent les matériaux.",
  },
  {
    question: "Les mousses sur ma façade à Watermael-Boitsfort sont-elles dangereuses ?",
    answer: "Les mousses et lichens ne sont pas immédiatement dangereux pour la structure, mais ils retiennent l'humidité contre les parois et accélèrent la dégradation des joints et des briques. À terme, cette humidité persistante peut provoquer des infiltrations et favoriser le développement de mérule dans les poutres en bois. Un traitement algicide suivi d'une hydrofugation prévient cette dégradation progressive.",
  },
  {
    question: "Comment traiter une façade recouverte de mousses à WB ?",
    answer: "Le traitement se fait en plusieurs étapes : nettoyage haute pression à l'eau chaude pour éliminer les mousses, application d'un traitement algicide et fongicide pour détruire les micro-organismes résiduels, puis protection par un hydrofuge pénétrant qui empêche la réhumidification de la façade. Ce traitement dure généralement 5 à 10 ans selon l'exposition de la façade.",
  },
];

export default function WatermaeBoitsfortPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Watermael-Boitsfort", href: "/communes/watermael-boitsfort" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Watermael-Boitsfort" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Watermael-Boitsfort</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local WB</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Watermael-Boitsfort{" "}
              <span className="text-[#F97316]">— Humidité Biologique & Façades</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              La commune la plus boisée de Bruxelles, au carrefour de la forêt de Soignes,
              offre un cadre de vie exceptionnel mais génère aussi une humidité ambiante
              particulière. Mousses sur façades, lichens, moisissures biologiques :
              Traitement Humidité Bruxelles traite ces pathologies spécifiques au bâti forestier.
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Façade humide avec mousses biologiques — maison à Watermael-Boitsfort en milieu boisé"
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full max-h-72"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Un microclimat humide aux conséquences uniques
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Humidité ambiante élevée</h3>
              <p className="text-gray-600 text-sm leading-relaxed">La proximité de la forêt de Soignes maintient un taux d&apos;humidité atmosphérique constamment élevé à Watermael-Boitsfort, notamment dans les secteurs de la Drève des Tumuli et du Logis. Les façades absorbent cette humidité ambiante.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Façades ombragées</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Les grands arbres qui bordent les maisons de WB projettent une ombre continue sur les façades, empêchant le séchage naturel après la pluie. Les façades nord restent humides des journées entières, favorisant les développements biologiques.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Maisons de caractère anciennes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Les maisons de style Cité-Jardin de WB, avec leurs briques apparentes et leurs toitures en tuiles, présentent des joints de maçonnerie qui se dégradent avec le temps et laissent pénétrer l&apos;humidité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos interventions à Watermael-Boitsfort</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traitement algicide et fongicide façade",
              "Nettoyage haute pression à l'eau chaude",
              "Hydrofugation de façades en brique",
              "Rejointoiement maçonnerie",
              "Injection silicone anti-capillaire",
              "Traitement moisissures intérieures",
              "Ventilation VMC hygroréglable",
              "Traitement toitures (mousses tuiles)",
              "Imperméabilisation sous-sols",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">FAQ — Humidité à Watermael-Boitsfort</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nos services à Watermael-Boitsfort */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            Nos services à Watermael-Boitsfort
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/remontee-capillaire" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Remontée capillaire</span>
              <p className="text-sm text-gray-600">Terrain boisé = sol saturé en humidité</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/merule" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Mérule</span>
              <p className="text-sm text-gray-600">Humidité biologique liée à la végétation dense</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/condensation" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Condensation</span>
              <p className="text-sm text-gray-600">Maisons dans la verdure, peu de circulation d&apos;air</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
            <Link href="/services/infiltrations" className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#F97316] hover:shadow-sm transition-all">
              <span className="font-semibold text-gray-900">Infiltrations</span>
              <p className="text-sm text-gray-600">Mousses et végétation dégradent les toitures</p>
              <span className="text-[#F97316] text-sm font-semibold">En savoir plus →</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Diagnostic gratuit à Watermael-Boitsfort</h2>
              <p className="text-gray-300 mb-4">Confiez votre bien à des spécialistes de l&apos;humidité en milieu boisé. Diagnostic gratuit, solutions durables adaptées.</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Intervention à WB et communes voisines</span>
              </div>
              <a href="tel:0489576565" className="flex items-center gap-2 text-[#F97316] font-bold text-xl mt-4">
                <Phone size={22} />0489 57 65 65
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-5">Demandez votre diagnostic</h3>
              <ContactForm defaultCommune="Watermael-Boitsfort" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
