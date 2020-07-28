<template>
  <div class="home">
    <router-link to="/podcast" class="feature">
      <Feature :img="require('@/assets/podcast.jpg')" text="Podcast" />
    </router-link>
    <router-link to="/blog" class="blog">
      <Feature :img="require('@/assets/blog.jpg')" text="Blog" />
    </router-link>
    <a href="https://instagram.com/seekhiskingdom">
      <Feature :img="require('@/assets/instagram.jpg')" text="Instagram" />
    </a>
    <router-link to="/about">
      <Feature :img="require('@/assets/about_us.jpg')" text="About Us" />
    </router-link>
  </div>
</template>

<script>
import Feature from '@/components/Feature.vue';

export default {
  name: 'Home',
  components: { Feature },
};
</script>

<style lang="scss" scoped>
</style>
