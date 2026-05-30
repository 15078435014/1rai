import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Categories from '@/views/Categories.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'
import Tools from '@/views/Tools.vue'
import ToolDetail from '@/views/ToolDetail.vue'
import News from '@/views/News.vue'
import NewsDetail from '@/views/NewsDetail.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/categories/:slug', name: 'CategoryDetail', component: CategoryDetail },
  { path: '/tools', name: 'Tools', component: Tools },
  { path: '/tools/:id', name: 'ToolDetail', component: ToolDetail },
  { path: '/news', name: 'News', component: News },
  { path: '/news/:id', name: 'NewsDetail', component: NewsDetail },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
