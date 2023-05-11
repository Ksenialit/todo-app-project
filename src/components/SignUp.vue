<template>
    <div id="create-account">
        <h1>Create an account</h1>
        <form @submit="handleSignUp">
            <div>
                <div class="mb-3">  
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" type="email" placeholder="Enter your email" name="email" v-model="email" required>
                </div>

                <div class="mb-3">  
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" placeholder="Enter your password" name="password" minlength="6" v-model="password" required>
                </div>

                <div class="mb-3">  
                    <label class="form-label" for="repeat-password">Repeat password</label>
                    <input class="form-control" type="password" placeholder="Repeat your password" name="repeat-password" minlength="6" v-model="repeatPassword" required>

                </div>

                <div class="mb-3 form-check">  
                    <input class="form-check-input me-2" type="checkbox" checked="checked" name="remember">
                    <label class="form-check-label mb-2">Remember me</label>
                </div>

                <div class="mb-3">
                    <p class="form-text">By creating an account, you agree to the Terms of Service and Privacy Policy.</p>
                </div>

                <div class="mb-3 button-div">  
                    <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>

            </div>
 
        </form>
    </div>

    <div id="email-confirmation">
        <p>You're just one step away from creating you account. Please confirm your email address.</p>
    </div>
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
            password: '',
            repeatPassword: ''
        }
    },
    computed: {
            ... mapState(UserStore, ['user']) 
    },
    methods: {
        ... mapActions(UserStore, ['signUp']),
        async handleSignUp(event) {
            event.preventDefault()
            if (this.validatePassword()) {
                const userData = {
                    email: this.email,
                    password: this.password,
                }
                try {
                    await this.signUp(userData)
                    document.getElementById('create-account').style.display = 'none'
                    document.getElementById('email-confirmation').style.display = 'flex'
                } catch (error) {
                    alert('User already exists')
                }
            } else {
                alert('Passwords do not match')
            }
        },
        validatePassword () {
            return this.password === this.repeatPassword
        }
    },
    }
  
  </script>
  
  <style scoped>
    #create-account {
        display: block;
    }
    #email-confirmation {
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        flex-grow: 1;
    }
    #email-confirmation p {
        font-size: 22px;
        text-align: center;
        padding: 0 15px;
        letter-spacing: 2px;
    }

    div label, div input {
        padding-top: 6px;
    }

    .form-check {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .button-div {
        display: flex;
        justify-content: center;
    }

    button {
        width: 140px;
        height: 40px;
        font-size: 18px;
        background-color: #A49E8D;
        border: none;
        letter-spacing: 2px;
    }

    button:hover {
        background-color: #220C10;
    }


    @media (max-width: 480px) {
        h1 {
            padding-top: 10px;
            font-size: 24px;
        }
    }
  </style>
  