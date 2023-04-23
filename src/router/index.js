import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue'
import Comic from '@/views/Comic.vue'
import Reader from '@/views/Reader.vue'
import Register from '@/views/Register.vue'

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/',
      name: 'index',
      component: () => import('@/layouts/Layout.vue'),
      redirect: '/home',
      children: [
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
      ],
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        index: 1
      }
    },
  ]
})

export default router
