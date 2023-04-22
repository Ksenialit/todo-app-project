// /store/user.js
 
import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
 
  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
}});

// Here is a basic user store. We’ve only given you two actions: fetchUser and signUp. 
// You’ll need to create signIn and signOut.