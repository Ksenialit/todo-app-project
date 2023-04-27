<template>
    <h1>SignIn</h1>
    <form @submit="submit">  
        <div class="container">   
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email" name="email" v-model="email" required>

            <label for="password">Password:</label>
            <input type="password" placeholder="Enter Password" name="password" v-model="password" required>

            <button type="submit">Sign in</button>   

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
                email: "",
                password: ""
            }
        },
        computed: {
            ... mapState(UserStore, ['user']) 
        },
        methods: {
            ... mapActions(UserStore, ['user'])
        }, /*
        created() {
            this.fetchUser
        }, */
        
       /* methods: {
            async submit () {
                const useUserStore = UserStore()
                try {
                    await useUserStore.singIn(this.email, this.password);
                    this.$router.push({ name: "dashboard" });
                } catch (error) {
                console.error(error);
                }
            }
        }*/
    }
  
</script>
  
<style scoped>
  
</style>
  