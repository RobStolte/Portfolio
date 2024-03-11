<template>
    <label class="label">
        <div class="toggle">
            <input v-model="value" class="toggle-state" type="checkbox"/>
            <div class="indicator"></div>
        </div>
    </label>
</template>

<script>
export default {
    data() {
        return {
            value: false
        }
    }
}
</script>

<style scoped>
:root {
    --button-size: 2rem
}

.label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.label-text {
    margin-left: 16px;
}

.toggle {
    isolation: isolate;
    position: relative;
    height: 2rem;
    width: 4rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadowstyle__base), var(--shadowstyle__base-in);
}

.toggle-state {
    display: none;
}

.indicator {
    height: 100%;
    width: 200%;
    background: hsl(var(--background__h) var(--background__s) calc(5% + var(--background__l)));
    border-radius: 1rem;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: var(--shadowstyle__base);
}

.toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
}
</style>