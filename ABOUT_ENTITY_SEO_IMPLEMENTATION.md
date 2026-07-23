# Balloon Lab UAE About and Entity SEO Implementation

Implemented on 20 July 2026.

## Identity and canonicalization

- Standardized the primary entity name as **Balloon Lab UAE**.
- Standardized the canonical origin as `https://www.balloonlab.ae`.
- Added a permanent non-www to www redirect in Next.js.
- Updated generated canonicals, sitemap URLs, robots host and schema IDs to use the same origin.
- Kept the short brand name **Balloon Lab** as an alternate name.

## About page

- Added the approved title, meta description, canonical, Open Graph and Twitter metadata.
- Added a custom 1200 × 630 About social image.
- Enforced one H1: `About Balloon Lab UAE`.
- Added the approved direct company introduction.
- Reorganized visible content under:
  - Our Story
  - What We Create
  - Meet Our Leadership
  - Our Founder and CEO
  - Our General Manager
  - Why Choose Balloon Lab UAE
  - Our Promise
  - Contact Balloon Lab UAE
- Added factual founder and general manager copy without unsupported claims.
- Added visible official-domain clarification and consistent email, phone and WhatsApp details.
- Added contextual links to Designs, Gallery, How It Works and Corporate Gifting.

## Structured data

- Expanded the stable site-wide Organization/LocalBusiness entity with:
  - official and alternate names;
  - canonical URL and logo;
  - verified contact information and address;
  - UAE service area;
  - verified social profiles;
  - references to founder and general manager Person entities.
- Linked the WebSite entity to the Organization entity.
- Added AboutPage, BreadcrumbList and two Person entities on the About page.
- Reused stable `@id` values so the entity relationships remain consistent.

## Image SEO

- Created compressed, descriptive WebP leadership images:
  - `mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp`
  - `malik-muhammad-general-manager-balloon-lab-uae.webp`
- Updated visible images, structured data and sitemap image references.
- Added descriptive leadership alt text.

## Validation completed

- Production build and TypeScript validation pass.
- About page is statically generated.
- Exactly one rendered H1 was confirmed.
- Canonical renders as `https://www.balloonlab.ae/about`.
- All required section headings, leadership names and official-domain clarification render in static HTML.
- Generated robots and sitemap use the www origin.
- About social image route is generated successfully.

## Deployment follow-up

- In Vercel project **Settings → Domains**, keep `www.balloonlab.ae` as the primary production domain and configure `balloonlab.ae` to redirect to it.
- Ensure Vercel sends non-www requests directly to their HTTPS www equivalents.
- After deployment, test the About URL and structured data with Google Rich Results Test and Schema.org Validator.
- In Google Search Console, submit `https://www.balloonlab.ae/sitemap.xml`, inspect the About URL and request indexing.
- Keep the organization name, address, phone, email and social URLs identical across Google Business Profile and verified third-party profiles.

## Redirect-error remediation

- The preferred indexed hostname is `www.balloonlab.ae`.
- The Next.js host redirect sends `balloonlab.ae/:path*` directly to `https://www.balloonlab.ae/:path*` with a permanent 308 and preserves paths and query strings.
- The global metadata base, canonical tags, Open Graph URLs, JSON-LD IDs and URLs, robots host, sitemap reference and sitemap entries use `https://www.balloonlab.ae`.
- Next.js continues to normalize a trailing slash to the no-trailing-slash route with one permanent 308.
- There is no middleware, proxy file or `vercel.json` competing with the rule.
- The production Vercel primary-domain setting should remain on `www.balloonlab.ae`.
