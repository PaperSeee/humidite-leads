export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://traitement-humidite-bruxelles.be/#business",
    name: "Traitement Humidité Bruxelles",
    description:
      "Expert traitement humidité à Bruxelles. Remontée capillaire, mérule, condensation, infiltrations. Diagnostic gratuit, intervention 48h, garantie 10 ans.",
    url: "https://traitement-humidite-bruxelles.be",
    telephone: "0489576565",
    email: "contact@traitement-humidite-bruxelles.be",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8503,
      longitude: 4.3517,
    },
    areaServed: [
      "Uccle",
      "Ixelles",
      "Woluwe-Saint-Pierre",
      "Woluwe-Saint-Lambert",
      "Auderghem",
      "Watermael-Boitsfort",
      "Etterbeek",
      "Forest",
      "Saint-Gilles",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    priceRange: "€€",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
