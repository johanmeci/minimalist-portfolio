# Audit fixes 1-6 (`fix/audit-bugs-1-6`)

**Fecha:** 2026-09-05
**Base:** `main` (incluye merge de `feature/taste-skill-redesign`)
**Skills aplicadas:** `redesign-existing-projects`, `minimalist-ui` (instaladas en `.agents/skills/`)

## Contexto

Tras el rediseño con las skills (rama `feature/taste-skill-redesign`), se realizó una
auditoría completa de la página (home, página de detalle de proyecto, SEO, assets).
Estos 6 fixes corresponden a los bugs detectados con prioridad crítica.

## Cambios (commit `07f89b8`)

### 1. Skip-link roto en páginas de detalle
- El skip-link del layout apunta a `#main-content`, pero solo `index.astro` tenía ese id.
- **Fix:** `id="main-content"` añadido a `<main>` en `src/pages/projects/clinic-dentist.astro`.

### 2. `theme-color` con azules Tailwind genéricos
- SEO.astro declaraba `#3b82f6` / `#1e40af` (defaults de Tailwind, ajenos al sistema).
- **Fix:** `theme-color` ahora usa los fondos reales del sitio: `#ffffff` (light) y `#17191a` (dark).

### 3. `og:image` desactualizado
- Apuntaba a `avatar_johanmeneses.jpg` (foto vieja).
- **Fix:** apunta a `/assets/johanmeneses_profile.jpg`.
- **Pendiente:** crear una og image dedicada 1200x630 para previews sociales.

### 4. Página de detalle fuera del sistema de color
- Chips, badges y blocks con hex hardcodeados (`#17191a`, `#e3d3d3`, `rgba(74,137,220)`,
  `#4a89dc`, `#e05c5c`).
- **Fix:** refactor a variables: `--chip-bg`/`--chip-text`, `--accent-color` con
  `color-mix()`, y nueva variable `--danger-color` (light: `#e05c5c`, dark: `hsl(0 60% 64%)`).

### 5. Grid de fondo duplicado
- `html` pintaba una grilla con `hsl(var(--border))`, pero `--border` solo estaba definido
  en dark (en light la regla era inválida); en dark se superponían dos grillas.
- **Fix:** eliminadas las `background-image` de `html` y la var `--border`; la grilla la
  pinta únicamente `body::before`.

### 6. `<time>` sin atributo `datetime`
- Experience y Education renderizaban rangos (`2019 - 2024`) sin semántica.
- **Fix:** `<time datetime="YYYY">` por cada año; los textos no-fecha ("Present", "Actual")
  quedan como texto plano.

## Verificación

`npm run build` (astro check + build) OK.
