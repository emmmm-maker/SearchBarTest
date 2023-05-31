import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/Layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/Home/index.vue'),
      },
      {
        path: 'classify',
        component: () => import('@/pages/Classify/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
