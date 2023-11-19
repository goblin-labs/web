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
  <main>
    <header>
      <h1 id="logo">{{ appName }}</h1>
    </header>
    <section id="main-content">
      A marketplace for everything.
    </section>
    <footer>
      <span class="footer-text">{{ copyRight }}</span>
      <img :src="`images/logo/solana-logo.svg`" :alt="`Solana logo`" :height="10"/>
    </footer>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #fff;
  }

  header {
    width: 100%;
    padding: 0.45em 2.5em;
  }

  #main-content {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #020202;
    font-size: 1.15em;
    font-weight: 700;
    font-family: GBWide;
    letter-spacing: -0.0355em;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.45em 2.5em;
    background-color: #f4f4f4;
    border-top: 1px solid #eaeaea;
  }

  .footer-text {
    font-size: 13px;
  }
</style>