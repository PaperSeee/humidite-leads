import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Molenbeek-Saint-Jean — Canal & Rénovation | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Molenbeek-Saint-Jean. Bâti canal, caves humides, moisissures rénovation. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/molenbeek-saint-jean",
  },
};

const faqs = [
  {
    question: "Les projets de rénovation à Molenbeek doivent-ils traiter l'humidité en priorité ?",
    answer: "Absolument. Rénover sans traiter l'humidité sous-jacente est la première erreur que font les propriétaires. Un nouveau plâtre ou une nouvelle peinture posés sur un mur humide s'écaillent en quelques mois. On recommande de faire le diagnostic humidité en tout premier, avant les travaux de finition, pour traiter la cause et non les symptômes.",
  },
  {
    question: "Les caves de Molenbeek inondent lors de fortes pluies — que faire ?",
    answer: "Les inondations de cave lors de fortes pluies sont souvent dues à une remontée de la nappe phréatique ou à des infiltrations par les joints de la dalle. On installe dans ce cas un système de drainage intérieur avec pompe de relevage pour évacuer l'eau avant qu'elle n'atteigne le niveau de la cave. C'est une solution définitive qui s'adapte à tous les bâtiments.",
  },
  {
    question: "Peut-on traiter l'humidité dans un bâtiment occupé par des locataires ?",
    answer: "Oui, la plupart de nos interventions se font en présence des occupants. Le traitement par injection silicone ne nécessite pas de vider les pièces — on fore simplement des trous dans les murs à la base et on injecte la résine. Les pièces sont utilisables immédiatement après. Pour les caves, on demande juste que l'espace soit accessible le temps de l'intervention.",
  },
];

export default function MolenbeekSaintJeanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Molenbeek-Saint-Jean", href: "/communes/molenbeek-saint-jean" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Molenbeek-Saint-Jean" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Molenbeek-Saint-Jean</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Molenbeek</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Molenbeek-Saint-Jean{" "}
              <span className="text-[#F97316]">— Canal & Bâti Ancien</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Molenbeek-Saint-Jean, en pleine transformation, présente un bâti ancien
              souvent négligé dont l&apos;humidité est l&apos;une des premières sources de dégradation.
              Caves humides, remontées capillaires et moisissures — on traite les causes
              avant que la rénovation ne soit gâchée.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Molenbeek : bâti ancien et canal</h2>
              <p className="text-gray-600 mb-4">
                Molenbeek connaît une vague de rénovations, mais nombreux sont les biens
                dont l&apos;humidité n&apos;a jamais été traitée. Les <strong>maisons de rapport
                des années 1880–1940</strong> ont des fondations sans protection étanche
                et des caves en brique qui suintent depuis leur construction.
              </p>
              <p className="text-gray-600 mb-4">
                La proximité du <strong>canal de Bruxelles</strong> maintient la nappe
                phréatique haute dans toute la partie nord de la commune. Les remontées
                capillaires y sont particulièrement virulentes et peuvent endommager
                les nouveaux revêtements quelques mois après une rénovation non traitée.
              </p>
              <p className="text-gray-600">
                On recommande un <strong>diagnostic humidité avant tout projet de rénovation</strong>
                à Molenbeek pour identifier les problèmes et les traiter dans l&apos;ordre logique :
                humidité d&apos;abord, finitions ensuite.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Molenbeek</h3>
                <ul className="space-y-2">
                  {[
                    "Remontées capillaires bâti ancien",
                    "Caves humides maisons de rapport",
                    "Moisissures après rénovation non traitée",
                    "Infiltrations depuis canal côté nord",
                    "Condensation logements peu ventilés",
                    "Salpêtre murs brique d'origine",
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
                <p className="text-sm text-gray-600">Toute la commune de Molenbeek-Saint-Jean, canal inclus. On intervient aussi en coordination avec les équipes de rénovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Molenbeek-Saint-Jean</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Molenbeek-Saint-Jean</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Anderlecht", slug: "anderlecht" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Jette", slug: "jette" }].map((c) => (
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
