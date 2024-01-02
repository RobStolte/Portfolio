<template>
  <div :class="outlineBadge" :style="badgeStyle">
    {{ text }}
  </div>
</template>

<script>
function stringToHexColor(text) {
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
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }
function contrastColor(inputColor) {
    const color = (inputColor.charAt(0) === '#') ? inputColor.substring(1, 7) : inputColor;
    const r = parseInt(color.substring(0, 2), 16); // red
    const g = parseInt(color.substring(2, 4), 16); // green
    const b = parseInt(color.substring(4, 6), 16); // blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  }
export default {
  props: {
    text: {
      required: true,
    },
    outline: {
      type: String,
      default: 'false',
    },
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    outlineBadge() {
      return this.outline === 'true' ? `badge badge-outline ${this.classes}` : `badge ${this.classes}`;
    },
    badgeStyle() {
      if (this.outline === 'true') {
        return {
          borderColor: stringToHexColor(this.text),
        };
      } else {
        return {
          backgroundColor: stringToHexColor(this.text),
          color: contrastColor(stringToHexColor(this.text)),
        };
      }
    },
  },
};
</script>