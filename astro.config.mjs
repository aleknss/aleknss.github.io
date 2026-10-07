// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alek.is-a.dev',
  base: '/',
  integrations: [
    react(),
    sitemap(),
    // Keystatic solo en local/dev; en build se omite con SKIP_KEYSTATIC=true
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
