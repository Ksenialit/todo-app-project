<template>
    <h1>SignIn</h1>
    <form @submit="submit">  
        <div class="container">   
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email" name="email" v-model="email" required>

            <label for="password">Password:</label>
            <input type="password" placeholder="Enter Password" name="password" v-model="password" required>

            <button type="submit" @click="handleSignIn">Sign in</button>   

            <label>Remember me: </label>
            <input type="checkbox" checked="checked" name="remember">
              
            <a href="#">Forgot password?</a>
            <p>New? <RouterLink to="/Sign-up">Create an account.</RouterLink></p>
        </div>   
    </form> 
  
</template>
  
<script>
    import UserStore from '../store/user.js'
    import { mapState, mapActions } from 'pinia';
    
    export default{ 
        name: "SignIn",
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
            ... mapActions(UserStore, ['signIn']),
            async handleSignIn(event) {
                event.preventDefault()
                const userData = {
                    email: this.email,
                    password: this.password
                }
                try {
                    await this.signIn(userData)
                    console.log(this.user)
                } catch (error) {
                    alert('User does not exist')
                }
            }
        },
    }
  
</script>
  
<style scoped>
  
</style>
  