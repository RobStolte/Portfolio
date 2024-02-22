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
 * @return {Object|null} An object containing the original height, original width, and aspect ratio, or null if the filename is not structured correctly.
 */
function getRezAndAspectFromStoryAssetFilename(filename: string): { originalHeight: number, originalWidth: number, aspectRatio: number } | null {
    const resolution = getResolutionFromFilename(filename);
    if (!resolution) {
        return null;
    }

    const dimensions = getDimensions(resolution);
    if (!validateDimensions(dimensions)) {
        return null;
    }

    const [originalWidth, originalHeight] = dimensions;
    const aspectRatio = originalHeight / originalWidth;
    return { originalHeight, originalWidth, aspectRatio };
}

export { getRezAndAspectFromStoryAssetFilename }