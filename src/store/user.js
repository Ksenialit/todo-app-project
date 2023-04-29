// /store/user.js
 
import { defineStore } from 'pinia';
import supabase from '../supabase.js';
 
export default defineStore('user', {
  state: () => ({
    user: null,
  }),
 
  actions: {
    async fetchUser () {
      const { data: { user } } = await supabase.auth.getUser()
      this.user = user
      if (!user) throw new Error('User does not exist')
      
    },
    async signUp ({ email, password }) {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signIn ({ email, password }) {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signOut () {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
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
// auth user: https://supabase.com/docs/reference/javascript/auth-api