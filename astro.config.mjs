import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Reemplaza con tu dominio real. Si NO tienes dominio aún,
  // usa: site: 'https://ldalexander.github.io', base: '/biografia_web'
  site: 'https://johngarciav.com',
});
