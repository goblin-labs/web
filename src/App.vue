<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header-wrapper">
    <nav class="nav-wrapper">
      <RouterLink to="/">SonicSmash</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header-wrapper {
  padding: 1rem 0;
}

/* header {} */

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

header nav {
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
}

@media (min-width: 1024px) {}
</style>
