<template>
    <div class="project-card">
        <div class="image-placeholder">
            <div style="width: 100%; height: 150px; background-color: #444; display: flex; justify-content: center; align-items: center; color: #999;">
                <span>Image Placeholder</span>
            </div>
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
        </div>
        </div>
</template>

<script>
export default {
    name: 'BaseProjectCard',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.project-card {
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1rem;
    background-color: #222;
    color: #eee;
    transition: box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    gap: 0.75rem; /* 요소들 사이의 간격 */
}

.project-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-placeholder {
    width: 100%;
    /* height는 내부 스타일에서 직접 설정 */
    border-radius: 4px; /* 이미지 영역 모서리 둥글게 */
    overflow: hidden; /* 이미지가 넘치지 않도록 */
    margin-bottom: 0.5rem;
}

.project-title {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.3;
}

.project-description {
    margin-top: 0;
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.4;
    flex-grow: 1;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}

.project-tag {
    padding: 0.3rem 0.7rem;
    border: 1px solid #555;
    border-radius: 15px;
    background-color: #444;
    color: #eee;
    font-size: 0.8rem;
}
</style>
