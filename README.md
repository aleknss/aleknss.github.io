# 🌐 Portfolio - Alek

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub-Pages&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=222222)

Mi sitio web personal, 100% **Astro** (estático) + TailwindCSS. Hero tipográfico, navegación superior y secciones de proyectos, experiencia, habilidades y contacto, además de una página de servicios. Incluye modo oscuro, i18n (ES/EN), carrusel de diapositivas, transiciones de página y formulario de contacto. Contenido editable con **Keystatic** (solo en local).

**Live**: https://alek.is-a.dev/

## Índice

- [Tecnologías](#tecnologías)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contenido](#contenido)
- [Scripts](#scripts)

## Tecnologías

- **Astro** (output estático, `src/pages/`)
- **Tailwind CSS v4** (tokens en `src/index.css`)
- **TypeScript** estricto, validado con `astro check`
- **Content Collections** + schemas Zod
- **Keystatic** (CMS en local, solo en dev)
- Interactividad **vanilla JS** en el sitio (React solo para el panel de Keystatic)

## Características

- 🎨 **Diseño Responsive**: móvil, tablet y desktop.
- 🧩 **Navegación superior**: fija, con monograma `AS` y menú móvil; persiste entre páginas.
- 🌓 **Modo Oscuro/Claro**: toggle vanilla con persistencia en `localStorage` (sin flash, script inline en el layout).
- 🌍 **i18n**: rutas reales `/` (ES) y `/en/`, con `hreflang` y canonical.
- 🧭 **Scrollspy**: resaltado de sección activa con `IntersectionObserver`.
- 🎞️ **Transiciones de página**: View Transitions (`ClientRouter`) con slide en `/servicios/`.
- 🚧 **Servicios**: página `/servicios/` (próximamente).
- 🖼️ **Carrusel** de diapositivas vanilla.
- ✉️ **Formulario** de contacto vía Web3Forms (`PUBLIC_WEB3FORMS_KEY`).
- 🔍 **SEO**: meta dinámicas, Open Graph y JSON-LD.
- 📦 **Contenido** en YAML, validado por Zod en build.
- ✏️ **Keystatic**: CMS local (`/keystatic`) para editar el contenido.

## Instalación

Requisitos: Node.js 20+ y npm.

```bash
git clone https://github.com/aleknss/aleknss.github.io
cd aleknss.github.io
npm install
npm run dev
```

Visita http://localhost:4321

## Estructura del proyecto

```markdown
portfolio/
├── public/                 # Assets estáticos (cv.pdf, favicon, og-image, robots)
├── src/
│   ├── assets/             # Imágenes (optimizadas por Astro)
│   ├── components/
│   │   └── portfolio/      # Componentes .astro (secciones + UI)
│   ├── content/            # Contenido (Content Collections)
│   │   ├── projects/       #   {es,en}/<slug>.yaml  (1 archivo por proyecto)
│   │   ├── site/           #   {es,en}.yaml  (bio, contactos, educación, experiencia)
│   │   └── skills/         #   skills.yaml
│   ├── i18n/               # Microcopy UI (labels ES/EN)
│   ├── layouts/            # Base.astro (SEO, tema, fuentes)
│   ├── lib/                # Tipos + helpers de acceso a contenido
│   └── pages/              # Rutas: index, en/index, servicios, 404
├── astro.config.mjs        # Configuración de Astro
├── keystatic.config.ts     # Esquema del CMS (Keystatic)
├── tsconfig.json
└── package.json
```

## Contenido

Todo el contenido editable vive en `src/content/` como **YAML** (nunca TS):

- **Proyectos** → `src/content/projects/{es,en}/<slug>.yaml` (`name`, `link`, `logo`, `skills`, `locale`, `order`, `description`).
- **Site** → `src/content/site/{es,en}.yaml` (nombre, bio, contactos, educación, experiencia, participaciones).
- **Skills** → `src/content/skills/skills.yaml` (languages / frameworks / tools).

Validado por Zod (`src/content.config.ts`) en build.

### CMS (Keystatic, solo local)

Con `npm run dev`, abre http://localhost:4321/keystatic para editar el contenido desde una UI. Escribe a los `.yaml`. Funciona **solo en local** (sin login); en producción las rutas del panel no se generan (`SKIP_KEYSTATIC=true` en el build). El esquema está en `keystatic.config.ts`.

El hosting está en **GitHub Pages**: cada commit a `main` dispara `.github/workflows/deploy.yml`.

## Scripts

```bash
npm run dev       # servidor de desarrollo (+ Keystatic en /keystatic)
npm run build     # build estático → dist/ (sin Keystatic)
npm run preview   # previsualizar el build
npm run check     # type-check (TS + .astro)
npm run lint      # ESLint
```
