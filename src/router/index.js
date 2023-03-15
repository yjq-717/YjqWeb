import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue'
import Comic from '@/views/Comic.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    {
      path: '/comic',
      name: 'comic',
      component: Comic,
      meta: {
        index: 2
      }
    }
  ]
})

export default router
