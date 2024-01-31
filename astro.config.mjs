/** @format */

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';
import solidJs from "@astrojs/solid-js";
import lit from "@astrojs/lit";
const {
  STORYBLOK_TOKEN
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
      VideoPlayer: 'storyblok/VideoPlayer',
      TextSection: 'storyblok/TextSection',
      Chapter: 'storyblok/Chapter'
    },
    componentsDir: 'src',
    enableFallbackComponent: true,
    useCustomApi: false
  }), react({
    include: ['**/react/*']
  }), solidJs({
    include: ['**/solid/*']
  }), mdx(), sitemap(), tailwind(), vue(), svelte(), lit()],
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