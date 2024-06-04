<template>
    <div :class="['expanded__detail_card', className]">
        <img :src="icon_url"
             alt="title"
             class="icon"
             :style="{ 
                width: icon_size + 'px',
                height: icon_size + 'px' 
        }" />
        <div class="content">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        icon_url: String,
        icon_size: Number,
        className: String
    }
}
</script>

<style scoped>
.expanded__detail_card {
    width: 15rem;
    height: 6rem;
    background-color: var(--background__base);
    border: 10px solid var(--background__base);
    border-radius: 1rem;
    transition: 0.5s;
}
.expanded__detail_card:hover {
    box-shadow: var(--shadowstyle__base-in);
    height: 100%;
}
.icon {
    margin: 1rem auto;
    padding: 0.3rem;
    border-radius: 50%;
    box-shadow: var(--shadowstyle__base);
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--background__base);
    padding: 1rem;
    margin: 0.2rem 1rem 0.2rem 1rem;
    border-radius: 1rem;
    box-shadow: var(--shadowstyle__base);
    transform: translateY(-90px) scale(0);
}
.expanded__detail_card:hover .content {
    transform: translateY(0) scale(1);
    max-height: 1000px;
}
</style>