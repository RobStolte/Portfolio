/** @format */

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
const {
  STORYBLOK_TOKEN,
  SENTRY_DNS_URL,
  SENTRY_AUTH_TOKEN
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  cacheDir: "./.cache",
  site: "https://www.robstolte.nl",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover"
  },
  build: {
    format: "file",
    inlineStylesheets: "never"
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  integrations: [storyblok({
    accessToken: STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {
      region: "eu"
    },
    // storyblok-js-client options
    components: {
      BlogPost: "BlogPost",
      Grid: "Grid",
      Afbeelding: "Afbeelding",
      VideoPlayer: "VideoPlayer",
      TextSection: "TextSection",
      Chapter: "Chapter",
      LinkPreviewCard: "LinkPreviewCard"
    },
    componentsDir: "src/components/storyblok",
    enableFallbackComponent: true,
    useCustomApi: false
  }), preact(), mdx(), sitemap(), vue(), sentry({
    dsn: SENTRY_DNS_URL,
    sourceMapsUploadOptions: {
      project: "portfolio",
      authToken: SENTRY_AUTH_TOKEN
    }
  }), spotlightjs()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  
  
  // troll the scrapers
  redirects: {
    '/wp-admin': {
      status: 302,
          destination: 'https://youtu.be/rvrZJ5C_Nwg?si=PbC6j4EwTA4RgLpu&t=142',
    },
    '/wp-admin/admin-ajax.php': {
      status: 302,
      destination: 'https://youtu.be/RSfKXQM57lk?si=yqXAJDhh4PZjFp2-',
    },
    '/env': {
      status: 302,
      destination: 'https://youtu.be/dQw4w9WgXcQ?si=_TNnBnvJE1BIuM95',
    },
    '/env*': {
      status: 302,
      destination: 'https://youtu.be/Ruei-c4xn5o?si=2NrhC7KxB_1LeySr',
    },
    '/admin': {
      status: 302,
      destination: 'https://youtu.be/asjQNZn7vng?si=_MhwXtMKokQH7KA1',
    },
    '/admin*': {
      status: 302,
      destination: 'https://youtu.be/asjQNZn7vng?si=_MhwXtMKokQH7KA1',
    },
    '/laravel': {
      status: 302,
      destination: 'https://www.youtube.com/watch?v=9n-EZQvlonM',
    },
    '/.env': {
      status: 302,
      destination: 'https://youtu.be/asjQNZn7vng?si=_MhwXtMKokQH7KA1',
    },
  }
  
});