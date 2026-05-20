import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Traitement Humidité Berchem-Sainte-Agathe — Villas Lotissements | Traitement Humidité Bruxelles",
  description:
    "Expert humidité à Berchem-Sainte-Agathe. Villas années 60–70, infiltrations dalle, condensation. Diagnostic gratuit. 0489 57 65 65",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/communes/berchem-sainte-agathe",
  },
};

const faqs = [
  {
    question: "Notre villa de 1965 à Berchem a une dalle de cave qui suinte — que faire ?",
    answer: "Une dalle de cave qui suinte indique une remontée par pression hydrostatique depuis le bas — la nappe phréatique ou les eaux de ruissellement exercent une pression sous la dalle. La solution est une imperméabilisation intérieure par enduit drainant ou un système de drainage sous dalle avec pompe de relevage. On choisit la méthode après diagnostic selon la pression et le débit d'eau observé.",
  },
  {
    question: "Les travaux d'isolation récents de notre villa ont aggravé l'humidité — pourquoi ?",
    answer: "C'est un phénomène classique. Une isolation extérieure ou intérieure bien étanche modifie l'équilibre hydrique du mur. Si une humidité résiduelle était présente mais s'évaporait naturellement, l'isolation l'emprisonne et aggrave les dégâts. La règle d'or : toujours diagnostiquer et traiter l'humidité avant d'isoler, jamais après.",
  },
  {
    question: "Proposez-vous une garantie sur vos traitements à Berchem-Sainte-Agathe ?",
    answer: "Oui, nos traitements par injection silicone sont garantis 10 ans. Les produits utilisés sont certifiés et leur efficacité est prouvée sur plus de 50 ans d'utilisation en Europe du Nord. Nous fournissons un certificat de garantie à l'issue du traitement, transférable en cas de vente du bien.",
  },
];

export default function BerchemSainteAgathePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Communes", href: "/" },
          { name: "Traitement humidité Berchem-Sainte-Agathe", href: "/communes/berchem-sainte-agathe" },
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communes", href: "/#communes" },
          { label: "Berchem-Sainte-Agathe" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Berchem-Sainte-Agathe</span>
          </div>
          <div className="max-w-3xl">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">Expert local Berchem-Ste-Agathe</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Traitement Humidité Berchem-Sainte-Agathe{" "}
              <span className="text-[#F97316]">— Villas & Infiltrations Dalle</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Les lotissements de Berchem-Sainte-Agathe des années 60 et 70 accumulent
              les problèmes d&apos;humidité liés à l&apos;âge : dalles de cave qui suintent,
              isolation insuffisante, murs enterrés sans protection. Diagnostic précis,
              traitement durable.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Humidité à Berchem : lotissements des années 60–70</h2>
              <p className="text-gray-600 mb-4">
                Les villas de Berchem-Sainte-Agathe, construites pendant les Trente Glorieuses,
                sont aujourd&apos;hui âgées de 55 à 65 ans. Les <strong>dalles de cave en béton</strong>
                de cette époque, non armées contre la remontée d&apos;eau, commencent à présenter
                des infiltrations par porosité ou par les joints de reprise.
              </p>
              <p className="text-gray-600 mb-4">
                Les <strong>murs enterrés côté jardin</strong> — sans membrane d&apos;étanchéité
                dans la construction originale — laissent passer l&apos;humidité du sol vers
                l&apos;intérieur des caves. L&apos;accumulation sur 60 ans a souvent provoqué
                des dégradations significatives des revêtements intérieurs.
              </p>
              <p className="text-gray-600">
                On distingue soigneusement les <strong>infiltrations par la dalle</strong>
                (pression hydrostatique) des <strong>remontées capillaires</strong> dans les
                murs : les deux mécanismes coexistent souvent mais nécessitent des traitements
                différents.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">Problèmes fréquents à Berchem-Sainte-Agathe</h3>
                <ul className="space-y-2">
                  {[
                    "Infiltrations dalle cave béton années 60",
                    "Murs enterrés humides côté jardin",
                    "Remontées capillaires fondations sans membrane",
                    "Condensation isolation insuffisante années 70",
                    "Humidité aggravée par rénovation thermique",
                    "Joints de terrasse défaillants",
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
                <p className="text-sm text-gray-600">Toute la commune de Berchem-Sainte-Agathe, chaussée de Gand et lotissements résidentiels inclus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Berchem-Sainte-Agathe</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="contact" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic gratuit — Berchem-Sainte-Agathe</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · <a href="tel:0489576565" className="font-bold text-[#1E3A5F] hover:text-[#F97316]">0489 57 65 65</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Jette", slug: "jette" }, { name: "Ganshoren", slug: "ganshoren" }, { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }].map((c) => (
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
