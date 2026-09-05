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

### 17. Theme toggle con estado "system"
`minimalist-ui` pide evitar el toggle binario sol/luna y usar "system
preference detection". El toggle ahora cicla **light → dark → system**:
- `Layout.astro`: el script inicial resuelve `system` contra
  `prefers-color-scheme` antes del primer paint y expone el estado en
  `html[data-theme-choice]`; el handler `astro:after-swap` usa la misma
  lógica (fix de colisión de nombres `saved`/`savedTheme`).
- `ThemeIcon.astro`: tercer icono **Monitor** (Lucide, mismo trazo 2px)
  visible solo en modo `system`; title/aria reflejan el estado efectivo
  ("Theme: system (dark)").
- Live-follow: si el SO cambia de tema con `system` activo, la página se
  actualiza sin recargar.
- Estado por defecto (sin preferencia guardada): `system` — antes era
  light/dark resuelto una sola vez y "congelado".
- Command palette (⌘K): comando renombrado a "Cycle theme (light / dark /
  system)" — reutiliza el mismo botón.

## Verificación

`npm run build` (astro check + build) OK; woff2 de Ubuntu Mono presentes en
`dist/_astro/`.
