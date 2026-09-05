# Polish 14-17 (`feature/polish-14-17`)

**Fecha:** 2026-09-05
**Base:** `main` (post-merge de `feature/missing-404-print`)
**Skills aplicadas:** `redesign-existing-projects` (perf + iconografía),
`minimalist-ui` (system preference detection)

## Contexto

Cuarta tanda de la auditoría: los ítems "menores" — rendimiento de fuentes,
iconos de dispositivo, limpieza de assets y el toggle de tema.

## Cambios

### 14. Fuentes self-hosteadas con @fontsource
- `@fontsource/ubuntu-mono` (400/700) instalada como dependencia; imports en
  `Layout.astro` → Astro empaqueta los woff2 en `dist/_astro/` con hashing.
- Eliminados los `<link>` de Google Fonts y sus `preconnect`: cero requests
  externas de fuentes, sin FOUT de terceros y sin dependencia de Google.

### 15. apple-touch-icon en PNG 180x180
- `public/apple-touch-icon.png` generado desde `favicon.svg` con sharp
  (rasterización puntual; la dependencia se removió tras usarla).
- Fondo blanco "horneado" (iOS no soporta transparencia en touch icons) y
  glifo negro (el media query dark del SVG no aplica fuera del navegador).
- `SEO.astro`: `apple-touch-icon` ahora apunta al PNG.

### 16. Limpieza de assets muertos
- Eliminados (verificados sin referencias en el código):
  - `public/assets/avatar_johanmeneses.jpg`
  - `public/assets/avatar_johanmeneses.png`
  - `src/icons/Phone.astro` (componente sin uso)

### 17. Theme toggle
- Se evaluó un toggle de tres estados (light → dark → system) siguiendo la
  sugerencia de `minimalist-ui` ("system preference detection"); se
  **revirtió por decisión del autor**: el toggle queda binario light/dark.
- Lo que se conserva del experimento:
  - `Layout.astro` centraliza el estado del tema antes del primer paint
    (resuelve `prefers-color-scheme` si no hay preferencia guardada — la
    detección de sistema inicial que pedía la skill) y expone el estado
    efectivo en `html[data-theme-choice]`; `astro:after-swap` usa la misma
    lógica (fix de colisión de nombres `saved`/`savedTheme`).
  - Los iconos sol/luna se rigen por `data-theme-choice` en vez de la clase
    `.dark`.
- Comando ⌘K: "Toggle dark mode" (reutiliza el mismo botón).

## Verificación

`npm run build` (astro check + build) OK; woff2 de Ubuntu Mono presentes en
`dist/_astro/`.
