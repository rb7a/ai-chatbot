// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import { config } from 'dotenv';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Cargar variables de entorno
config();

// https://astro.build/config
export default defineConfig({
  output: 'server', // Habilitar server-side rendering para API routes
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
