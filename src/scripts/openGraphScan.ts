async function openGraphScan(url: string) {
    const encodedurl = encodeURIComponent(url)
    const fetchurl = `https://opengraph.io/api/1.1/site/${encodedurl}?app_id=c487c57b-c17a-4c1e-a975-f19950d3b092`
    try {

      const response = await fetch(fetchurl);
      const data = await response.json();
      return data.openGraph

    } catch (error) {
        return null
    }
}

export default openGraphScan