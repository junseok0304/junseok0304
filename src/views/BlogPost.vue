<template>
    <section v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    </section>
    <section v-else>
    <p>포스트를 찾을 수 없습니다.</p>
    </section>
</template>

<script>
import posts from '@/data/blogs.json'

export default {
    name: 'BlogPostView',
    computed: {
    post() {
        const slug = this.$route.params.slug
        return posts.find(p => p.slug === slug)
    }
    }
}
</script>

<style scoped>
/* 스타일 추가 예정 */
</style>
