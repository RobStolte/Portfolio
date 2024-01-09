const getRezAndAspectFromStoryAssetFilename = (filename: string) => {
const urlParts = filename.split('/');
const dimensions = urlParts[urlParts.length - 3].split('x');
const originalWidth = Number(dimensions[0]);
const originalHeight = Number(dimensions[1]);
const aspectRatio = originalHeight / originalWidth;
return {originalHeight, originalWidth, aspectRatio};
};

export {getRezAndAspectFromStoryAssetFilename}