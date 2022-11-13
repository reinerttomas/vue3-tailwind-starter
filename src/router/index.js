import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: 'Register',
      },
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../views/CreateView.vue'),
      meta: {
        title: 'Create',
      },
    },
    {
      path: '/workout/:id',
      name: 'Workout',
      component: () => import('../views/WorkoutView.vue'),
      meta: {
        title: 'View',
      },
    },
  ],
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active Tracker`;
  next();
});

// Route guard for auth routes

export default router;
