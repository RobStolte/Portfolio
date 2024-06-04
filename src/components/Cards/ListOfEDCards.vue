<script>
import ExpandedDetailCard from "@/components/Cards/ExpandedDetailCard.vue";

export default {
    components: {ExpandedDetailCard},
    props:{
        cards: [{
            title: String,
            description: String,
            icon_url: String,
            icon_size: [Number, String],
            className: String
        }]
    }
}

</script>

<template>
    <div v-for="card in cards" :key="card.id">
        <expanded-detail-card
            :title="card.title"
            :description="card.description"
            :icon_url="card.icon_url"
            :icon_size="card.icon_size"
            :class-name="card.className"
            />
    </div>
</template>

<style scoped>

</style>