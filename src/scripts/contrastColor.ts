export default function contrastColor(inputColor: string) {
    const color = (inputColor.charAt(0) === '#') ? inputColor.substring(1, 7) : inputColor;
    const r = parseInt(color.substring(0, 2), 16); // red
    const g = parseInt(color.substring(2, 4), 16); // green
    const b = parseInt(color.substring(4, 6), 16); // blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  }