# HumiPro Bruxelles — Site de Génération de Leads

Site Next.js production-ready pour la génération de leads dans la niche **traitement de l'humidité à Bruxelles**.

## Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icônes)
- Images : Unsplash (domaine configuré dans next.config.ts)
- Déployable sur Vercel sans configuration

## Structure

```
src/app/
├── page.tsx                          # Page d'accueil
├── layout.tsx                        # Layout global avec Header/Footer
├── sitemap.ts                        # Sitemap XML dynamique
├── robots.ts                         # Robots.txt
├── communes/
│   ├── uccle/
│   ├── ixelles/
│   ├── woluwe-saint-pierre/
│   ├── woluwe-saint-lambert/
│   ├── auderghem/
│   ├── watermael-boitsfort/
│   ├── etterbeek/
│   ├── forest/
│   └── saint-gilles/
├── types-humidite/
├── tarifs/
├── faq/
├── contact/
├── a-propos/
└── mentions-legales/

src/components/
├── Header.tsx              # Navigation sticky + CTA téléphone
├── Footer.tsx              # NAP + liens communes + légaux
├── ContactForm.tsx         # Formulaire avec validation
├── FAQAccordion.tsx        # Accordion interactif
├── TestimonialCard.tsx     # Cartes témoignages
├── ServiceCard.tsx         # Cartes services
├── LocalBusinessSchema.tsx # JSON-LD Schema.org LocalBusiness
└── BreadcrumbSchema.tsx    # JSON-LD Schema.org Breadcrumb
```

## Déploiement sur Vercel

### Option 1 : Via CLI Vercel

```bash
npm install -g vercel
cd /Users/paperhq/Leads/humidite-bruxelles
vercel
```

### Option 2 : Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "Add New Project"
3. Importez depuis GitHub (pushez d'abord ce repo)
4. Vercel détecte Next.js automatiquement — cliquez "Deploy"

### Variables d'environnement

Aucune variable d'environnement requise pour le déploiement de base.

## Développement local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Changer le numéro de téléphone et l'email

Faites un remplacement global sur :
- `+3225884723` → votre numéro format tel:
- `+32 2 588 47 23` → votre numéro affiché
- `contact@traitement-humidite-bruxelles.be` → votre email

## Connecter le formulaire à un vrai backend

Le fichier `src/components/ContactForm.tsx` simule l'envoi avec `console.log`.

### Option Formspree (recommandée, gratuit jusqu'à 50 soumissions/mois)

1. Créez un compte sur formspree.io
2. Créez un nouveau formulaire et copiez l'ID
3. Dans `ContactForm.tsx`, remplacez `handleSubmit` :

```tsx
const res = await fetch("https://formspree.io/f/VOTRE_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setSubmitted(true);
```

## Domaine personnalisé sur Vercel

1. Dashboard Vercel > votre projet > Settings > Domains
2. Ajoutez `traitement-humidite-bruxelles.be`
3. Configurez les DNS chez votre registrar :
   - Record A : `76.76.21.21`
   - Record CNAME `www` : `cname.vercel-dns.com`

## SEO inclus

- Sitemap XML automatique (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Schema.org LocalBusiness (toutes les pages)
- Schema.org FAQPage (`/` et `/faq`)
- Schema.org BreadcrumbList (pages internes)
- Canonical URLs par page
- OpenGraph metadata
- Balises title et description optimisées par page
