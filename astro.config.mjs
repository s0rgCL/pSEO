// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.smartpromptguide.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      // Generate a single sitemap.xml file instead of splitting
      entryLimit: 50000, // High limit to prevent splitting
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});