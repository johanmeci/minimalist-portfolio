# Design System Notes

This document captures the UI rules and reusable visual patterns already present in the portfolio so future sections or internal pages can feel native to the site instead of looking bolted on.

## Purpose

Use this guide when creating:

- New homepage sections
- Internal project pages
- Detail pages for experience, case studies, writing, or contact
- Reusable UI blocks that should match the current portfolio style

The goal is not to create a large design system. The goal is to preserve the existing identity:

- Minimalist
- Editorial
- Technical but warm
- Lightweight
- Clean in light and dark mode
- Subtle motion, never flashy

## Core Design Principles

1. Prioritize content clarity over decoration.
2. Use visual restraint: one accent color, simple borders, soft shadows.
3. Keep layouts narrow and readable. The site is not meant to feel like a dashboard.
4. Prefer sections with strong hierarchy and generous spacing.
5. Motion should support reading and feedback, not distract from content.
6. Components should work in both light and dark themes by relying on CSS variables.
7. New pages should feel like a natural extension of the home page.

## Existing Visual Identity

### Typography

The site uses two families:

- `JetBrains Mono` for body text, interface text, and the overall technical personality
- `Space Grotesk` for headings

Guidelines:

- Use `Space Grotesk` for major headings only
- Keep body copy in the mono family already defined globally
- Favor medium to bold headings
- Keep paragraph sizes compact and readable
- Avoid oversized hero text outside top-level page headers

Typical tone:

- `h1`: bold, prominent, clean
- `h2`: section heading with modest scale
- body text: compact, calm, readable
- labels / metadata: small, muted, functional

### Color System

Colors are defined in `src/styles/global.css` and should be reused through variables:

- `--bg-primary`
- `--bg-secondary`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--accent-color`
- `--border-color`
- `--card-shadow`

Guidelines:

- Do not hardcode new colors unless absolutely necessary
- Use the accent color sparingly for links, focus, status emphasis, and highlighted actions
- Cards should remain neutral; avoid colorful panels unless there is a very strong reason
- Dark mode should feel equivalent to light mode, not like a separate design

### Background

The site uses a subtle technical grid overlay from `body::before` and `html`.

Guidelines:

- Keep this background visible
- New pages should not replace it with flat fills or large gradients
- If a special section needs visual emphasis, do it with layout, border, shadow, or spacing first

## Layout Rules

### Main Container

The main page container in `src/pages/index.astro` uses:

- max width around `1200px` for the overall page shell
- inner content sections capped around `700px`
- large desktop padding and tighter mobile padding

Guidelines:

- Full page shells can be wide
- Reading content should stay narrow
- For detail pages, target `700px` to `800px` content width
- Avoid full-width text blocks

### Sections

Base section behavior comes from `src/components/Section.astro`.

Use this pattern for standard sections:

- centered content
- `padding-top` and `padding-bottom` of `2rem`
- bottom border separator
- relative positioning for icon placement
- title aligned with left padding to leave room for an icon

Recommended structure:

```astro
<Section title="Section Name">
  <div class="icon-container">
    <SomeIcon />
  </div>
  <!-- Section content -->
