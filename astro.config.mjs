/** @format */

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
const {
  STORYBLOK_TOKEN,
  SENTRY_AUTH_TOKEN,
  SENTRY_DNS_URL
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  cacheDir: './.cache',
  site: 'https://robstolte.nl',

  server: {
    port: 1234,
    host: true
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'never'
  },
  integrations: [sentry({
    dsn: SENTRY_DNS_URL,
    sourceMapsUploadOptions: {
      project: "portfolio",
      authToken: SENTRY_AUTH_TOKEN
    }
  }), spotlightjs(), mdx(), sitemap(), tailwind(), storyblok({
    accessToken: STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {
      region: 'eu'
    },
    // storyblok-js-client options
    components: {
      //home: 'pages/home',
      //page: 'storyblok/Page',
      //grid: 'storyblok/Grid',
      //feature: 'storyblok/Feature',
      //project: 'storyblok/Project',
      //blogpost: 'storyblok/BlogPost',
    },
    componentsDir: 'src',
    enableFallbackComponent: true,
    useCustomApi: false
  }), vue(), partytown()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});