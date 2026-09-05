# Missing: 404 page + print styles (`feature/missing-404-print`)

**Fecha:** 2026-09-05
**Base:** `main` (post-merge de `feature/improvements-7-10`)
**Skills aplicadas:** `redesign-existing-projects` (sección "Strategic Omissions")

## Contexto

Tercera tanda de la auditoría completa: dos de los elementos que la skill
`redesign-existing-projects` marca como omisiones estratégicas típicas de IA.

## Cambios

### 12. Página 404 personalizada
- Nueva `src/pages/404.astro` (Astro genera `/404.html`, compatible con
  Netlify/Vercel/GitHub Pages sin configuración extra).
- Diseño consistente con el sitio: cifra gigante en color de acento,
  mensaje directo ("The page you are looking for doesn't exist or has been
  moved." — sin "Oops!" según la skill), link de vuelta al home.
- Incluye skip-link target (`id="main-content"`), animaciones de entrada
  (`data-reveal` con stagger) y ajuste para print.

### 13. Print styles en página de detalle
- La home ya tenía estilos de impresión; `clinic-dentist.astro` no.
- Añadido `@media print`: oculta back-link, screenshots (hero/challenge) y
  tech stack; colapsa paddings y bordes de cards; `break-inside: avoid`
  para que las cards no se corten entre páginas.
- Complementa el flujo "Print / Save as PDF" del command palette (⌘K).

## Verificación

`npm run build` (astro check + build) OK — `/404.html` generada.
