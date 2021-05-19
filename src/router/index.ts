import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Bebidas from '../views/Produtos/Bebidas.vue'
import Lanches from '../views/Produtos/Lanches.vue'
import Pratos from '../views/Produtos/Pratos.vue'
import Sobremesas from '../views/Produtos/Sobremesas.vue'

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
    path: '/lanches',
    name: 'Lanches',
    component: Lanches
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: Bebidas
  },
  {
    path: '/pratos',
    name: 'Pratos',
    component: Pratos
  },
  {
    path: '/sobremesas',
    name: 'Sobremesas',
    component: Sobremesas
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
