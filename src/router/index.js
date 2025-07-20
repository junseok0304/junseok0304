import { createRouter, createWebHistory } from 'vue-router'
import HomeView   from '@/views/Home.vue'
import BlogList   from '@/views/BlogList.vue'
import BlogPost   from '@/views/BlogPost.vue'
import ProjectList from '@/views/ProjectList.vue'
import AboutView  from '@/views/About.vue'
import ComingSoon from '../views/ComingSoon.vue'

const routes = [
  { path: '/',           name: 'Home',      component: HomeView },
  { path: '/blog',       name: 'BlogList',  component: BlogList },
  { path: '/blog/:slug', name: 'BlogPost',  component: BlogPost },
  { path: '/projects',   name: 'Projects',  component: ProjectList },
  { path: '/about',      name: 'About',     component: AboutView },
  { path: '/comingsoon', name: 'ComingSoon', component: ComingSoon }
]

export default createRouter({
  history: createWebHistory(),
  routes
})