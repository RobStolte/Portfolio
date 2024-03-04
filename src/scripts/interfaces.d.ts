/**
 * Represents a timeline element.
 *
 * @interface
 */
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
/**
 * Represents a sorted timeline element.
 */
export interface timelineElementSorted {
    name: string;
    data: timelineElement[];
}
/**
 * @interface startDate
 * Represents a start date.
 */
export interface startDate {
    startDate: number | null;
}

/**
 * Represents a game on Steam.
 * @interface
 */
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
/**
 * Represents a target for a link or form submit action.
 */
export interface a_target { 
    target: "_self"|"_blank"|"_parent"|"_top" 
}