<template>
  <!-- component-->
  <RouterView />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    // HelloWorld,
    RouterLink,
    RouterView
  },
  data() {
    
  }
}

</script>

<style scoped>

</style>
