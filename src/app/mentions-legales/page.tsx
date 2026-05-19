import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mentions Légales | Traitement Humidité Bruxelles",
  description: "Mentions légales de Traitement Humidité Bruxelles, expert traitement humidité en région bruxelloise. Informations légales obligatoires.",
  alternates: {
    canonical: "https://traitement-humidite-bruxelles.be/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", href: "/" },
          { name: "Mentions légales", href: "/mentions-legales" },
        ]}
      />

      <section className="bg-[#1E3A5F] text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Mentions légales</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Mentions Légales</h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none space-y-8 text-gray-700">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Identité de l&apos;entreprise</h2>
              <div className="bg-[#F8FAFC] rounded-xl p-5 space-y-1 text-sm">
                <p><strong>Dénomination sociale :</strong> Traitement Humidité Bruxelles</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>Siège social :</strong> Bruxelles, Belgique</p>
                <p><strong>Zone d&apos;activité :</strong> Région de Bruxelles-Capitale</p>
                <p><strong>Téléphone :</strong> <a href="tel:0489576565" className="text-[#1E3A5F] font-medium">0489 57 65 65</a></p>
                <p><strong>Email :</strong> <a href="mailto:contact@traitement-humidite-bruxelles.be" className="text-[#1E3A5F] font-medium">contact@traitement-humidite-bruxelles.be</a></p>
                <p><strong>Site web :</strong> traitement-humidite-bruxelles.be</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Numéro de TVA et immatriculation</h2>
              <p className="text-sm leading-relaxed">
                Traitement Humidité Bruxelles est immatriculée auprès de la Banque-Carrefour des
                Entreprises (BCE) conformément à la législation belge. Numéro de TVA
                belgique disponible sur demande via notre adresse email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Hébergement du site</h2>
              <div className="bg-[#F8FAFC] rounded-xl p-5 space-y-1 text-sm">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
                <p><strong>Site :</strong> vercel.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Protection des données personnelles (RGPD)</h2>
              <p className="text-sm leading-relaxed mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD)
                applicable en Europe, et à la loi belge du 30 juillet 2018 relative à
                la protection des personnes physiques à l&apos;égard des traitements de
                données à caractère personnel, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à :
                <a href="mailto:contact@traitement-humidite-bruxelles.be" className="text-[#1E3A5F] ml-1 font-medium">
                  contact@traitement-humidite-bruxelles.be
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Données collectées via le formulaire de contact</h2>
              <p className="text-sm leading-relaxed">
                Les informations collectées via notre formulaire de contact (nom, prénom,
                téléphone, email, commune, type de problème) sont utilisées exclusivement
                dans le but de vous contacter pour répondre à votre demande de diagnostic
                ou de devis. Ces données ne sont pas cédées à des tiers et sont conservées
                pendant une durée maximale de 2 ans après votre dernière interaction
                avec nos services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
              <p className="text-sm leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son fonctionnement.
                Aucun cookie publicitaire ou de suivi comportemental n&apos;est utilisé.
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais
                certaines fonctionnalités du site pourraient ne plus être disponibles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Propriété intellectuelle</h2>
              <p className="text-sm leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos,
                icônes) est protégé par les lois belges et internationales relatives à
                la propriété intellectuelle. Toute reproduction, représentation ou
                diffusion, totale ou partielle, sans autorisation préalable écrite de
                Traitement Humidité Bruxelles est strictement interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation de responsabilité</h2>
              <p className="text-sm leading-relaxed">
                Les tarifs et informations publiés sur ce site sont donnés à titre
                indicatif et peuvent être modifiés sans préavis. Traitement Humidité Bruxelles
                ne saurait être tenu responsable des informations erronées ou
                incomplètes publiées sur ce site. Seul le devis remis par écrit
                à l&apos;issue du diagnostic sur site constitue un engagement contractuel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Droit applicable et juridiction compétente</h2>
              <p className="text-sm leading-relaxed">
                Ces mentions légales sont régies par le droit belge. Tout litige
                relatif à l&apos;utilisation du présent site sera soumis à la compétence
                exclusive des tribunaux de Bruxelles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Autorité de contrôle</h2>
              <p className="text-sm leading-relaxed">
                Pour toute réclamation relative à la protection des données personnelles,
                vous pouvez contacter l&apos;Autorité de Protection des Données (APD) :
              </p>
              <div className="bg-[#F8FAFC] rounded-xl p-4 mt-3 text-sm">
                <p><strong>Autorité de Protection des Données (APD)</strong></p>
                <p>Rue de la Presse 35, 1000 Bruxelles</p>
                <p>Tel : +32 2 274 48 00</p>
                <p>Email : contact@apd-gba.be</p>
                <p>Site : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F]">autoriteprotectiondonnees.be</a></p>
              </div>
            </div>

            <p className="text-xs text-gray-400 border-t border-gray-200 pt-6">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-BE", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
