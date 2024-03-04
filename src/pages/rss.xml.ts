import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config";
import { useStoryblokApi } from '@storyblok/astro'
import { PERSOONLIJKE_INFO } from "@/config";
/**
 * Represents the current date and time.
 *
 * @type {Date}
 */
const today = new Date();
/**
 * The storyblokApi variable is used to interact with the Storyblok API.
 *
 * @function useStoryblokApi
 * @returns {Object} The Storyblok API object.
 */
const storyblokApi = useStoryblokApi()

/**
 * Represents a story.
 * @interface
 */
interface Story {
  name: string;
  first_published_at: string;
  content: {
    description: string;
    heroImage: {
      filename: string,
      alt: string
    }
  };
  full_slug: string;
}


/**
 * Retrieves data from the storyblok API and returns an RSS feed.
 * @returns {Object} The RSS feed object.
 */
export async function GET() {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: import.meta.env.DEV ? "draft" : "published",
  })
  const items = data.stories.map((story: Story) => ({

    title         : story.name,
    pubDate       : story.first_published_at,
    description   : story.content.description,
    link          : story.full_slug,
    customData    : `
                    <copyright>${today.getFullYear()} ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam} All rights reserved.</copyright>
                    <language>nl-nl</language>
                    <image>
                      <url>${story.content.heroImage.filename}/m/0x144/filters:format(png)</url>
                      <width>144</width>
                      <title>${story.content.heroImage.alt}</title>
                      <link>${story.full_slug}</link>
                    </image>
                  `,
  }));
  return rss({
    title         : SITE_TITLE,
    description   : SITE_DESCRIPTION,
    site          : import.meta.env.SITE,
    items         : items,
  });
}