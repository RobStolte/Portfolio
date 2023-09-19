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