# Balloon Lab SEO Audit and Remediation

Audit date: 15 July 2026  
Scope: all current indexable routes in the Next.js application

## Executive result

The current site is now technically crawlable, statically rendered, mobile-safe, and mapped to one distinct search intent per page. The production build exposes five canonical indexable pages, a real 404 response, a robots file, an XML sitemap with image entries, a web manifest, stable favicons, and a 1200×630 branded social image.

The largest remaining risks are external: the production domain must be deployed and reachable, Google Search Console ownership must be verified, the sitemap must be submitted, and authority/backlinks must be earned. Those actions require account access or third-party outreach and cannot be completed safely inside this codebase.

## Critical issues found and corrected

| Severity | Finding | Correction |
| --- | --- | --- |
| Critical | No generated `robots.txt` or `sitemap.xml` | Added both routes; sitemap lists every canonical page and relevant images. |
| Critical | The root canonical could be inherited by child pages | Added a unique self-referencing canonical to every indexable route. |
| Critical | Production builds depended on a live Google Fonts request | Replaced the network dependency with locally hosted Poppins files. |
| High | Several pages had incomplete search and social metadata | Added unique titles, descriptions, keywords, Open Graph, Twitter cards and canonical URLs. |
| High | No page-level structured data | Added Organization/LocalBusiness, WebSite, WebPage, FAQPage, BreadcrumbList, CollectionPage, ItemList, ImageGallery, HowTo and AboutPage data where truthful. |
| High | Filtered design URLs can create duplicate URL variants | Every query/filter state canonicals to `/designs`; only the canonical collection is in the sitemap. |
| High | Design catalogue anchors were absent from initial fallback HTML | Added the catalogue anchor to the server-rendered Suspense fallback. |
| High | Homepage occasion cards and footer occasion links were generic | Linked each occasion to its relevant filtered design state. |
| High | Unverified preparation and same-day claims appeared in FAQs | Rewrote timing and fulfilment language to require confirmation before promising service. |
| Medium | Deprecated image priority usage and competing preloads | Kept one intentional LCP preload per route and allowed non-critical images to load normally. |
| Medium | No branded error experience | Added an accessible, noindex 404 page that returns HTTP 404 and provides recovery links. |
| Medium | Founder images omitted the person’s name from alt text | Added each leader’s name and role to meaningful image alternatives. |
| Medium | Social profiles were not explicitly connected as identity links | Added identity relationships in the footer and `sameAs` organization data. |

## Corrected page targeting

| URL | Search title | Meta description | Primary intent |
| --- | --- | --- | --- |
| `/` | Personalized Photo Balloons UAE \| Balloon Lab | Create custom photo balloons for birthdays, love, newborns, events, corporate gifts and surprises with Balloon Lab in Abu Dhabi, UAE. | personalized photo balloons UAE |
| `/designs` | Personalized Photo Balloon Designs UAE \| Balloon Lab | Explore customizable photo balloon designs for birthdays, couples, newborns, events and corporate gifting from Balloon Lab UAE. | personalized balloon designs UAE |
| `/gallery` | Photo Balloon Ideas & Gallery UAE \| Balloon Lab | Browse personalized photo balloon ideas for birthdays, love, children, events and corporate gifts by Balloon Lab UAE. | photo balloon ideas UAE |
| `/how-it-works` | How to Order a Personalized Photo Balloon \| Balloon Lab | Learn how to order a personalized photo balloon from Balloon Lab UAE, from sharing your image and choosing a design to approval and fulfilment. | how to order a personalized photo balloon |
| `/about` | About Balloon Lab UAE \| Balloon Lab | Meet Balloon Lab’s Abu Dhabi leadership and discover how the UAE brand turns meaningful photos into personalized balloon gifts. | Balloon Lab UAE brand |

All descriptions are unique and within a practical snippet range. Each page renders one H1, has a distinct canonical, has no missing `alt` attributes, and has no mobile horizontal overflow at the tested 390px viewport.

## Keyword clusters

### Core commercial

- personalized photo balloons UAE
- custom photo balloons Abu Dhabi
- personalized balloon gifts UAE
- photo printed balloons UAE
- custom picture balloon gift

### Occasion-led

- personalized birthday photo balloon UAE
- romantic photo balloon for couples UAE
- newborn photo balloon gift UAE
- kids birthday photo balloon UAE
- custom event photo balloon centrepiece
- corporate branded photo balloons UAE

### Process and consideration

- how to order a personalized photo balloon
- best photo for balloon printing
- how photo balloon customization works
- personalized balloon design approval UAE
- photo balloon delivery or collection Abu Dhabi

### Long-tail content opportunities

- personalized birthday balloon with family photo in UAE
- custom corporate balloon with company logo Abu Dhabi
- romantic anniversary photo balloon gift UAE
- newborn welcome balloon with baby photo and name
- personalized balloon centrepiece for UAE events
- what image resolution is best for a photo balloon
- how early should I order a personalized balloon in UAE

Avoid creating location pages for Dubai, Sharjah or other emirates until delivery eligibility and genuinely distinct local information can be confirmed. Thin city pages would weaken trust and create doorway-page risk.

## Content roadmap

Build new landing pages only when each can contain original product imagery, verified fulfilment details, relevant FAQs and at least one useful internal path:

1. `/occasions/birthdays` — birthday recipients, age milestones, design directions and photo guidance.
2. `/occasions/love-and-romance` — anniversaries, proposals, couples and thoughtful surprises.
3. `/occasions/kids-and-newborns` — baby welcomes, first birthdays and family-photo guidance.
4. `/corporate-gifting` — logo artwork requirements, quantities, events and client gifting.
5. `/photo-requirements` — resolution, crop, consent and image-quality guidance.

Do not publish placeholder product, price, review, delivery-time or availability claims. Add Product or Review schema only after real product records, pricing and first-party evidence exist.

## Off-page and authority plan

The brand currently has weak organic discoverability and competes with several unrelated businesses using similar “Balloon Lab” names. Strengthen entity clarity with:

1. A verified Google Business Profile using the exact Balloon Lab name, Abu Dhabi address, phone and website.
2. Google Search Console and Bing Webmaster Tools verification, sitemap submission and URL inspection after deployment.
3. Consistent name/address/phone details on Instagram, TikTok, LinkedIn and trustworthy UAE business directories.
4. Earned links from UAE event planners, photographers, venues, corporate gifting partners and local gift guides.
5. Original customer reaction content and product photography with written publishing permission.
6. A branded LinkedIn company page rather than relying only on a personal-profile URL when available.

## Validation completed

- ESLint: passed
- TypeScript: passed
- Next.js production build: passed
- Five indexable routes: HTTP 200
- Custom missing route: HTTP 404 with `noindex`
- `robots.txt`, `sitemap.xml`, manifest and social image: HTTP 200 with correct content types
- Internal links and fragments: no failures
- Structured-data scripts: valid JSON on every page
- One H1 per page
- Missing image `alt` attributes: zero
- Mobile horizontal overflow at 390px: none
- Desktop header centered at 1440px: confirmed
- Console errors during responsive checks: none

## Launch requirements

Field Core Web Vitals cannot be proven from a local build. After deployment, monitor LCP, INP and CLS using real-user data in Search Console/CrUX and use Lighthouse only as a laboratory diagnostic. Request indexing after the final production domain serves the new canonical pages, favicon, robots file and sitemap.
