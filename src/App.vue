<template>
  <div id="app">
    <Navbar />
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background: black;
}

#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  text-align: center;

  @media (max-width: 540px) {
    padding: 0 36px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
}

a {
  color: #fff;
}

p {
  max-width: 420px;
  margin: 64px auto 36px;
  padding: 0 16px;
  text-align: center;
}

.page-enter-active {
  transition: opacity 0.4s;
}
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
