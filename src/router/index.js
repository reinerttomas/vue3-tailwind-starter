import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { supabase } from '@/supabase/init';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
        auth: false,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Login',
        auth: false,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: 'Register',
        auth: false,
      },
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../views/CreateView.vue'),
      meta: {
        title: 'Create',
        auth: true,
      },
    },
    {
      path: '/workout/:id',
      name: 'Workout',
      component: () => import('../views/WorkoutView.vue'),
      meta: {
        title: 'View',
        auth: false,
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
router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();

  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
    } else {
      next({ name: 'Login' });
    }
  }

  next();
});

export default router;
