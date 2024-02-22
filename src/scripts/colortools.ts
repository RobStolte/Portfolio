
/**
 * Converts a given string to a corresponding hexadecimal color.
 *
 * @param {string} text - The string to be converted.
 * @return {string} - The hexadecimal color.
 */
function stringToHexColor (text: string): string {
  const str = text;
  if (!str) {
    return '#007ac3';
  }
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += (`00${value.toString(16)}`).slice(-2);
  }
  return color;
}


/**
 * Calculates the contrast color based on the provided input color.
 *
 * @param {string} inputColor - The input color to calculate the contrast color for. It can be either in hexadecimal format (#RRGGBB) or a color name.
 *
 * @returns {string} The contrast color. It will be either 'black' or 'white'.
 */
function contrastColor (inputColor : string): string {
    const color = (inputColor.charAt(0) === '#') ? inputColor.substring(1, 7) : inputColor;
    const r = parseInt(color.substring(0, 2), 16); // red
    const g = parseInt(color.substring(2, 4), 16); // green
    const b = parseInt(color.substring(4, 6), 16); // blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  }
export { stringToHexColor, contrastColor };