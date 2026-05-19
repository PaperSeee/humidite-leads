"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

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

const servicesNav = [
  { name: "Remontée capillaire", href: "/services/remontee-capillaire" },
  { name: "Mérule", href: "/services/merule" },
  { name: "Condensation", href: "/services/condensation" },
  { name: "Infiltrations", href: "/services/infiltrations" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [communesOpen, setCommunesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#1E3A5F] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-white.svg"
              alt="Traitement Humidité Bruxelles"
              width={220}
              height={48}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Accueil
            </Link>

            {/* Communes dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setCommunesOpen(true)}
                onMouseLeave={() => setCommunesOpen(false)}
              >
                Communes <ChevronDown size={14} />
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-56 transition-all duration-200 ${communesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setCommunesOpen(true)}
                onMouseLeave={() => setCommunesOpen(false)}
              >
                {communes.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/communes/${c.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#F97316] text-sm transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services <ChevronDown size={14} />
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-52 transition-all duration-200 ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesNav.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#F97316] text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/types-humidite"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Types d&apos;humidité
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0489576565"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <Phone size={16} />
              <span>0489 57 65 65</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#152d4a] border-t border-blue-800 px-4 py-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-gray-300 hover:text-white py-2 border-b border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              Accueil
            </Link>
            <div>
              <p className="text-gray-400 text-xs uppercase font-semibold mb-2">
                Communes
              </p>
              <div className="grid grid-cols-2 gap-1">
                {communes.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/communes/${c.slug}`}
                    className="text-gray-300 hover:text-[#F97316] py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-blue-800 pt-2">
              <p className="text-gray-400 text-xs uppercase font-semibold mb-2">
                Services
              </p>
              <div className="grid grid-cols-2 gap-1">
                {servicesNav.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-gray-300 hover:text-[#F97316] py-1 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/types-humidite"
              className="text-gray-300 hover:text-white py-2 border-t border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              Types d&apos;humidité
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white py-2 border-t border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-300 hover:text-white py-2 border-t border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/faq"
              className="text-gray-300 hover:text-white py-2 border-t border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white py-2 border-t border-blue-800"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:0489576565"
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold px-4 py-3 rounded-lg mt-2"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
