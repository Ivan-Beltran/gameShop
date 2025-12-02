import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PlayStation from '@/pages/PlayStation.vue'
import Xbox from '@/pages/Xbox.vue'
import Nintendo from '@/pages/Nintendo.vue'
import PcPage from '@/pages/PcPage.vue'
import SalePage from '@/pages/SalePage.vue'
import UserProfile from '@/pages/UserProfile.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/playstation',
    name: 'playstation',
    component: PlayStation
  },
  {
    path: '/xbox',
    name: 'xbox',
    component: Xbox
  },
  {
    path: '/nintendo',
    name: 'nintendo',
    component: Nintendo
  },
  {
    path: '/pcPage',
    name: 'pcPage',
    component: PcPage
  },
  {
    path: '/SalePage',
    name: 'salePage',
    component: SalePage
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ,{
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
