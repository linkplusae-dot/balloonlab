# Balloon Lab — About Page Direction

## Purpose
Present Balloon Lab as a premium UAE personalized gifting brand through its purpose, leadership, values, and human craft.

## Visual direction
- Spacious, asymmetric 3D glass compositions with soft pastel light.
- Poppins typography and the established navy, royal blue, pink, purple, and cyan palette.
- Portraits remain authentic and are framed as premium editorial photography.
- Depth comes from perspective, layered glass, controlled shadows, and scroll-based transforms—not visual clutter.

## Motion
- One dominant motion idea per viewport.
- Desktop leadership portraits move with restrained parallax depth.
- Mobile uses a one-person-at-a-time cinematic portrait story. The active leader occupies the full stage; the next leader enters only as the first exits.
- All motion collapses to a static, readable layout under `prefers-reduced-motion`.

## Responsive and accessibility rules
- Preserve a single-column reading order on mobile.
- Touch targets are at least 44px and keyboard focus remains visible.
- Use semantic headings, meaningful portrait alt text, and optimized Next.js images.
- Avoid unverified metrics, dates, awards, or customer claims.

## Mobile navigation override
- Use a compact top brand island for page context and secondary navigation.
- Use a five-item safe-area-aware bottom dock for Home, Designs, Create, About, and Contact.
- The central Create action is elevated; the current route has a clear icon-and-surface active state.
- Never stack a second fixed CTA over the bottom dock.
