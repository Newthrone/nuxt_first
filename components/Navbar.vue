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
          <nuxt-link active-class="active" no-prefetch class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" no-prefetch class="nav-link" to="/login">Login</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
