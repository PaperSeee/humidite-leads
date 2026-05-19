import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award, Clock } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-gray-300">
      {/* Trust badges */}
      <div className="border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">
                Certifié Expert
              </span>
              <span className="text-xs">Traitement humidité</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">
                Garantie 10 ans
              </span>
              <span className="text-xs">Sur tous nos travaux</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">
                Intervention 48h
              </span>
              <span className="text-xs">Diagnostic rapide</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">
                Assurance RC Pro
              </span>
              <span className="text-xs">Couverture complète</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NAP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Traitement <span className="text-[#F97316]">Humidité</span> Bruxelles
            </h3>
            <p className="text-sm mb-4 text-gray-400">
              Votre expert humidité à Bruxelles — Diagnostic gratuit, intervention
              rapide, garantie 10 ans.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span>Bruxelles, Belgique</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#F97316] flex-shrink-0" />
                <a
                  href="tel:0489576565"
                  className="hover:text-white transition-colors"
                >
                  0489 57 65 65
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#F97316] flex-shrink-0" />
                <a
                  href="mailto:contact@traitement-humidite-bruxelles.be"
                  className="hover:text-white transition-colors text-xs"
                >
                  contact@traitement-humidite-bruxelles.be
                </a>
              </div>
            </address>
          </div>

          {/* Communes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos communes</h3>
            <ul className="space-y-1.5 text-sm">
              {communes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/communes/${c.slug}`}
                    className="hover:text-[#F97316] transition-colors py-1 block"
                  >
                    Humidité {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/types-humidite#remontee-capillaire"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Remontée capillaire
                </Link>
              </li>
              <li>
                <Link
                  href="/types-humidite#merule"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Traitement mérule
                </Link>
              </li>
              <li>
                <Link
                  href="/types-humidite#condensation"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Humidité condensation
                </Link>
              </li>
              <li>
                <Link
                  href="/types-humidite#infiltrations"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Infiltrations d&apos;eau
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#F97316] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-[#F97316] transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-[#F97316] transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-[#152d4a] rounded-lg text-sm">
              <p className="text-white font-semibold">Horaires</p>
              <p className="text-xs mt-1">Lun–Ven : 8h–18h</p>
              <p className="text-xs">Sam : 9h–15h</p>
              <p className="text-xs text-[#F97316] font-medium mt-1">
                Urgences 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Traitement Humidité Bruxelles. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
