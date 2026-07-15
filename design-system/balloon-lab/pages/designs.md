# Designs Page Overrides

> **Project:** Balloon Lab  
> **Page:** Designs catalogue  
> **Purpose:** Premium customizable design showroom for personalized balloon gifting in the UAE

These rules override the generated master recommendations where Balloon Lab's established brand system is more specific.

## Brand System

- **Font:** Poppins across headings, body copy and controls.
- **Primary:** `#005BFF`
- **Deep navy:** `#06143D`
- **Pink accent:** `#F72585`
- **Purple accent:** `#7B2CFF`
- **Cyan highlight:** `#00B8FF`
- **Light blue:** `#EEF7FF`
- **Soft pink:** `#FFF0F8`
- **Lavender:** `#F3ECFF`
- **Surface:** opaque or semi-opaque white with a sufficiently solid fallback for readable text.

## Layout

- Full-width atmospheric sections with content constrained to approximately `1280-1440px`.
- Use a spacious responsive rhythm based on 8px increments.
- Desktop catalogue uses filters plus a two-column result grid; tablet removes the persistent filter rail; mobile uses a single-column grid and bottom-sheet filters.
- Breakpoint checks: 375px, 768px, 1024px and 1440px.

## Visual Direction

- Soft-light 3D showroom rather than a conventional ecommerce grid.
- Glass surfaces use consistent white borders, pastel refraction and a three-level shadow system.
- Product imagery remains the focal point; glow, blur and orbit details stay behind content.
- Use the transparent Balloon Lab logo without recolouring or added image backgrounds.

## Motion

- Framer Motion spring entrances use transform and opacity only.
- Scroll reveals communicate depth or hierarchy; they must not block reading or interaction.
- Micro-interactions stay within roughly 150-300ms; larger page entrances may use spring physics.
- Filter results and sheets include faster exits than entrances.
- Respect `prefers-reduced-motion`; remove autoplay, parallax, floating and nonessential transforms.

## Interaction and Accessibility

- Minimum 44px touch targets for controls.
- Visible focus outlines with more than colour alone.
- Search and filters use real labels, native inputs and URL-synchronized state.
- Mobile filters appear in a modal bottom sheet with a clear close action, result count and body scroll lock.
- Essential actions never depend only on hover, drag or animation.
- Images use meaningful alt text; decorative balloon and logo accents use empty alt text.

## Page Structure

1. Customizable design hero
2. Occasion cylinder discovery
3. Searchable and filterable design catalogue
4. Custom-design invitation
5. Personalization process
6. Popular choices
7. Final conversion CTA

## Avoid

- Black-and-gold luxury styling that conflicts with the established Balloon Lab palette.
- Unverified price, preparation-time, availability or bestseller claims.
- Synthetic customer testimonials presented as real feedback.
- Heavy 3D libraries or large textures when CSS transforms and optimized imagery provide the intended depth.
- Infinite scroll as the only catalogue navigation.
