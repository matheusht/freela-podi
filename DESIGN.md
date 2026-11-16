# Design System & Taste Rules (`DESIGN.md`)

This document records the project's visual design language, taste corrections, and interaction rules (following `/learn-taste` and `/emil-design-eng`). Read this file before building or modifying any UI component.

## Layout & Page Structure

- **Preserve the exact section order in `app/page.tsx` and the internal layout structure of every component when applying copy, asset, or theme updates.**
  Why: Removing sections (`InboundHero`, `FAQSection`, `TransformationPillarsSection`), reordering `FinalCTASection`, or changing component grid structures (e.g., turning vertical icon cards in `BenefitsSection` into horizontal rows, or changing the single photo frame in `FinalCTASection` into a 2-photo grid) breaks the established visual rhythm of the page. Fit new copy, photos, and brand colors directly into the existing component layouts.
  <!-- 2026-11-13: "u changed the general layout, you werent supposed to do that" -->

- **Always keep social proof and student testimonials (`TestimonialsSection`) on the landing page.**
  Why: Real student feedback screenshots anchor trust between the feature pillars and the pricing offer; condensing copy must never strip social proof.
  <!-- 2026-11-13: "Keep the social proof and testimonials" -->

## Typography & Hierarchy

- **Never add decorative eyebrow bars or uppercase kicker labels above section headings.**
  Why: Short horizontal accent bars (`w-16 h-1`) and tracked-out uppercase kickers above every `<h2>` look like generic AI-generated templates and clutter the visual hierarchy. Let the heading typography (`<h2>`) lead each section directly.
  <!-- 2026-11-13: "remove all dumb eyebrows and ultrathink on this design" -->

- **Never wrap regular body sentences or taglines in pill/badge containers.**
  Why: Wrapping full sentences in `rounded-full border bg-white/5 px-5 py-3` makes body copy look like a non-interactive button and competes with actual primary CTAs.

## Color & Surfaces

- **Preserve the alternating light/dark section rhythm with Warm Ivory (`#f8f5ee`), White (`#ffffff`), Obsidian (`#12110f`), and Champagne Gold (`#c99e32` / `#e5c365`).**
  Why: Translating the original brown/cream palette into Black, Gold, and White means keeping the approachable light/dark contrast of the original layout rather than turning the entire page into a stark pitch-black dark-mode template.
  <!-- 2026-11-13: "return the files to their original state, i made some changes to the styling but didnt like them... do all the changes that flavia asked while keeping the same general style but improving it slightly" -->

- **Raised surfaces (cards, photo frames, pricing cards) use layered shadows (`shadow-raised`), never heavy solid gold borders (`border-2 border-[#d4af37]`).**
  Why: Thick solid gold borders and neon gold glows look flat, heavy, and artificial. Subtle multi-layered shadows with a hairline `1px` border (`rgba(18, 17, 15, 0.07)`) create natural depth.

## Motion & Interaction (`/emil-design-eng`)

- **Interactive buttons and CTAs must use `active:scale-[0.97]` and explicit transition properties, never `transition-all`.**
  Why: `transition-all` animates unintended layout properties and hurts performance. Specify exact properties (`transition-[transform,background-color,box-shadow,border-color,opacity]`) with `duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]` so buttons feel immediately responsive on press.

- **Gate hover transforms behind `@media (hover: hover) and (pointer: fine)`.**
  Why: Touch devices emulate hover on tap, causing sticky scaled states on mobile phones where most users view this page.

- **Never animate elements from `scale(0)`.**
  Why: Nothing in the real world appears from nothing. Entrance animations must start from `scale(0.95)` or higher combined with `opacity: 0`.
