<template>
  <nav>
    <router-link class="home" to="/">
      <img width="48" height="48" src="@/assets/logo_circle.svg">
      <img width="228" height="48" class="logo-horizontal" src="@/assets/logo_horizontal.svg">
    </router-link>
    <div class="spacer"></div>
    <router-link to="/podcast">Podcast</router-link>
    <router-link to="/blog">Blog</router-link>
    <a href="https://instagram.com/seekhiskingdom" target="_blank">Instagram</a>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  height: 48px;
  margin: 0 -6px;
  padding: 12px 0;

  @media (max-width: 400px) {
    margin: 0;
    padding: 12px 8px;
  }
}

.logo-horizontal {
  padding: 8px 4px 4px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
}

.spacer {
  flex-grow: 1;
}

a {
  display: block;
  margin: 0 12px;
  color: white;
  text-decoration: none;
  line-height: 48px;
  font-size: 20px;

  @media (max-width: 540px) {
    margin: 0 8px;
    font-size: 19px;
  }

  @media (max-width: 400px) {
    margin: 0 6px;
    font-size: 18px;
  }
}

a.router-link-exact-active:not(.home) {
  border-bottom: 2px solid white;
}
</style>
