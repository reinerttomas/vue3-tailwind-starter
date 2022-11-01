<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/images/dumbbell-light.png" />
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link :to="{ name: 'Home' }" class="cursor-pointer"
          >Home</router-link
        >
        <router-link v-if="user" :to="{ name: 'Create' }" class="cursor-pointer"
          >Create</router-link
        >
        <router-link v-if="!user" :to="{ name: 'Login' }" class="cursor-pointer"
          >Login</router-link
        >
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { supabase } from '@/supabase/init';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    // get user from store
    const user = computed(() => useUserStore().user);

    // Setup ref to router
    const router = useRouter();

    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: 'Home' });
    };

    return {
      logout,
      user,
    };
  },
};
</script>
