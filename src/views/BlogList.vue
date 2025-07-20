<template>
    <section class="blog-list">
        <h2>Blog Posts</h2>
        <div class="grid">
            <Card
                v-for="post in visiblePosts"
                :key="post.id"
                :title="post.title"
                :excerpt="post.excerpt"
                :link="`/blog/${post.slug}`"
            />
        </div>

        <div class="pagination">
            <button :disabled="currentPage === 1" @click="prevPage">Prev</button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
        </div>
    </section>
</template>

<script>
import Card from '@/components/BaseCard.vue';
import postsData from '@/data/blogs.json';

export default {
    name: 'BlogList',
    components: { Card },
    data() {
        return {
            posts: [],
            currentPage: 1,
            postsPerPage: 9, // 한 페이지에 표시할 포스트 개수
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.posts.length / this.postsPerPage);
        },
        visiblePosts() {
            const startIndex = (this.currentPage - 1) * this.postsPerPage;
            const endIndex = startIndex + this.postsPerPage;
            return this.posts.slice(startIndex, endIndex);
        },
    },
    created() {
        this.posts = postsData.map((post, index) => ({
            id: post.id || index,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
        }));
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>

<style scoped>
.blog-list {
    padding: 2rem;
    max-width: 1024px;
    margin: 0 auto;
}

.blog-list h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #eee;
    text-align: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    justify-content: center;
}

.pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #eee;
}

.pagination button {
    padding: 0.5rem 1rem;
    border: 1px solid #555;
    border-radius: 4px;
    background-color: #333;
    color: #eee;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.pagination button:hover:not(:disabled) {
    background-color: #555;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination span {
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
