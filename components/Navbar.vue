<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link class="navbar-brand" to="/">Nuxt SSR</nuxt-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" exact to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" no-prefetch class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" no-prefetch class="nav-link" exact to="/users">Users</nuxt-link>
        </li>
        <li v-if="!hasToken" class="nav-item">
          <nuxt-link active-class="active" no-prefetch class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li v-else class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
