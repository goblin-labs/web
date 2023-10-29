<script setup lang="ts">
import WelcomeView from '../components/welcome-view/WelcomeView.vue'
</script>

<template>
  <main class="welcome">
    <WelcomeView />
  </main>
</template>


<style scoped>
  .welcome {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
</style>