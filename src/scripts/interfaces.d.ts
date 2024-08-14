export interface timelineElement {
    category: string;
    timeline_element: boolean;
    title: string;
    description?: string;
    start_date?: startDate;
    end_date?: number;
    image?: string;
    link?: string;
}


export interface SupabaseSkill {
    title: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    url?: {
        url: string;
    };
    company?: {
        name: string;
    };
    category?: {
        name: string;
    };
    location?: {
        name: string;
    };
}

export interface Skill {
    title: string;
    category: { name: string }[];
}


export interface post {
    title: string;
    image : storyBlokAsset;
    description: string;
    slug: string;
}



export interface timelineElementSorted {
    name: string;
    data: timelineElement[];
}




export interface startDate {
    startDate: number | null;
}




export interface steamGame {
    appid?: number;
    name: string;
    playtime_2weeks?: number;
    playtime_forever?: number;
    img_icon_url?: string;
    playtime_windows_forever?: number;
    playtime_mac_forever?: number;
    playtime_linux_forever?: number;
}




export interface a_target {
    target: "_self" | "_blank" | "_parent" | "_top"
}




export interface story {
    name: string;
    full_slug: string;
    content: {
        badge: string;
        description: string;
        heroImage: string;
    }
    published_at: string;
    tag_list: string[];
}




export interface storyBlokAsset {
    id: number
    alt: string
    name: string
    focus: string
    title: string
    source: string
    filename: string
    copyright: string
    fieldtype: string
    meta_data: object
    is_private: string
    is_external_url: boolean
}