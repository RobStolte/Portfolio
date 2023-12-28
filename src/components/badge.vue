<template>
  <div class="badge" :style="{ backgroundColor: badgeColor, color: textColor }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeColor() {
      const str = this.text;
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
    },
    textColor() {
      const bgColor = this.badgeColor;
      const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
      const r = parseInt(color.substring(0, 2), 16); // red
      const g = parseInt(color.substring(2, 4), 16); // green
      const b = parseInt(color.substring(4, 6), 16); // blue
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? 'black' : 'white';
    },
  },
};
</script>