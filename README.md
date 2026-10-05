# 🌐 Portfolio - Alek

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CloudCannon](https://img.shields.io/badge/CloudCannon-4471F0?style=for-the-badge&logo=cloudcannon&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub-Pages&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=222222)

Mi sitio web personal, 100% **Astro** (estático, sin React) + TailwindCSS. Muestra proyectos, experiencia, habilidades y contacto. Incluye modo oscuro, i18n (ES/EN), carrusel de diapositivas y formulario de contacto.

**Live**: https://alek.is-a.dev/

## Índice

- [Tecnologías](#tecnologías)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contenido y CMS](#contenido-y-cms)
- [Scripts](#scripts)

## Tecnologías

- **Astro** (output estático, `src/pages/`)
- **Tailwind CSS v4** (tokens en `src/index.css`)
- **TypeScript** estricto, validado con `astro check`
- **Content Collections** + schemas Zod
- **CloudCannon** (CMS git-based)
- Interactividad **vanilla JS** (sin frameworks de UI)

## Características

- 🎨 **Diseño Responsive**: móvil, tablet y desktop.
- 🌓 **Modo Oscuro/Claro**: toggle vanilla con persistencia en `localStorage` (sin flash, script inline en el layout).
- 🌍 **i18n**: rutas reales `/` (ES) y `/en/`, con `hreflang` y canonical.
- 🧭 **Scrollspy**: navegación lateral con `IntersectionObserver`.
- 🖼️ **Carrusel** de diapositivas vanilla.
- ✉️ **Formulario** de contacto vía Web3Forms (`PUBLIC_WEB3FORMS_KEY`).
- 🔍 **SEO**: meta dinámicas, Open Graph y JSON-LD.
- 📦 **Contenido gestionado por CMS** (CloudCannon), validado por Zod en build.

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
├── schemas/                # Schemas de CloudCannon (input types)
├── src/
│   ├── assets/             # Imágenes (optimizadas por Astro)
│   ├── components/
│   │   └── portfolio/      # Componentes .astro (secciones + UI)
│   ├── content/            # Contenido (Content Collections)
│   │   ├── projects/       #   {es,en}/<slug>.md  (1 archivo por proyecto)
│   │   ├── site/           #   {es,en}.yml  (bio, contactos, educación, experiencia)
│   │   └── skills/         #   skills.yml
│   ├── i18n/               # Microcopy UI (labels ES/EN)
│   ├── layouts/            # Base.astro (SEO, tema, fuentes)
│   ├── lib/                # Tipos + helpers de acceso a contenido
│   └── pages/              # Rutas: index, en/index, projects/[slug], 404
├── astro.config.mjs        # Configuración de Astro
├── cloudcannon.config.yml  # Mapeo de colecciones para el CMS
├── tsconfig.json
└── package.json
```

## Contenido y CMS

Todo el contenido editable vive en `src/content/` como **Markdown/YAML** (nunca TS), para que CloudCannon pueda editarlo:

- **Proyectos** → `src/content/projects/{es,en}/<slug>.md`. Frontmatter validado por schema Zod (`name`, `link`, `logo`, `skills`, `locale`, `order`, `description`).
- **Site** → `src/content/site/{es,en}.yml` (nombre, bio, contactos, educación, experiencia, participaciones).
- **Skills** → `src/content/skills/skills.yml` (languages / frameworks / tools).

CloudCannon se conecta al repo Git, edita estos archivos y hace commit. Configuración:

- Build command: `npm run build`
- Output: `dist`
- Configuración de colecciones: `cloudcannon.config.yml`
- Schemas de inputs: `schemas/`

El hosting sigue en **GitHub Pages**: cada commit dispara `.github/workflows/deploy.yml`.

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # build estático → dist/
npm run preview   # previsualizar el build
npm run lint      # ESLint
npx astro check   # type-check (TS + .astro)
```
