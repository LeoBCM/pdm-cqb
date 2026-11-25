// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pdm-cqb.coelhomachado.com.br',
  integrations: [svelte()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Bowlby One",
    cssVariable: "--bowlby"
  },
  {
    provider: fontProviders.fontsource(),
    name: "Alef",
    cssVariable: "--alef"
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});
