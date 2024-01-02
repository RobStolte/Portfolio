/** @format */

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sentry from "@sentry/astro";
const {
  STORYBLOK_TOKEN,
  SENTRY_AUTH_TOKEN,
  SENTRY_DNS_URL
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  cacheDir: './.cache',
  site: 'https://www.robstolte.nl',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  build: {
    format: 'file',
    inlineStylesheets: 'never'
  },
  integrations: [storyblok({
    accessToken: STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {
      region: 'eu'
    },
    // storyblok-js-client options
    components: {
      BlogPost: 'storyblok/BlogPost',
      Grid: 'storyblok/Grid',
      Afbeelding: 'storyblok/Afbeelding',
      YoutubeVideo: 'storyblok/YoutubeVideo',
      TextSection: 'storyblok/TextSection',
      Chapter: 'storyblok/Chapter',
      linkPreviewCard: 'storyblok/linkPreviewCard',
    },
    componentsDir: 'src',
    enableFallbackComponent: true,
    useCustomApi: false
  }), mdx(), sitemap(), tailwind(), vue(), react(),
  partytown(),
  sentry({
    dsn: SENTRY_DNS_URL,
    sourceMapsUploadOptions: {
      project: "portfolio",
      authToken: SENTRY_AUTH_TOKEN,
    }
  }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});