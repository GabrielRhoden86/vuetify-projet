import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const routes: Array<RouteRecordRaw> = [
 {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { title: 'Login' }
       }
    ]
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
        meta: { title: 'Home', requiresAuth: true },
      },
      {
        path: 'usuarios',
        name: 'usuarios',
        component: () => import('@/pages/UsersPage.vue'),
        meta: { title: 'Lista de usuários',  requiresAuth: true },
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem('acess_token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
