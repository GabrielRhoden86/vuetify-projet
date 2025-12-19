import { defineStore } from 'pinia';
import { ref  } from 'vue';
import { authService } from '@/services/authService';

export const useAuthStore = defineStore('auth', () => {

  const token = ref<string | null>(null);

  async function login(email: string, password: string) {
    const result = await authService.login(email, password);
    if (result.access_token) {
      localStorage.setItem('acess_token', result.access_token);
        return token.value = result.access_token;
    }
  }

  return{
    login,
  }

});
