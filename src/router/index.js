import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/Grid.vue')
  },
  {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "botones" */ '../views/Botones.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "Cards" */ '../views/Cards.vue')
  },
  {
    path: '/columns',
    name: 'Columns',
    component: () => import(/* webpackChunkName: "Columns" */ '../views/Columns.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
