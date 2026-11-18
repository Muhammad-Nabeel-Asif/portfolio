import { defineConfig } from 'astro/config';
import { SITE_URL, BASE_PATH } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: {
    // One small stylesheet and no client framework: inlining saves the render-blocking request.
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
});
