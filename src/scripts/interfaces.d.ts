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
 *
 * @interface
 */
export interface timelineElementSorted {
    name: string;
    data: timelineElement[];
}
/**
 * Represents a start date.
 *
 * @interface startDate
 * @property {number | null} startDate - The start date represented as a number or null if not specified.
 */
export interface startDate {
    startDate: number | null;
}

/**
 * Represents a game on Steam.
 * @interface
 * @property {number} appid - The Steam app identifier.
 * @property {string} name - The name of the game.
 * @property {number} [playtime_2weeks] - The playtime of the game in the last 2 weeks (optional).
 * @property {number} [playtime_forever] - The total playtime of the game (optional).
 * @property {string} [img_icon_url] - The URL of the game's icon image (optional).
 * @property {number} [playtime_windows_forever] - The total playtime of the game on Windows (optional).
 * @property {number} [playtime_mac_forever] - The total playtime of the game on Mac (optional).
 * @property {number} [playtime_linux_forever] - The total playtime of the game on Linux (optional).
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
 *
 * @interface a_target
 * @property {string} target - The target property specifies the window or frame to which the linked document will be displayed.
 *                             This property can have one of the following four values:
 *                             - "_self"   : Opens the linked document in the same window or frame as it was clicked.
 *                             - "_blank"  : Opens the linked document in a new window or tab.
 *                             - "_parent" : Opens the linked document in the parent frame.
 *                             - "_top"    : Opens the linked document in the full body of the window.
 */
export interface a_target { 
    target: "_self"|"_blank"|"_parent"|"_top" 
}

/**
 * Represents a story.
 * @interface
 */
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


/**
 * Interface representing a StoryBlok Asset.
 */
export interface storyBlokAsset {
    id :number
    alt: string
    name: string
    focus: string
    title: string
    source: string
    filename: string
    copyright: string
    fieldtype :string
    meta_data: object
    is_private: string
    is_external_url: boolean
}

/**
 * Represents an image block.
 * @interface
 */
export interface imageblok{
    maxSize: number
    subText: string
    imageAsset: storyBlokAsset
    isAnimating: boolean
}