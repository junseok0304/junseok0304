<template>
    <header class="headerView">
        <div class="container">
            <div class="logo">
                <router-link to="/">junseok0304</router-link>
            </div>

            <nav class="nav">
                <router-link to="/" exact>홈</router-link>
                <router-link to="/comingsoon">글 목록</router-link>
                <router-link to="/comingsoon">프로젝트</router-link>
                <router-link to="/comingsoon">소개</router-link>
            </nav>

            <div class="actions">
                <router-link
                    to="/comingsoon"
                    class="icon-btn"
                    aria-label="검색"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20
                                2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11
                                C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18
                                11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711
                                19.4853L19.4853 18.0711Z"
                        />
                    </svg>
                </router-link>

                <button
                    class="icon-btn"
                    @click="toggleDark"
                    :aria-label="isDark ? '라이트 모드로' : '다크 모드로'"
                >
                    <svg
                        v-if="isDark"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="12" r="5"/>
                        <path
                            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2
                                    M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        />
                    </svg>
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                    >
                        <path d="M21 12.79A9 9 0 1112.21 3 7 7 0 0021 12.79z"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'AppHeader',
    setup() {
        const isDark = ref(false)

        const applyTheme = () => {
            document.documentElement.classList.toggle('dark', isDark.value)
        }

        const toggleDark = () => {
            isDark.value = !isDark.value
            applyTheme()
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
        }

        onMounted(() => {
            const saved = localStorage.getItem('theme')
            if (
                saved === 'dark' ||
                (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                isDark.value = true
            }
            applyTheme()
        })

        return {
            isDark,
            toggleDark
        }
    }
}
</script>

<style scoped>
:root {
    --bg: #ffffff;
    --fg: #333333;
    --muted: #ececec;
    --accent: #42b983;
}

.dark {
    --bg: #1e1e1e;
    --fg: #f0f0f0;
    --muted: #333333;
    --accent: #68d391;
}

.headerView {
    background-color: var(--bg);
    color: var(--fg);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 10;
}

.container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 60px;
}

.logo a {
    font-family: 'Borel', cursive;
    font-size: 1.6rem;
    color: var(--fg);
    text-decoration: none;
    font-weight: 400;
    line-height: 1;
    display: inline-block;
    position: relative;
    top: 2px;
}

.nav {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    gap: 1.5rem;
}

.nav a {
    text-decoration: none;
    color: var(--fg);
    font-weight: 500;
    transition: color .2s;
}

.nav a.router-link-active {
    color: var(--accent);
}

.actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.icon-btn {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color .2s;
}

.icon-btn:hover {
    background-color: var(--muted);
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    stroke: var(--fg);
    fill: var(--fg);
    transition: stroke .2s, fill .2s;
}

.icon-btn:hover .icon {
    stroke: var(--accent);
    fill: var(--accent);
}
</style>
