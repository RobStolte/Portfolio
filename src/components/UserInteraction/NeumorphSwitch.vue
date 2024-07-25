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
    --button-size : 2rem
}

.label {
    align-items : center;
    cursor      : pointer;
    display     : inline-flex;
}

.label-text {
    margin-left : 16px;
}

.toggle {
    border-radius : 1rem;
    box-shadow    : var(--shadowstyle__base), var(--shadowstyle__base-in);
    height        : 2rem;
    isolation     : isolate;
    overflow      : hidden;
    position      : relative;
    width         : 4rem;
}

.toggle-state {
    display : none;
}

.indicator {
    background    : hsl(var(--background__h) var(--background__s) calc(5% + var(--background__l)));
    border-radius : 1rem;
    box-shadow    : var(--shadowstyle__base);
    height        : 100%;
    transform     : translate3d(-75%, 0, 0);
    transition    : transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    width         : 200%;
}

.toggle-state:checked ~ .indicator {
    transform : translate3d(25%, 0, 0);
}
</style>