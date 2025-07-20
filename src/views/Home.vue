<template>
    <div class="home-page">
        <div class="profile-link-box-wrapper">
            <router-link to="/about" class="profile-link-box">
                <div class="profile-img-wrapper">
                    <img
                        src="../assets/profileImg.jpg"
                        alt="윤준석 프로필"
                        class="profile-img"
                    />
                </div>
                <div class="profile-text">
                    <h1>junseok0304</h1>
                    <h2>개발자 윤준석입니다.</h2>
                    <div class="horizontal-separator"></div>
                    <ul class="profile-list">
                        <li>사용자 관점의 설계를 추구하는 개발자</li>
                        <li>개발블로그 &amp; 포트폴리오 작성용 블로그 입니다!</li>
                    </ul>
                </div>
                <div class="arrow-icon">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                </div>
            </router-link>
        </div>

        <div class="separator"></div>
        <section class="welcome">
            <h1>현재 개발중입니다.</h1>
            <p>이곳은 홈 페이지의 추가 콘텐츠 영역입니다.</p>
        </section>
    </div>
</template>

<script>
export default {
    name: "HomePage",
};
</script>

<style scoped>
.separator {
    width: 100%;
    max-width: 1024px;
    height: 4px;
    background-color: #E0E0E0;
    margin: 1rem auto;
}

.dark .separator {
    background-color: #505050;
}

.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem 1rem;
}

.profile-link-box-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1024px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.profile-link-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 700px;
    height: 240px;
    border: 3px solid var(--muted);
    border-radius: 35px;
    background-color: var(--bg-card);
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    padding: 1.2rem 2rem 2rem 3rem;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.profile-link-box {
    --bg-card: #ffffff;
}


.dark .profile-link-box {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(217, 217, 217, 0.02);
}

.profile-link-box:hover {
    background-color: var(--muted);
    border-color: var(--accent);
}

.dark .profile-link-box:hover {
    background-color: rgba(217, 217, 217, 0.1);
    border-color: var(--accent);
}


.profile-img-wrapper {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    color: var(--fg);
    flex-grow: 1;
    justify-content: center;
}

.profile-text h1 {
    font-size: 1.6rem;
    font-weight: 900;
    margin-bottom: 0.1rem;
    color: var(--fg);
}

.profile-text h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0.6rem;
    color: var(--fg);
    line-height: 1.2;
}

.horizontal-separator {
    width: 80%;
    height: 2px;
    background-color: var(--muted);
    margin: 0.3rem 0 0.8rem 0;
}

.profile-list {
    margin: 0;
    padding-left: 0;
    list-style: none;
}

.profile-list li {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    color: var(--fg);
    line-height: 1.4;
}

.arrow-icon {
    position: absolute;
    right: 2rem;
    color: var(--fg);
    font-size: 2.2rem;
}

.profile-link-box:hover .arrow-icon {
    color: var(--accent);
}

.welcome {
    text-align: center;
    max-width: 800px;
}

.welcome h1 {
    margin: 0;
    font-size: 1.75rem;
}

.welcome p {
    margin: 0.5rem 0 0;
}

@media (max-width: 768px) {
    .profile-link-box-wrapper {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }
    .profile-link-box {
        flex-direction: column;
        width: 90%;
        height: auto;
        min-height: 240px;
        border-radius: 25px;
        padding: 1rem;
        gap: 1rem;
        border: 2px solid var(--muted);
    }
    .profile-img-wrapper {
        width: 100px;
        height: 100px;
    }
    .profile-text h1 {
        font-size: 1.4rem;
    }
    .profile-text h2 {
        font-size: 1.2rem;
    }
    .horizontal-separator {
        width: 60%;
        margin: 0.3rem 0 0.8rem 0;
    }
    .profile-list li {
        font-size: 0.9rem;
    }
    .arrow-icon {
        position: static;
        margin-top: 0.8rem;
        font-size: 2rem;
    }
    .separator {
        margin: 0.75rem auto;
    }
}
</style>