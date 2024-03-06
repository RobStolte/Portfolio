import { useStoryblokApi } from '@storyblok/astro'
import type { story } from "@/scripts/interfaces";

class StoryblokAssetManager {
    storyblokApi: any;

    constructor() {
        this.storyblokApi = useStoryblokApi();
    }

    private getResolutionFromFilename(filename: string): string | null {
        const match = (filename.match(/\/m\/(\d+x\d+)\//)||[])[1];
        if (!match) {
            console.error("The filename is not structured correctly.");
            return null;
        }
        return match;
    }

    private getDimensions(resolution: string): number[] {
        return resolution.split('x').map(Number);
    }

    private validateDimensions(dimensions: number[]): boolean {
        const [width, height] = dimensions;
        if (isNaN(width) || isNaN(height)) {
            console.error("The original width and height could not be parsed into numbers.");
            return false;
        }
        if (width === 0) {
            console.error("Original width can't be zero.");
            return false;
        }
        return true;
    }

    public getRezAndAspectFromStoryAssetFilename(filename: string): { originalHeight: number, originalWidth: number, aspectRatio: number } {
        const resolution = this.getResolutionFromFilename(filename);
        if (!resolution) {
            console.error(`Couldn't get resolution from filename: ${filename}`);
            return { originalHeight: 0, originalWidth: 0, aspectRatio: 0 };
        }
        const dimensions = this.getDimensions(resolution);
        if (!this.validateDimensions(dimensions)) {
            console.error(`Invalid dimensions: ${dimensions}`);
            return { originalHeight: 0, originalWidth: 0, aspectRatio: 0 };
        }
        const [originalWidth = 0, originalHeight = 0] = dimensions;
        const aspectRatio = originalHeight / originalWidth || 0;
        return { originalHeight, originalWidth, aspectRatio };
    }

    public async createCollectionLists(collection: string) {
        const { data } = await this.storyblokApi.get('cdn/stories', {
            version: import.meta.env.DEV ? "draft" : "published",
            starts_with: `${collection}/`,
            is_startpage: false
        });
        return data.stories.map((story: story) => {
            return {
                title: story.name,
                badge: story.content.badge,
                slug: story.full_slug,
                description: story.content.description,
                image: story.content.heroImage,
                date: story.published_at,
                tags: story.tag_list,
            }
        });
    }
}

export { StoryblokAssetManager };