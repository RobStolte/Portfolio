interface blogSchema {
    title               : string,
    description         : string,
    pubDate             : Date,
    updatedDate         : string,
    heroImage           : string,
    badge               : string,
}

interface projectsSchema {
    title               : string,
    description         : string,
    pubDate             : Date,
    updatedDate         : string,
    heroImage           : string,
    badge               : string,
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
    timelineElement: boolean;
    title: string;
    description?: string;
    startDate?: startDate;
    endDate?: number;
    image?: string;
    imageAlt?: string;
    link?: string;
}
interface timelineElementSorted {
    name: string;
    data: timelineElement[];
}
interface startDate {
    startDate: number | null;
  }