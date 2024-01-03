async function openGraphScan(url: string) {
    console.log('opengraph url: '+url);
    const encodedurl = encodeURIComponent(url)
    console.log('opengraph encodedurl: '+encodedurl);
    const fetchurl = `https://opengraph.io/api/1.1/site/${encodedurl}?app_id=c487c57b-c17a-4c1e-a975-f19950d3b092`
    console.log('opengraph fetchurl: '+fetchurl);
    try {

      const response = await fetch(fetchurl);
        console.log('opengraph response: '+response);
      const data = await response.json();
      console.log('opengraph data: '+data.openGraph);
      return data.openGraph

    } catch (error) {
        console.error('catcherror data: '+error);
        return null
    }
}

export default openGraphScan