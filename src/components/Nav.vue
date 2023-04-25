<template>
    <!-- logo --> 
    <h1>NavBar</h1>
    <li><RouterLink to="/sign-in">Sign In</RouterLink></li>
    <li><RouterLink to="/sign-up">Sign Up</RouterLink></li>
    <!-- Sign out --> 
</template>
  
<script>
  import { RouterLink } from 'vue-router'
  
  export default {
    name: "Nav",
    components: {
        RouterLink
    },
    data() {
      
    }
  }
  
</script>
  
<style scoped>
  
</style>
  