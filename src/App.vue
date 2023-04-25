<template>
  <Nav />
  <RouterView />

</template>

<script>
import Nav from './components/Nav.vue'
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'pinia'
import UserStore from './store/user.js'

export default {
  name: "App",
  components: {
    Nav,
    RouterLink,
    RouterView
  },
  data() {
    
  },
  methods: {
    ... mapActions(UserStore, ['fetchUser'])
  },
  async created() {
    await this.fetchUser()
  }
}

</script>

<style scoped>

</style>
