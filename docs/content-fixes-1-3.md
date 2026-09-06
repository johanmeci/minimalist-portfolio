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

## Pendientes aplicados en esta misma rama

### 4. Guiones compuestos (adjetivos compuestos en inglés)
- `cv.json`:
  - basics.summary: "hands on" → "hands-on"
  - Takeoff Media: "content driven" → "content-driven", "cross client" →
    "cross-client", "long term" → "long-term"
  - Siesa: "peer to peer" → "peer-to-peer", "multi user" → "multi-user",
    "real time communication" → "real-time" (el adverbio "in real time"
    se mantiene sin guion, uso correcto)
  - GB Media: "cross browser" → "cross-browser", "high fidelity" →
    "high-fidelity", "on page optimization" → "on-page"
  - Projects: "full stack" → "full-stack" (Clinic Dentist)
- `clinic-dentist.json`: "full stack" → "full-stack", "role aware" →
  "role-aware", "server side" → "server-side" (x3), "time range" →
  "time-range", "payment follow up" → "payment follow-up".

### 5. Lenguaje vago → concreto
- SEO description: "modern web technologies" → "TypeScript" (dato concreto).
- Takeoff Media: "modern web applications... dynamic, content driven
  experiences" → "web applications... content-driven experiences" (fuera
  los fillers "modern"/"dynamic").
- Studio Models: "integrated Resend to streamline contact and inquiry
  workflows" → "contact and inquiry forms delivered through Resend".
- Edpracol: "High performance... with special attention to smooth
  interactions and strong Core Web Vitals" → "High-performance... built
  with Astro, GSAP animations, and Prismic CMS, with a focus on Core Web
  Vitals" (fuera "special attention to smooth interactions").
- GB Media: "nontechnical" → "non-technical".

## Verificación

`npm run build` (astro check + build) OK.
