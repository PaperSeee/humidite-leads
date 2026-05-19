import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Phone } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traitement Humidité Bruxelles | Traitement Humidité Bruxelles",
  description:
    "Expert traitement humidité à Bruxelles. Remontée capillaire, mérule, condensation, infiltrations. Diagnostic gratuit, intervention 48h. Appelez le 0451 05 33 70.",
  metadataBase: new URL("https://traitement-humidite-bruxelles.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Traitement Humidité Bruxelles | Traitement Humidité Bruxelles",
    description:
      "Expert traitement humidité à Bruxelles. Diagnostic gratuit, intervention 48h, garantie 10 ans.",
    url: "https://traitement-humidite-bruxelles.be",
    siteName: "Traitement Humidité Bruxelles",
    locale: "fr_BE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1 pb-24 sm:pb-0">{children}</main>
        <Footer />
        {/* Floating call button - mobile only */}
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <a
            href="tel:0451053370"
            className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-4 rounded-2xl shadow-2xl text-lg w-full"
          >
            <Phone size={22} />
            Appeler maintenant — 0451 05 33 70
          </a>
        </div>
      </body>
    </html>
  );
}
