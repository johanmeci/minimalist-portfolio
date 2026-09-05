# Content fixes 1-3 (`feature/content-fixes-1-3`)

**Fecha:** 2026-09-05
**Base:** `main` (post-merge de `feature/polish-14-17`)
**Skills aplicadas:** `minimalist-ui` (banned elements: emojis, clichés),
`redesign-existing-projects` (content audit: clichés, Title Case)

## Contexto

Auditoría de contenido (textos) contra las secciones "Content" de
`redesign-existing-projects` y "Banned Elements" de `minimalist-ui`.
Estos son los 3 hallazgos con violación directa; quedan pendientes los
puntos menores (guiones compuestos, lenguaje vago) documentados abajo.

## Cambios

### 1. Emoji 📦 eliminado de los summaries de trabajo
- `minimalist-ui` prohíbe emojis en contenido, markup y headings.
- `cv.json`: removido `📦 ` del stack list de los 3 empleos
  (Takeoff Media, Siesa, GB Media Group). La lista de tecnologías queda como
  línea de texto plano separada por `·`, sin emoji decorativo.

### 2. Cliché "Seamless" eliminado
- "Seamless" está en la lista negra explícita de ambas skills.
- `cv.json` (Siesa, integraciones): "enabling seamless data flow across the
  organization" → "keeping data consistent across the organization".

### 3. Sentence case en la página de detalle
- `redesign-existing-projects`: "Title Case On Every Header → use sentence
  case instead". La página convivía ambos estilos.
- `clinic-dentist.astro`: "Key Highlights" → "Key highlights";
  "Challenges & Solutions" → "Challenges & solutions".
- `clinic-dentist.json` (highlights): "Patient Records" → "Patient records",
  "Appointment Scheduling" → "Appointment scheduling",
  "Role based Access" → "Role-based access" (también corregía la
  capitalización rota), "Operational Dashboard" → "Operational dashboard".
- Los títulos de "challenges" ya estaban en sentence case; no se tocaron.

## Pendientes (auditados, no aplicados aún)

- Guiones compuestos faltantes (hands on → hands-on, real time → real-time,
  content driven → content-driven, etc.) en `cv.json` y `clinic-dentist.json`.
- Lenguaje vago: "modern web technologies" (SEO description), "dynamic,
  content driven experiences" (Takeoff Media), "special attention to smooth
  interactions" (Edpracol), "streamline contact and inquiry workflows"
  (Studio Models).

## Verificación

`npm run build` (astro check + build) OK.
