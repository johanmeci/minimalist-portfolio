# Improvements 7-10 (`feature/improvements-7-10`)

**Fecha:** 2026-09-05
**Base:** `main` (post-merge de `fix/audit-bugs-1-6`)
**Skills aplicadas:** `minimalist-ui`, `redesign-existing-projects`

## Contexto

Segunda tanda de mejoras de la auditoría completa (puntos 7-10): tipografía,
iconografía, profundidad visual y command palette.

## Cambios

### 7. Tipografía: Ubuntu Mono en toda la página
Dirección final elegida por el autor tras iterar (Space Grotesk base →
Satoshi → Fraunces + Geist → IBM Plex → tríada Newsreader/JetBrains →
Ubuntu Mono en todo). Decisión consciente: identidad mono pura, estilo
terminal retro (se desvía del rol "sans en cuerpo" de las skills; el autor
prioriza la personalidad de la página sobre la receta).
- **Ubuntu Mono** (Google Fonts, pesos 400/700) como única fuente del sitio:
  headings, cuerpo, UI y metadata, vía `--font-mono`.
- `-0.025rem` de tracking global (calibrado para mono).
- `--font-sans` y `--font-display` eliminadas del sistema; única webfont en
  el `<head>` (Ubuntu Mono). Todas las demás fuentes probadas fuera.

### 8. Iconografía: evaluado Phosphor, se mantiene Lucide
- Se probó el reemplazo completo de los 13 iconos por Phosphor Bold
  (recomendación de las skills para salir del "default de IA").
- **Decisión del autor:** el resultado perdía personalidad (la página
  identifica con sus iconos stroke y la animación draw-on al hover de
  sección). Se revirtió: Lucide + animación stroke-dash restaurados tal cual
  estaban en `main`.

### 9. Profundidad en secciones planas
- `body::before` (grilla) ahora interpone dos spots de luz radial de baja
  opacidad: uno con tinte del acento (top-left) y otro cálido ámbar
  (`hsl(35 70% 60% / 0.035)`, top-right), según la receta de
  `minimalist-ui` para fondos con presencia sin romper el minimalismo.

### 10. Command palette ⌘K (ninja-keys)
- `KeyboardManager.astro` estaba comentado en `index.astro`; revivido y
  ampliado con comandos agrupados:
  - **Navigation**: saltar a About/Experience/Projects/Education/Skills
    (requirió añadir prop `id` a `Section.astro` y ids a las secciones).
  - **Actions**: toggle dark mode, imprimir/guardar PDF.
  - **Contact**: descargar CV, email, GitHub, LinkedIn.
- El toggle de tema reutiliza el botón `#themeToggle` (misma lógica única).

## Verificación

`npm run build` (astro check + build) OK.
