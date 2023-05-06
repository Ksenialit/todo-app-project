<template>
  <nav class="nav navbar">
    <div>
      <a class="navbar-brand font-monospace" href="#">To do app</a>
    </div>
    <div>
      <ul class="nav-items navbar-nav">
        <li><RouterLink to="/sign-in">Sign In</RouterLink></li>
        <li><RouterLink to="/sign-up">Sign Up</RouterLink></li>
        <li><button @click="signOut">Log out</button></li>
      </ul> 
    </div>
  </nav>
</template>
  
<script>
  import { RouterLink } from 'vue-router'
  import { mapActions, mapState } from 'pinia'
  import UserStore from '../store/user'
  
  export default {
    name: "Nav",
    components: {
        RouterLink
    },
    computed: {
      ... mapState(UserStore, ['user']),
    },
    methods: {
      ... mapActions(UserStore, ['signOut']),
    }
  }
  
</script>
  
<style scoped>
  .nav {
    background-color: white;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    height: 60px;
  }
  .nav-items {
    display: flex;
    flex-direction: row;
  }
  .nav-items a {
    text-decoration: none;
    color: #220C10;
  }
</style>
  