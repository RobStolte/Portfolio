import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config";
import { useStoryblokApi } from '@storyblok/astro'
const storyblokApi = useStoryblokApi()

interface Story {
  name: string;
  published_at: string;
  content: {
    description: string;
  };
  full_slug: string;
}


export async function GET() {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: import.meta.env.DEV ? "draft" : "published",
  })

  const items = data.stories.map((story: Story) => ({
    title: story.name,
    pubDate: story.published_at,
    description: story.content.description,
    link: story.full_slug,
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: items,
  });
}