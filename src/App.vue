<template>
  <Nav />
  <main class="container">
    <RouterView />
  </main>

</template>

<script>
import Nav from './components/Nav.vue'
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import UserStore from './store/user'

export default {
  name: "App",
  components: {
    Nav,
    RouterLink,
    RouterView
  },
  computed: {
    ... mapState(UserStore, ['user']),
  },
  methods: {
    ... mapActions(UserStore, ['fetchUser']),
    checkUserExists() {
      if (this.user) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.push({ path: '/sign-in' })
      }
    }
  },
  async created() {
    try {
    await this.fetchUser()
    this.checkUserExists()
    } catch (error) {
      console.error(error)
      this.checkUserExists()
    }
  },
  watch: {
    user() {
      this.checkUserExists()
    }
  }
}

</script>

<style scoped>

</style>
