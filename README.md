# 🌐 Portfolio - Alek

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub-Pages&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=222222)

Mi sitio web personal desarrollado con Vite + React y TailwindCSS para mostrar mis proyectos, habilidades y experiencia profesional. Incluye toda mi experiencia, habilidades, contacto y features como modo oscuro.

**Live**: https://alek.is-a.dev/

## Índice

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Última integración](#última-integración)
- [Próximamente](#próximamente)

## Características

- 🎨 **Diseño Responsive**: Optimizado para móviles, tablets y desktops.
- 🌓 **Modo Oscuro/Claro**: Toggle con persistencia en `localStorage`.
- 🔍 **SEO**: Meta tags dinámicas.

## Instalación y configuración

- Node.js 18.x o superior
- npm

### Clonar el repositorio

```bash
git clone https://github.com/aleknss/aleknss.github.io
cd portfolio-web
```

### Instalar dependencias

```bash
npm install
npm run dev
```

Visita: http://localhost:3000

## Estructura del Proyecto

```markdown
portfolio-web/
├── public/ # Assets estáticos
│ └── index.html # Plantilla HTML
├── src/
│ ├── assets/ # Assets, imágenes
│ ├── components/ # Componentes React reutilizables
│ │ └── ui/
│ ├── pages/ # Parte de páginas
│ │ ├── Home/ # Secciones de Home
│ │ └── Home.tsx
│ ├── contexts/ # Contextos React
│ │ └── ThemeContext.ts
│ ├── layouts/ # Layouts de la página
│ └── App.tsx # Componente principal
├── .gitignore # Archivos ignorados por Git
├── package.json # Dependencias y scripts
└── tsconfig.json # Configuración de TypeScript
```

## Últimas integraciones

25-09-25
Traducción al inglés, no nos quedamos sujetos a un solo idioma y vamos a abrirnos un poco a un entorno más internacional. Al igual que el tema, ¡un click a un botón y muestra un cambio instantáneo!
![Traduccion](./src/assets/readme/languages-portfolio.jpg)

18-09-25
¡Nuevo tema! Dedicado a aquellos usuarios que no estén acostumbrados a usar el modo claro y así evitar ese flashbang repentino. Aventura un tono más moderno en comparación al tradicional y clásico anterior.

![Modo oscuro](./src/assets/readme/dark-theme-portfolio.jpg)
