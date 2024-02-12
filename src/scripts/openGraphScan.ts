
import { FAVICON } from 'nw/starry-star/src/config';
async function openGraphScan(url: string) {
  const encodedurl = encodeURIComponent(url)
  const fetchurl = `https://opengraph.io/api/1.1/site/${encodedurl}?app_id=${import.meta.env.OG_API_KEY}`
  try {
    const response = await fetch(fetchurl);
    const data = await response.json();
    return data.hybridGraph
  } catch (error) {
      return {
          title: "Error",
          description: "Error",
          url: "Error",
          image: FAVICON
      }
  }
}

export default openGraphScan