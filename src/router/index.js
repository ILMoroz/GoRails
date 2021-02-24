import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/lk/Index.vue'
import Main from '../views/lk/Main.vue'
import Info from '../views/lk/Info.vue'
import MultiPlayer from '../views/lk/Mp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lk',
    name: 'lk',
    component: Index,
    children: [
      {
        path: 'index',
        component: Main,
      },
      {
        path: 'info',
        component: Info,
      },
      {
        path: 'mp',
        component: MultiPlayer,
      },
    ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
