<template>
    <h1>Sign In</h1>
    <form @submit="handleSignIn">  
        <div>
            <div class="mb-3">   
                <label for="email" class="form-label">Email</label>
                <input type="email" placeholder="Enter your email" name="email" v-model="email" class="form-control" required>
            </div>

            <div class="mb-3">  
                <label for="password" class="form-label">Password</label>
                <input type="password" placeholder="Enter your password" name="password" v-model="password" class="form-control" required>
            </div>

            <div class="mb-3 button-div">  
                <button class="btn btn-primary" type="submit">Sign in</button>
            </div>

            <div class="mb-3 form-check">  
                <input class="form-check-input me-2" type="checkbox" checked="checked" name="remember">
                <label class="form-check-label mb-2">Remember me</label>
            </div>

            <div class="mb-3 div-links">  
                <a href="">Forgot password?</a>
                <p>New here? <RouterLink to="/Sign-up">Create an account.</RouterLink></p>
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

    div label, div input {
        padding-top: 10px;
        font-size: 16px;
    }

    .button-div {
        display: flex;
        justify-content: center;
    }

    .form-check {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    button {
        width: 140px;
        height: 40px;
        font-size: 18px;
        background-color: #A49E8D;
        border: none;
        letter-spacing: 2px;
        margin-top: 20px;
    }

    button:hover {
        background-color: #220C10;
    }

    .div-links {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div a, div p {
        padding-top: 5px;
    }

    @media (max-width: 480px) {
        h1 {
            padding-top: 10px;
            font-size: 24px;
        }
    }

</style>
  