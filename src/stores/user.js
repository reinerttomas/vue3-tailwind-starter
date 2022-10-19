import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  function setUser(payload) {
    user.value = payload ? payload.user : null;
  }

  return { user, setUser };
});
