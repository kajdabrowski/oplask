import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleImg from '../views/SingleImg.vue'
import Liked from '../views/Liked.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SingleImg/:id',
    name: 'SingleImg',
    component: SingleImg
  },
  {
    path: '/Liked',
    name: 'Liked',
    component: Liked
  }
]

const router = new VueRouter({
  routes
})

export default router
