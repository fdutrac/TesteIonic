import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import Badges from '../views/Badges.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Login',
    component: Login
  },
  {
    path: '/boasvindas',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/badges',
    name: 'Badges',
    component: Badges
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
