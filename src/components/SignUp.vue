<template>
    <h1>Create an account</h1>
    <form @submit="submit">
        <div>
            <div class="mb-3">  
                <label class="form-label" for="email">Email</label>
                <input class="form-control" type="email" placeholder="Enter your email" name="email" v-model="email" required>
            </div>

            <div class="mb-3">  
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" placeholder="Enter your password" name="password" v-model="password" required>
            </div>

            <div class="mb-3">  
                <label class="form-label" for="repeat-password">Repeat password</label>
                <input class="form-control" type="password" placeholder="Repeat your password" name="repeat-password" required>
                <!-- validate second password with function-->
            </div>

            <div class="mb-3 form-check">  
                <input class="form-check-input" type="checkbox" checked="checked" name="remember">
                <label class="form-check-label">Remember me</label>
            </div>

            <div class="mb-3">
                <p class="form-text">By creating an account, you agree to the Terms of Service and Privacy Policy.</p>
            </div>

            <div class="mb-3">  
                <button class="btn btn-primary" type="submit" @click="handleSignUp">Sign Up</button>
            </div>

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
  