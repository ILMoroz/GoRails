import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Billing from '../views/lk/Billing.vue'
import Main from '../views/lk/Main.vue'
import Lk from '../views/lk/LK.vue'
import ProfileRTS from '../views/lk/ProfileRTS.vue'
import ProfileMTS from '../views/lk/ProfileMTS.vue'
import MultiPlayer from '../views/lk/Mp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/billing',
    name: 'billing',
    component: Billing,
    children: [
      { path: '', component: Main },
      {
         path: 'lk',
         component: Lk,
         children: [
           { path: '', component: ProfileRTS},
           { path: 'metro', component: ProfileMTS}
         ]
      },
      { path: 'mp',  component: MultiPlayer,},
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
