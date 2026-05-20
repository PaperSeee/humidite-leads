import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Saint-Josse-ten-Noode — Immeubles Denses | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Saint-Josse-ten-Noode. Immeubles denses, caves collectives, condensation. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/saint-josse-ten-noode",
  },
};

const faqs = [
  {
    question: "Comment traiter l'humidité dans une cave collective d'immeuble à Saint-Josse ?",
    answer: "La cave collective est une partie commune — toute intervention nécessite l'accord du syndic ou une décision d'assemblée générale. On fournit un rapport d'état préalable avec photos et mesures humidimétrique pour documenter le problème et faciliter la décision en AG. Une fois autorisé, on traite l'ensemble de la cave en une ou deux journées selon la surface.",
  },
  {
    question: "La condensation dans nos appartements à Saint-Josse — est-ce lié à la densité ?",
    answer: "Partiellement. La forte densité d'occupation (plusieurs personnes dans un petit appartement) génère une humidité de l'air élevée. Si la ventilation est insuffisante et les murs peu isolés, cette humidité condense sur les surfaces froides. La solution combine ventilation mécanique contrôlée (VMC) ou au minimum des bouches d'aération, et traitement des moisissures existantes.",
  },
  {
    question: "Peut-on traiter l'humidité sans vider l'appartement ?",
    answer: "Dans la grande majorité des cas, oui. Le traitement par injection dans les murs se fait sans déménager les meubles — on déplace simplement ce qui est devant la zone à traiter. Pour les caves, elles doivent être accessibles mais pas nécessairement vides. On s'adapte à chaque configuration pour minimiser la perturbation des occupants.",
  },
];

export default function SaintJossePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Saint-Josse-ten-Noode", href: "/communes/saint-josse-ten-noode" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Saint-Josse-ten-Noode" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Saint-Josse-ten-Noode</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Saint-Josse</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Saint-Josse-ten-Noode{" "}
              <span className="text-[#F97316]">— Immeubles & Caves Collectives</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              La commune la plus dense de Belgique concentre des immeubles anciens
              avec des caves collectives souvent humides et des appartements sujets
              à la condensation. On intervient en coordination avec les syndics
              et gestionnaires pour des traitements efficaces et documentés.
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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Saint-Josse : immeuble et copropriété</h2>
              <p className="text-gray-600 mb-4">
                Saint-Josse-ten-Noode est quasi entièrement constitué d&apos;<strong>immeubles
                à appartements</strong> construits entre 1900 et 1970. Ces bâtiments ont des
                caves collectives dont les murs en brique n&apos;ont jamais reçu de traitement
                hydrofuge — l&apos;humidité y est souvent persistante depuis des décennies.
              </p>
              <p className="text-gray-600 mb-4">
                La forte densité d&apos;occupation génère une <strong>production de vapeur d&apos;eau
                intense</strong> (respiration, cuisine, douches) qui, faute de ventilation
                suffisante, condense sur les murs froids et les fenêtres. Les moisissures
                qui en résultent sont le problème d&apos;humidité le plus visible dans les
                appartements saint-jossois.
              </p>
              <p className="text-gray-600">
                Pour les copropriétés, on établit un <strong>rapport d&apos;état complet</strong>
                avec recommandations prioritaires, utilisable en assemblée générale pour
                décider des interventions sur les parties communes.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Saint-Josse</h3>
                <ul className="space-y-2">
                  {[
                    "Caves collectives humides depuis des décennies",
                    "Remontées capillaires fondations immeubles anciens",
                    "Condensation appartements suroccupés",
                    "Moisissures coins et salles de bain",
                    "Infiltrations toitures plates immeubles",
                    "Humidité parties communes (couloirs, caves)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-[#F97316]" />
                  <span className="font-semibold text-gray-900 text-sm">Zone couverte</span>
                </div>
                <p className="text-sm text-gray-600">Toute la commune de Saint-Josse-ten-Noode, chaussée de Haecht et rues intérieures incluses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Saint-Josse-ten-Noode</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Saint-Josse-ten-Noode</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Schaerbeek", slug: "schaerbeek" }, { name: "Etterbeek", slug: "etterbeek" }, { name: "Bruxelles-Ville", slug: "bruxelles" }].map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1E3A5F] hover:text-[#1E3A5F] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors">
                <MapPin size={12} className="text-[#F97316]" />{c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