</Section>
```

### Internal Pages

Internal pages such as project detail pages should follow this rhythm:

- back link at the top
- page hero with image or key metadata
- title + short supporting description
- tech stack / labels beneath
- content divided into clean, bordered sections

This already exists in `src/pages/projects/clinic-dentist.astro` and should be treated as the reference pattern for future detail pages.

## Reusable UI Patterns

### 1. Section Icon Pattern

Section icons sit slightly outside the main content flow via `.icon-container`.

Use when:

- building top-level homepage sections
- adding a new informational section that belongs in the same visual family

Do not use when:

- the page is a standalone article or case study and the icon adds noise

Behavior:

- icons animate subtly on section hover
- icon stroke treatment is consistent across sections

### 2. Card Pattern

The current UI uses restrained cards with:

- neutral background
- light border
- small radius
- soft hover lift
- soft shadow

Use for:

- project cards
- highlight cards
- challenge/solution blocks
- grouped facts or stats

Card rules:

- radius should stay modest, around `6px`
- hover lift should be subtle, around `translateY(-2px)` or `-3px`
- shadow should remain soft
- avoid thick borders or loud glow effects

### 3. Pill / Chip Pattern

Used for:

- technologies
- status labels
- utility metadata

Characteristics:

- small text
- compact padding
- rounded corners
- dark filled appearance for tech chips
- accent-tinted version for special links or primary metadata

Use chips for short metadata only. Do not place long phrases inside chips.

### 4. Link Buttons

Current links often look like lightweight pills rather than full buttons.

Use for:

- project links
- secondary actions
- "Details" style navigation

Rules:

- prefer text links or lightweight pills over heavy CTA buttons
- reserve stronger accent treatment for the most important action in a card or page section

### 5. Media Blocks

Project imagery uses:

- `object-fit: cover`
- rounded corners
- top-oriented crop when useful
- border or card framing

Guidelines:

- images should feel editorial, not decorative
- keep aspect ratios visually stable
- avoid giant edge-to-edge galleries unless the page is specifically a case study

## Motion and Interaction

Motion across the project is subtle and intentional.

### Existing Motion Language

- card lift on hover
- icon stroke animation on section hover
- theme icon scale-in
- Astro view transitions between pages
- color and shadow transitions in the 180ms to 300ms range

Guidelines:

- keep transitions short and smooth
- prefer `transform`, `box-shadow`, `color`, and `opacity`
- avoid long dramatic animations
- avoid parallax or continuous movement
- new motion should support navigation or affordance

## Theme Support

The layout and global styles already support light/dark themes.

Rules for future components:

- always use CSS variables for backgrounds, text, and borders
- verify hover states in both themes
- ensure links remain readable in dark mode
- avoid components that only work on white backgrounds

If a component uses a custom surface:

- define it from existing variables first
- only add new variables if multiple components need the same new semantic token

## Content Styling Rules

### Text Blocks

- Keep paragraphs short to medium length
- Use muted text for secondary explanation
- Use primary text only for headings and important labels
- If a page is content-heavy, break it into several bordered sections rather than one long uninterrupted column

### Lists

- Prefer clean vertical rhythm
- Use compact spacing for metadata lists
- Use larger spacing for experience or project narratives

### Metadata

Good metadata candidates:

- year range
- role
- stack
- status
- client type
- location

Metadata should be visually lighter than the main headline.

## Responsive Behavior

The existing site becomes more stacked and centered on smaller screens.

Guidelines:

- allow two-column layouts to collapse early
- center hero content on mobile when appropriate
- reduce page padding on mobile
- maintain comfortable touch targets for links and toggles
- do not rely on hover-only cues for critical interactions

When in doubt:

- desktop = structured and airy
- mobile = stacked, centered where useful, still compact

## Print Behavior

The current site already considers print.

Guidelines for future sections:

- avoid unnecessary decorative controls in print
- do not rely on background effects for meaning
- keep content readable in plain black-on-white output
- hide purely interactive controls if they do not add value in print

## Implementation Guidance

### When Adding a New Homepage Section

Checklist:

- Use `Section.astro`
- Add a matching icon if it belongs beside other major sections
- Keep content width narrow
- Add bottom border separation
- Reuse card/chip/link styles already established
- Verify light mode, dark mode, and mobile behavior

### When Adding a New Internal Page

Checklist:

- Use `Layout.astro`
- Import global styles
- Include a top back link
- Create a concise hero section
- Break the rest into bordered content sections
- Reuse pills, cards, and image framing from existing project detail pages
- Keep the reading width narrow

### When Creating a New Component

Prefer:

- local styles that consume existing CSS variables
- small, composable pieces
- visual consistency over novelty

Avoid:

- introducing a second visual language
- gradients, glassmorphism, neon effects, or oversized button systems
- heavy component abstraction for one-off UI

## Recommended UI Building Blocks

These are safe additions that would fit the current design:

- Quote/testimonial card
- Timeline item
- Featured metric row
- Compact CTA strip
- Writing/article preview card
- Contact block
- FAQ section
- Detailed case study layout
- Tool stack grid

## Patterns to Avoid

To preserve the current identity, avoid:

- dashboard-style panels
- oversized hero banners with loud backgrounds
- multiple accent colors competing at once
- fully justified text blocks
- giant shadows
- rounded corners that are much larger than the existing system
- animation-heavy entrances for every component
- default component-library aesthetics that do not match the site

## Source References

Use these files as the main references for future UI work:

- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/Section.astro`
- `src/components/ThemeIcon.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Projects.astro`
- `src/pages/projects/clinic-dentist.astro`

## One-Line Rule

If a new section or page feels calm, sharp, narrow, readable, theme-aware, lightly animated, and slightly editorial, it probably fits this portfolio.
