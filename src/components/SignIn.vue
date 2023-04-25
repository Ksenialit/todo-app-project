<template>
    <h1>SignIn</h1>
    <form @submit="submit">  
        <div class="container">   
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <button type="submit">Sign in</button>   

            <label>Remember me: </label>
            <input type="checkbox" checked="checked" name="remember">
              
            <a href="#">Forgot password?</a>
            <p>New? <RouterLink to="/Sign-up">Create an account.</RouterLink></p>
        </div>   
    </form> 
  
  </template>
  
  <script>
  
  export default {
    name: "SignIn",
    components: {
      
    },
    data() {
      
    }

    /*
    import { useUserStore } from '../store/user';
    import { ref } from 'vue';
    const email = ref([]);
    const password = ref([]);
    const userStore = useUserStore()
    const submit = (event) => {
    event.preventDefault()
    userStore.signIn(email.value, password.value)
}

    */
  }
  
  </script>
  
  <style scoped>
  
  </style>
  