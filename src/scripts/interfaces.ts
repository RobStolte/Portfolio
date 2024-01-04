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