<template>
  <div class="about">
    <Feature size="small" :img="require('@/assets/about_us.jpg')" text="About Us" />

    <p>
      Feel free to contact us either via <a href="https://instagram.com/seekhiskingdom">Instagram DMs</a> or
      <a href="mailto:seekhiskingdom@andreyrd.com">Email</a>!
    </p>
  </div>
</template>

<script>
import Feature from '@/components/Feature.vue';

export default {
  components: { Feature },
};
</script>
