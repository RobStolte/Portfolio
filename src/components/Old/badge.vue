<template>
    <div :class="outlineBadge" :style="badgeStyle">
        {{ text }}
    </div>
</template>

<script lang="ts">
import {contrastColor, stringToHexColor} from '@/scripts/colortools.ts';

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

<style>
.badge {
    align-items     : center;
    border-radius   : 1rem;
    box-shadow      : var(--shadowstyle__base);
    display         : flex;
    height          : 1.5rem;
    justify-content : center;
    margin          : 0.5rem;
    padding         : 0.5rem;
    width           : fit-content;
}

.badge-outline {
    border-width : 10px;
    box-shadow   : var(--shadowstyle__base), var(--shadowstyle__base-in);
}

</style>