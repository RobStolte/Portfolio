import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const blog = await getCollection("blog");
  const projecten = await getCollection("projecten");

  const combined = [...blog, ...projecten];

  const items = combined.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/${post.collection}/${post.slug}/`,
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: items,
  });
}