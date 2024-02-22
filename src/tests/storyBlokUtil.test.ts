import { expect } from 'vitest';
import { getRezAndAspectFromStoryAssetFilename } from '@/scripts/storyBlokUtil';

const testUrls = [
  {
    testUrl               : 'https://a.storyblok.com/f/253533/128x130/2e98d96a6e/familiewapen-stolte-128.png/m/0x200/filters:quality(80):format(webp)',
    verticalResolution    : 0,
    horizontalResolution  : 200
  },
  {
    testUrl               :'https://a.storyblok.com/f/253533/128x130/2e98d96a6e/familiewapen-stolte-128.png/m/0x1024/filters:format(webp)',
    verticalResolution    : 0,
    horizontalResolution  : 1024,
  },
  {
    testUrl               : 'https://a.storyblok.com/f/39898/1000x600/d962430746/demo-image-human.jpeg/m/600x130/filters:focal(450x500:550x600):grayscale()',
    verticalResolution    : 600,
    horizontalResolution  : 130,
  },
  {
    testUrl               : 'https://a.storyblok.com/f/39898/1000x600/d962430746/demo-image-human.jpeg/m/600x230/filters:round_corner(30,255,255,255)',
    verticalResolution    : 600,
    horizontalResolution  : 230,
  }
];

describe('getRezAndAspectFromStoryAssetFilename', () => {
  for (const url of testUrls) {
    it(`should return the correct resolution and aspect ratio from a given filename: ${url.testUrl}`, () => {
      const result = getRezAndAspectFromStoryAssetFilename(url.testUrl);
      expect(result.originalWidth).toBe(url.verticalResolution);
      expect(result.originalHeight).toBe(url.horizontalResolution);
      expect(result.aspectRatio).toBe(url.horizontalResolution / url.verticalResolution);
    });
  }
});