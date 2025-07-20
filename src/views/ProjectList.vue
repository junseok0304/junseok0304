<template>
    <section class="projects-view">
        <h1>Projects</h1>

        <div class="tags-container">
            <button v-for="tag in availableTags" :key="tag" class="tag">{{ tag }}</button>
        </div>

        <div class="grid">
            <BaseProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </section>
</template>

<script>
import BaseProjectCard from '@/components/BaseProjectCard.vue';
import projectsData from '@/data/projects.json';

export default {
    name: 'ProjectList',
    components: { BaseProjectCard },
    data() {
        return {
            projects: projectsData,
        };
    },
    computed: {
        // projects.json에 있는 모든 태그를 중복 없이 가져옵니다.
        availableTags() {
            const allTags = new Set();
            this.projects.forEach(project => {
                if (project.tags) {
                    project.tags.forEach(tag => allTags.add(tag));
                }
            });
            return Array.from(allTags);
        },
    },
};
</script>

<style scoped>
.projects-view {
    padding: 2rem;
    max-width: 1024px;
    margin: 0 auto;
    color: #eee;
}

h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: center;
}

.tags-container {
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.tag {
    padding: 0.5rem 1rem;
    border: 1px solid #555;
    border-radius: 20px;
    background-color: #333;
    color: #eee;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.tag:hover {
    background-color: #555;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    justify-content: center;
    margin-top: 1rem;
}
</style>