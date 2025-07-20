<template>
    <div class="coming-page">
        <h1>🚧 아직 준비중인 기능입니다.</h1>
        <p>조금만 기다려 주세요!</p>
        <router-link to="/" class="back-btn">홈으로 돌아가기</router-link>
    </div>
</template>

<script>
export default {
    name: 'ComingSoon'
}
</script>

<style scoped>
.coming-page {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--fg);
    background-color: var(--bg);
    text-align: center;
    padding: 2rem;
}

.coming-page h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.coming-page p {
    margin-bottom: 2rem;
    color: var(--fg);
}

.back-btn {
    padding: 0.5rem 1rem;
    background-color: var(--accent);
    color: #fff;
    border-radius: 0.25rem;
    text-decoration: none;
    transition: background-color 0.2s;
}
.back-btn:hover {
    background-color: #369b6d;
}

.dark .coming-page {
    background-color: var(--bg);
    color: var(--fg);
}
.dark .coming-page p {
    color: var(--fg);
}
.dark .back-btn {
    background-color: var(--accent);
}
.dark .back-btn:hover {
    background-color: #58c293;
}
</style>
