<template>
    <h1>SignUp</h1>
    <form @submit="submit">
        <div class="container">
            <p>Create an account.</p>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email" name="email" v-model="email" required>

            <label for="password">Password:</label>
            <input type="password" placeholder="Enter Password" name="password" v-model="password" required>

            <label for="repeat-password">Repeat Password:</label>
            <input type="password" placeholder="Repeat Password" name="repeat-password" required>
            <!-- validar password with function-->

            <label>Remember me:</label>
            <input type="checkbox" checked="checked" name="remember">

            <p>By creating an account, you agree to the Terms of Service and Privacy Policy.</p>

            <button type="submit" class="" @click="handleSignUp">Sign Up</button>
        </div>
        <!--email de confirmación y alerta de que tiene que confirmar email-->
    </form> 
  </template>
  
  <script>
  import UserStore from '../store/user'
  import { mapState, mapActions } from 'pinia';

  export default {
    name: "SignUp",
    components: {},
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
            ... mapState(UserStore, ['user']) 
    },
    methods: {
        ... mapActions(UserStore, ['signUp']),
        async handleSignUp(event) {
            event.preventDefault()
            const userData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.signUp(userData)
            } catch (error) {
                alertexists('User already ')
            }
           
        }
    },
    }
  
  </script>
  
  <style scoped>
  
  </style>
  