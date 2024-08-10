import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

import { useCounterStore } from '@/store/pinia';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',// 登录页
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue')
  },
  {
    path: '/home', // 首页
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const counterStore = useCounterStore();
  // to:去哪 from：来自哪 next：放行的方法
  // next()使用：
  // next("/page")传参表示强制跳转的页面
  // next(false)表示拦截跳转  
  if (to.path !== '/' && counterStore.token != undefined) {
    console.log(111);
    next('/home');
  } else {
    console.log(222);

    next(); // 否则，正常导航
  }
})

export default router
