import { MetadataRoute } from "next";

const BASE_URL = "https://traitement-humidite-bruxelles.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const communes = [
    "uccle",
    "ixelles",
    "woluwe-saint-pierre",
    "woluwe-saint-lambert",
    "auderghem",
    "watermael-boitsfort",
    "etterbeek",
    "forest",
    "saint-gilles",
  ];

  const staticPages = [
    "",
    "/types-humidite",
    "/tarifs",
    "/faq",
    "/contact",
    "/a-propos",
    "/mentions-legales",
  ];

  const communePages = communes.map((slug) => `/communes/${slug}`);

  const servicePages = [
    "/services/remontee-capillaire",
    "/services/merule",
    "/services/condensation",
    "/services/infiltrations",
  ];

  const blogPages = [
    "/blog",
    "/blog/humidite-hiver-bruxelles",
  ];

  const allPages = [...staticPages, ...communePages, ...servicePages, ...blogPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority:
      path === ""
        ? 1.0
        : path.startsWith("/communes")
        ? 0.8
        : servicePages.includes(path)
        ? 0.9
        : path === "/blog"
        ? 0.7
        : path.startsWith("/blog/")
        ? 0.6
        : 0.7,
  }));
}
