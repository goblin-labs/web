<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    const appName = 'goblin'
    return {
      appName: appName,
      copyRight: `${new Date().getFullYear()} © ${appName} foundation`,
    };
  },
};
</script>

<template>
  <main class="bg-white w-full h-[100svh] flex flex-col items-center">
    <header class="w-full px-4 md:px-8 py-2 md:py-4">
      <h1 class="font-logo font-bold text-md text-lg">{{ appName }}</h1>
    </header>
    <section class="flex h-full w-full justify-center mt-[20vh] px-2">
      <div class="flex flex-col text-balance text-center">
        <h1 class="text-4xl md:text-7xl tracking-tight font-bold">The decentralized</h1>
        <h1 class="text-4xl md:text-7xl tracking-tight font-bold mt-1 md:mt-3">publishing platform.</h1>
      </div>
    </section>
    <footer class="flex flex-row justify-between items-center w-full px-4 md:px-8 py-5 bg-[#15171a]">
      <span class="font-sans text-sm text-white">{{ copyRight }}</span>
      <img class="bg-cover h-3" :src="`images/logo/solana-logo.svg`" :alt="`Solana logo`"/>
    </footer>
  </main>
</template>