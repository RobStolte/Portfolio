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
const {
  STORYBLOK_TOKEN
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  cacheDir: "./.cache",
  site: "https://www.robstolte.nl",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {
        region: "eu",
      },
      // storyblok-js-client options
      components: {
        BlogPost: "BlogPost",
        Grid: "Grid",
        Afbeelding: "Afbeelding",
        VideoPlayer: "VideoPlayer",
        TextSection: "TextSection",
        Chapter: "Chapter",
        LinkPreviewCard: "LinkPreviewCard",
      },
      componentsDir: "src/components/storyblok",
      enableFallbackComponent: true,
      useCustomApi: false,
    }),
    preact(),
    mdx(),
    sitemap(),
    vue(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
