interface PageDataItem {
    data: {
      title: string;
      heroImage: string;
      heroImageAlt: string;
      description: string;
      pricing: number;
      oldPricing: number;
      checkoutUrl: string;
      badge: string;
      details: string;
      tags: string[];
      custom_link: string;
      custom_link_label: string;
    };
    slug: string;
  }

  interface PageProps {
    data: PageDataItem[]
    url: {
      prev: string;
      next: string;
    }
  }

interface postSchema {
    title               : string,
    description         : string,
    pubDate             : Date,
    updatedDate         : Date,
    heroImage           : string,
    heroImageAlt        : string,
    badge               : string,
    tags                : string[],
}

interface storeSchema {
    title               : string,
    description         : string,
    custom_link_label   : string,
    custom_link         : string,
    updatedDate?        : Date,
    pricing             : string,
    oldPricing          : string,
    badge               : string,
    checkoutUrl         : string,
    heroImage           : string,
    heroImageAlt        : string,
}
interface timelineElement {
    category: string;
    timeline_element: boolean;
    title: string;
    description?: string;
    start_date?: startDate;
    end_date?: number;
    image?: string;
    link?: string;
}
interface timelineElementSorted {
    name: string;
    data: timelineElement[];
}
interface startDate {
    startDate: number | null;
  }