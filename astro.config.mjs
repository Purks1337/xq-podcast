import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const base = process.env.ASTRO_BASE !== undefined
  ? process.env.ASTRO_BASE
  : '/xq-podcast';

// https://astro.build/config
export default defineConfig({
  site: 'https://Purks1337.github.io',
  base,
  adapter: node({
    mode: 'standalone',
  }),
});

