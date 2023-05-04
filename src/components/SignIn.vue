<template>
    <h1>Sign In</h1>
    <form @submit="submit">  
        <div>
            <div class="mb-3">   
                <label for="email" class="form-label">Email</label>
                <input type="email" placeholder="Enter your email" name="email" v-model="email" class="form-control" required>
            </div>

            <div class="mb-3">  
            <label for="password" class="form-label">Password</label>
            <input type="password" placeholder="Enter Password" name="password" v-model="password" class="form-control" required>
            </div>

            <div class="mb-3">  
            <button class="btn btn-primary" type="submit" @click="handleSignIn">Sign in</button>   
            </div>

            <div class="mb-3 form-check">  
                <input class="form-check-input" type="checkbox" checked="checked" name="remember">
                <label class="form-check-label">Remember me</label>
            </div>

            <div class="mb-3">  
            <a href="">Forgot password?</a>
            <p>New? <RouterLink to="/Sign-up">Create an account.</RouterLink></p>
            </div>
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
                    alert(error)
                }
            }
        },
    }
  
</script>
  
<style scoped>
  
</style>
  