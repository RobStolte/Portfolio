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
    target: "_self"|"_blank"|"_parent"|"_top" 
}