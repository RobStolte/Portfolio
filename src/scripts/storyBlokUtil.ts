import { useStoryblokApi } from '@storyblok/astro'
const storyblokApi = useStoryblokApi();
import type { story } from "@/scripts/interfaces";



/**
 * Retrieves the resolution from a given story asset filename.
 * @param {string} filename
 * @return {string|null}
 */
function getResolutionFromFilename(filename: string): string | null {
    const match = (filename.match(/\/m\/(\d+x\d+)\//)||[])[1];
    if (!match) {
        console.error("The filename is not structured correctly.");
        return null;
    }
    return match;
}

/**
 * Extracts width and height from the resolution string.
 * @param {string} resolution
 * @return {number[]}
 */
function getDimensions(resolution: string): number[] {
    return resolution.split('x').map(Number);
}

/**
 * Checks if dimensions are valid numbers and that width is not zero.
 * @param {number[]} dimensions
 * @return {boolean}
 */
function validateDimensions(dimensions: number[]): boolean {
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

/**
 * Retrieves the resolution and aspect ratio from a given story asset filename.
 * @param {string} filename - The filename of the story asset.
 * @return {Object} An object containing the original height, original width, and aspect ratio.
 */
function getRezAndAspectFromStoryAssetFilename(filename: string): { originalHeight: number, originalWidth: number, aspectRatio: number } {
    const resolution = getResolutionFromFilename(filename);
    if (!resolution) {
        console.error(`Couldn't get resolution from filename: ${filename}`);
        return { originalHeight: 0, originalWidth: 0, aspectRatio: 0 };
    }
    const dimensions = getDimensions(resolution);
    if (!validateDimensions(dimensions)) {
        console.error(`Invalid dimensions: ${dimensions}`);
        return { originalHeight: 0, originalWidth: 0, aspectRatio: 0 };
    }
    const [originalWidth = 0, originalHeight = 0] = dimensions;
    const aspectRatio = originalHeight / originalWidth || 0;

    return { originalHeight, originalWidth, aspectRatio };
}

export { getRezAndAspectFromStoryAssetFilename }

export async function  createCollectionLists(collection: string) {
    const { data } = await storyblokApi.get('cdn/stories', {
        version: import.meta.env.DEV ? "draft" : "published",
        starts_with: `${collection}/`,
        is_startpage: false
    })
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
    })
}