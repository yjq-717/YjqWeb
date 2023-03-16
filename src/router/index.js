import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue'
import Comic from '@/views/Comic.vue'
import Reader from '@/views/Reader.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    //首页
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    //漫画详情
    {
      path: '/comic',
      name: 'comic',
      component: Comic,
      meta: {
        index: 2
      },
    },
    //阅读模式
    {
      path: '/comic/reader',
      name: 'reader',
      component: Reader,
    },
  ]
})

export default router
