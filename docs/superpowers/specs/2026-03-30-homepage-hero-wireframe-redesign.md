# Homepage Hero Wireframe Redesign

Date: 2026-03-30
Project: Flinkeo marketing site
Scope: Redesign the homepage hero section only, preserving the current technology stack and downstream homepage sections.

## Goal

Replace the current simple text-first hero on the homepage with a creative wireframe-inspired hero based on the provided reference. The new hero should feel more editorial and distinctive while keeping the current project architecture, typography system, and section flow intact.

The hero should communicate proof first. Visitors should quickly understand that Flinkeo delivers measurable work, serves international teams, and supports product and design execution across multiple service areas.

## Constraints

- Keep the existing stack: Next.js App Router, Tailwind CSS, and Framer Motion.
- Do not add new dependencies.
- Preserve the rest of the homepage structure after the hero:
  - clients
  - testimonials
  - services
  - contact section
- Match the reference layout language closely:
  - top-left tension panel
  - top-right outcome panel
  - central orbital line-art focal form
  - left stacked proof cards
  - bottom service rail with one highlighted card
- Maintain a premium restrained aesthetic rather than turning the page into a glossy SaaS hero.

## Visual Thesis

A results-led editorial hero built as a clean wireframe composition: soft cream surfaces, black line structure, one lime accent, and subtle orbital motion that suggests momentum without distracting from the proof points.

## Content Plan

### Hero

The hero is the main redesign target and carries the entire first-screen story.

- Top-left panel:
  - short tension copy about slow recruitment, budget pressure, or fragmented delivery
  - purpose is to frame the problem
- Top-right panel:
  - main results-oriented statement
  - short supporting explanation of what Flinkeo helps teams achieve
- Left proof stack:
  - three stat cards
  - default values:
    - 200+ designs and projects
    - 50+ international clients
    - 168+ startup clients
- Bottom service rail:
  - UX Strategy
  - App Development
  - Visual Design
  - Social Media
  - one card highlighted with a lime accent, defaulting to App Development

### Supporting Sections

No structural change to the sections after the hero. They continue as-is to preserve current page flow and content investment.

## Layout Specification

### Desktop

The hero should behave like a poster composition rather than a conventional centered marketing block.

- Outer hero spans close to full width, with controlled page padding.
- Top row contains two large rounded panels:
  - left panel occupies the wider area
  - right panel is narrower and anchored on the right
- Center orbital graphic overlaps visually beneath and between the two top panels.
- Left proof stack sits in the lower-left area and contains three vertically stacked rounded cards.
- Bottom service rail stretches across the lower-right area and aligns beneath the orbital center.
- The highlighted service card should stand out primarily through fill color, not heavier decoration.

### Tablet

- Preserve the composition in two main horizontal bands if possible.
- Reduce the orbital footprint slightly.
- Allow the right panel to become wider and push the proof stack lower.
- Service rail may wrap into two rows if horizontal density becomes too tight.

### Mobile

The hero must stay recognizable without trying to force the full desktop geometry.

- Content order:
  - top-right outcome copy first
  - top-left tension copy second
  - orbital visual third
  - stats stack fourth
  - service cards last
- Rounded panels remain visually distinct but stack vertically.
- Orbital form becomes a cropped centerpiece with reduced stroke count.
- Service cards become a horizontal snap row or stacked two-column grid depending on available space and implementation simplicity.
- Proof cards remain easy to scan and tap.

## Color System

- Background: warm off-white or ivory
- Card/panel surfaces: slightly separated cream tones
- Stroke and text: near-black
- Accent: one lime-green highlight
- Avoid extra accent colors
- Avoid heavy shadows and glass effects

This section should feel handcrafted and premium, not neon or futuristic.

## Typography

- Keep the existing Mona Sans system and current project typography conventions.
- Prioritize large, compact, readable headings.
- Proof numbers should be the loudest typographic elements in the bottom-left stack.
- Supporting copy should remain short and scan quickly.

## Motion Thesis

Motion should reinforce presence and hierarchy, not become a showpiece.

### Required Motion Behaviors

- Top panels reveal in sequence with slight vertical rise and opacity transition.
- Proof cards reveal with a short stagger from top to bottom.
- Service cards reveal from below with a restrained stagger.
- Orbital line system drifts subtly to create ambient movement.
- Central capsule form rotates or floats very slightly.
- Highlighted service card receives the most visible motion state:
  - subtle hover lift
  - faint pulse or glow shift

### Motion Rules

- Use Framer Motion only where it adds clarity or atmosphere.
- Keep all motion smooth on mobile.
- Respect reduced-motion settings.
- Avoid long continuous animation loops that feel distracting.

## Technical Design

### Component Boundary

Create a dedicated homepage hero component rather than continuing to build the hero inline inside `src/app/page.jsx`.

Recommended structure:

- `src/components/HomeHero.jsx`
  - owns layout, copy, and composition
- optional local substructures inside the same file or extracted if needed:
  - proof card renderer
  - service card renderer
  - orbital visual renderer

### Data Shape

Keep stat cards and service cards as local arrays in the hero component so the content remains easy to maintain without adding unnecessary abstraction.

Expected fields:

- stats:
  - value
  - label
- services:
  - title
  - icon
  - highlighted

### Rendering Strategy

- Use standard React server component rendering for the page shell.
- Introduce a small client boundary only where Framer Motion is required.
- If the hero needs motion throughout, the hero component may be a client component.
- Avoid broad client conversion of unrelated homepage sections.

### Graphic Strategy

The central orbital form should be implemented with CSS and SVG-friendly primitives rather than image assets.

Preferred order:

1. CSS and border-based rings where practical
2. inline SVG for curved orbital lines if precision is needed
3. minimal decorative layering using absolute positioning

Do not add bitmap artwork for this centerpiece.

### Integration Plan

- Update `src/app/page.jsx` to replace the current inline heading block with the new hero component.
- Leave the rest of the page composition intact.
- Reuse the existing `Container` philosophy where useful, but allow the hero to break out of the narrower centered text layout when needed.
- Keep class naming and composition readable; do not bury all layout logic in one unreadable utility chain without structure.

## Error Handling and Risk Notes

- The biggest implementation risk is layout crowding at tablet widths.
- The second risk is over-animating the hero and reducing readability.
- The third risk is reproducing the reference too literally on mobile, which would damage usability.

Mitigations:

- Validate tablet breakpoint behavior intentionally.
- Keep motion subtle and layered.
- Simplify geometry aggressively on smaller screens while preserving the same visual identity.

## Testing and Validation

### Functional Checks

- Homepage renders without breaking existing sections.
- Hero remains readable across desktop, tablet, and mobile widths.
- No hydration issues from motion usage.
- Reduced-motion behavior remains acceptable.

### Visual Checks

- First screen clearly communicates proof before services.
- The orbital centerpiece remains the dominant visual anchor.
- The lime accent appears only once as the intentional focal card.
- The page still feels like the same brand, only more designed.

## Success Criteria

- The new hero visually tracks the provided wireframe closely enough that the reference is recognizable.
- The hero feels more premium and creative than the current text-only version.
- The existing tech stack remains unchanged.
- The rest of the homepage continues to work without structural regression.
