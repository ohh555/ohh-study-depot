import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // 首页
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',// 登录页
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue')

  },
  {
    path: '/SignIn',// 注册页
    name: 'SignIn',
    component: () => import('@/views/login/SignInView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
