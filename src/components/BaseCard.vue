<template>
    <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-excerpt">{{ excerpt }}</p>
    <router-link :to="link" class="card-link">자세히 보기 →</router-link>
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
    title:   { type: String, required: true },
    excerpt: { type: String, required: true },
    link:    { type: String, required: true }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    transition: box-shadow .2s;
}
.card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.card-title {
    margin: 0 0 .5rem;
    font-size: 1.25rem;
}
.card-excerpt {
    margin: 0 0 1rem;
    color: #555;
}
.card-link {
    text-decoration: none;
    color: #42b983;
    font-weight: 500;
}
</style>
