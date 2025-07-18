// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://mgurov.github.io',
    base: '/presi',
    trailingSlash: 'always',
    redirects: {
    "/presi/01-tip/": "/presi/presi/01-tip/dev/",
  }
});
