import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl'

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://robstolte.nl',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {
        region: "eu",
      }, // storyblok-js-client options
      components: {
        home: "pages/home",
        page: "storyblok/Page",
        grid: "storyblok/Grid",
        feature: "storyblok/Feature",
        project: "storyblok/Project",
        blogpost: "storyblok/BlogPost",
      },
      componentsDir: "src",
      enableFallbackComponent: true,
      useCustomApi: false,
    }),

   //sentry(),
   //spotlightjs()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    }
  }
});