<template>
  <div :class="outlineBadge" :style="badgeStyle">
    {{ text }}
  </div>
</template>

<script>
import {stringToHexColor, contrastColor } from '@/scripts/colortools.ts';
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