interface postSchema {
    title               : string,
    description         : string,
    pubDate             : Date,
    updatedDate         : Date,
    heroImage           : string,
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