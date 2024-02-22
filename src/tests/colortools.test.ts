import { describe, it, expect } from 'vitest';
import { stringToHexColor, contrastColor } from '@/scripts/colortools';

describe('stringToHexColor', () => {
  it('should return a hex color for a given string', () => {
    const result = stringToHexColor('test');
    expect(result).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('should return the same color for the same string', () => {
    const result1 = stringToHexColor('test');
    const result2 = stringToHexColor('test');
    expect(result1).toEqual(result2);
  });

  it('should return "#007ac3" for an empty string', () => {
    const result = stringToHexColor('');
    expect(result).toEqual('#007ac3');
  });
});

describe('contrastColor', () => {
  it('should return "black" for a light color', () => {
    const result = contrastColor('#ffffff');
    expect(result).toEqual('black');
  });

  it('should return "white" for a dark color', () => {
    const result = contrastColor('#000000');
    expect(result).toEqual('white');
  });

  it('should work with a color without a leading "#"', () => {
    const result = contrastColor('ffffff');
    expect(result).toEqual('black');
  });
});