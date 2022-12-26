 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

 const routes: Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        meta: {
          title: '登录',
        },
        component: () => import('@/view/login/index.vue')
    },
   {
       path: '/',
       name: 'Index',
       meta: {
           title: '首页',
           keepAlive: true,
           requireAuth: true
       },
       component: () => import('@/view/home/index.vue')
   }
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });

 export default router;