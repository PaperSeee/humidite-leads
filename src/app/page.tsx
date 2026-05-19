import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Droplets,
  AlertTriangle,
  Wind,
  CloudRain,
  Clock,
  Shield,
  Award,
  CheckCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import { getRecentPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Traitement Humidité Bruxelles — Expert Certifié | Traitement Humidité Bruxelles",
  description:
    "Expert traitement humidité à Bruxelles. Diagnostic gratuit, intervention en 48h, garantie 10 ans. Remontée capillaire, mérule, condensation, infiltrations. Appelez le 0489 57 65 65.",
  alternates: { canonical: "https://traitement-humidite-bruxelles.be/" },
};

const communes = [
  { name: "Uccle", slug: "uccle" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Forest", slug: "forest" },
  { name: "Saint-Gilles", slug: "saint-gilles" },
];

const homeFaqs = [
  {
    question: "Combien coûte un diagnostic d'humidité à Bruxelles ?",
    answer:
      "Chez Traitement Humidité Bruxelles, le diagnostic est entièrement gratuit et sans engagement. Un technicien certifié se déplace chez vous pour évaluer la situation, identifier la source du problème et vous proposer un devis détaillé. Aucun frais ne vous sera facturé pour cette première visite.",
  },
  {
    question: "Quelle est la durée d'un traitement d'humidité ?",
    answer:
      "La durée varie selon le type d'intervention. Un traitement par injection de résine silicone pour une remontée capillaire prend généralement 1 à 2 jours pour un mur standard. Le traitement de la mérule peut nécessiter 2 à 4 jours selon la surface touchée. Nous vous communiquons un planning précis lors du devis.",
  },
  {
    question: "Intervenez-vous sur toute la Région bruxelloise ?",
    answer:
      "Oui, nous intervenons dans les 19 communes de Bruxelles-Capitale, avec une spécialisation dans les communes suivantes : Uccle, Ixelles, Woluwe-Saint-Pierre, Woluwe-Saint-Lambert, Auderghem, Watermael-Boitsfort, Etterbeek, Forest et Saint-Gilles.",
  },
  {
    question: "Quelle garantie offrez-vous sur vos travaux ?",
    answer:
      "Tous nos travaux sont garantis 10 ans contre les remontées d'humidité traitées. Cette garantie couvre le résultat du traitement. En cas de réapparition du problème dans ce délai, nous intervenons à nouveau sans frais supplémentaires. Nous sommes également couverts par une assurance RC professionnelle.",
  },
  {
    question: "Mon assurance habitation couvre-t-elle les dégâts d'humidité ?",
    answer:
      "Cela dépend de votre contrat. En Belgique, les dégâts des eaux liés à des infiltrations soudaines (rupture de canalisation, tempête) sont généralement couverts. En revanche, les problèmes d'humidité chronique comme les remontées capillaires sont souvent considérés comme un défaut d'entretien et non couverts. Nous pouvons vous fournir un rapport technique pour votre assureur.",
  },
];

function RecentPostsSection() {
  const recentPosts = getRecentPosts(2);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
              Blog & Conseils
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Nos derniers conseils
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors text-sm"
          >
            Voir tous les articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} featured />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors"
          >
            Voir tous les articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-[#1E3A5F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Expert traitement humidité Bruxelles"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Diagnostic GRATUIT
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Intervention 48h
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Garantie 10 ans
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Traitement de l&apos;Humidité à Bruxelles{" "}
              <span className="text-[#F97316]">— Expert Certifié</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Vous souffrez de moisissures, de salpêtre ou de murs humides ?
              Traitement Humidité Bruxelles diagnostique et traite tous les problèmes
              d&apos;humidité dans votre habitation. Remontée capillaire, mérule,
              condensation ou infiltrations : nous avons la solution durable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0489576565"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone size={20} />
                0489 57 65 65
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1E3A5F] font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                Devis gratuit en ligne
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Certifié expert humidité
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Assurance RC Pro
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Plus de 500 chantiers réalisés
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Tous les problèmes d&apos;humidité traités
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque type d&apos;humidité demande une approche spécifique. Nos experts
              certifiés identifient la cause et appliquent le traitement adapté.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Droplets size={32} className="text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Remontée capillaire
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                L&apos;eau du sol remonte dans les murs par capillarité. Salpêtre,
                tâches en bas des murs, peinture qui cloque : symptômes typiques.
              </p>
              <Link
                href="/types-humidite#remontee-capillaire"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <AlertTriangle size={32} className="text-red-500 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Mérule</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Ce champignon lignivore dévore le bois en quelques mois. Urgence
                absolue : il peut rendre une habitation inhabitable s&apos;il n&apos;est
                pas traité.
              </p>
              <Link
                href="/types-humidite#merule"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Wind size={32} className="text-teal-500 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Condensation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Moisissures noires dans les angles, buée sur les fenêtres, air
                étouffant. Problème lié à l&apos;isolation et à la ventilation de
                votre logement.
              </p>
              <Link
                href="/types-humidite#condensation"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CloudRain size={32} className="text-indigo-500 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Infiltration d&apos;eau
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Toit, façade, terrasse ou fondations : l&apos;eau pénètre par des
                fissures ou jointures défectueuses. Intervention rapide
                indispensable.
              </p>
              <Link
                href="/types-humidite#infiltrations"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
                Pourquoi choisir Traitement Humidité Bruxelles
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                L&apos;expertise et la fiabilité au service de votre habitation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Depuis plus de 10 ans, Traitement Humidité Bruxelles accompagne les
                propriétaires et locataires de la région bruxelloise dans le
                traitement de tous types de problèmes d&apos;humidité. Nos
                techniciens certifiés interviennent avec des équipements
                professionnels et des produits garantis.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-xl flex-shrink-0">
                    <Clock size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Intervention rapide sous 48h
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Nous comprenons l&apos;urgence de votre situation. Notre équipe
                      se déplace rapidement pour un diagnostic complet, sans
                      attendre des semaines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-xl flex-shrink-0">
                    <Shield size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Devis gratuit et sans engagement
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Notre diagnostic est entièrement gratuit. Vous recevez un
                      devis détaillé et transparent, sans surprise sur la facture
                      finale.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-xl flex-shrink-0">
                    <Award size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Garantie 10 ans sur tous les travaux
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Nos traitements sont garantis 10 ans. Si le problème
                      réapparaît dans ce délai, nous intervenons à nouveau sans
                      frais. Assurance RC Pro incluse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Technicien Traitement Humidité Bruxelles en intervention"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#1E3A5F] text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-[#F97316]">500+</p>
                <p className="text-sm">chantiers réalisés</p>
                <p className="text-xs text-gray-400">en région bruxelloise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Zone d&apos;intervention à Bruxelles
            </h2>
            <p className="text-gray-600">
              Nous intervenons dans 9 communes de la région bruxelloise
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {communes.map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="bg-white hover:bg-[#1E3A5F] text-gray-800 hover:text-white border border-gray-200 hover:border-[#1E3A5F] rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2 transition-all group"
              >
                <MapPin size={16} className="text-[#F97316] flex-shrink-0" />
                Humidité {c.name}
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Notre processus en 4 étapes
            </h2>
            <p className="text-gray-600">
              Simple, rapide et transparent, de votre premier appel à la fin des
              travaux
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contact",
                desc: "Appelez-nous ou remplissez le formulaire. Nous vous répondons dans l'heure en heures ouvrables.",
              },
              {
                step: "02",
                title: "Diagnostic gratuit",
                desc: "Un technicien certifié visite votre bien sous 48h pour identifier précisément la source du problème.",
              },
              {
                step: "03",
                title: "Devis détaillé",
                desc: "Vous recevez un devis clair et transparent, sans frais cachés. Vous décidez librement de la suite.",
              },
              {
                step: "04",
                title: "Travaux et garantie",
                desc: "Nos équipes interviennent dans les délais convenus. Travaux garantis 10 ans, certification remise.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#1E3A5F] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-gray-600">
              Des garanties concrètes, pas des promesses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏅", title: "Certifié & Assuré", desc: "RC Professionnelle en ordre. Tous nos techniciens sont formés et certifiés pour les traitements contre l'humidité." },
              { icon: "📋", title: "Devis détaillé", desc: "Chaque intervention commence par un diagnostic complet et un devis écrit clair, sans mauvaise surprise." },
              { icon: "🔟", title: "Garantie 10 ans", desc: "Nos traitements par injection de résine silicone sont garantis 10 ans. Engagement écrit systématique." },
              { icon: "⚡", title: "Intervention 48h", desc: "En cas d'urgence (mérule, infiltration active), nous intervenons dans les 48 heures ouvrables." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Questions fréquentes
            </h2>
            <p className="text-gray-600">
              Tout ce que vous devez savoir avant de nous contacter
            </p>
          </div>
          <FAQAccordion items={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors flex items-center gap-1 justify-center"
            >
              Voir toutes nos FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES RÉCENTS */}
      <RecentPostsSection />

      {/* CTA CONTACT */}
      <section id="contact" className="py-16 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Demandez votre diagnostic gratuit
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Remplissez le formulaire ci-contre ou appelez-nous directement.
                Un expert vous rappelle sous 2h en heures ouvrables pour
                convenir d&apos;un rendez-vous.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">
                    Diagnostic entièrement gratuit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">
                    Intervention possible sous 48h
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">
                    Devis détaillé sans engagement
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">
                    Garantie 10 ans sur les travaux
                  </span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-white font-semibold mb-1">
                  Préférez-vous appeler ?
                </p>
                <a
                  href="tel:0489576565"
                  className="flex items-center gap-2 text-[#F97316] font-bold text-xl hover:text-orange-400 transition-colors"
                >
                  <Phone size={24} />
                  0489 57 65 65
                </a>
                <p className="text-gray-400 text-xs mt-1">
                  Lun–Ven 8h–18h | Sam 9h–15h | Urgences 7j/7
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-6">
                Formulaire de contact gratuit
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
