<template>
  <div class="podcasts">
    <Feature size="small" :img="require('@/assets/podcast.jpg')" text="Podcast" />
    <p>
      Our podcast is now live! To listen to and view episodes online, visit our Podbean site.
    </p>
    <div class="sources">
      <a href="https://seekhiskingdom.podbean.com" target="_blank">
        <img height="48" src="//d8g345wuhgd7e.cloudfront.net/site/images/badges/b600.png">
      </a>
    </div>
    <p>
      Or choose from any of the other places you can listen!
    </p>
    <div class="sources">
      <a href="https://www.youtube.com/channel/UClgL2s_O8Ky4HkFInyPB_NA" target="_blank">
        <img height="34" src="@/assets/yt_logo_rgb_dark.png">
      </a>
      <a href="https://podcasts.apple.com/us/podcast/seek-his-kingdom/id1512314752" target="_blank">
        <img src="@/assets/apple_podcasts.svg">
      </a>
      <a href="https://pca.st/pz4pgp3v" target="_blank">
        <img src="@/assets/Badges_pocketcasts_medium_light.svg">
      </a>
      <a href="https://open.spotify.com/show/6o6stfFYKCtkD9PxsvTTgV" target="_blank">
        <img src="@/assets/spotify-podcast-badge-wht-grn-165x40.svg">
      </a>
      <a href="https://overcast.fm/itunes1512314752/seek-his-kingdom" target="_blank">
        <img src="@/assets/badge-overcast.svg">
      </a>
      <a href="https://feed.podbean.com/seekhiskingdom/feed.xml" target="_blank">
        <img height="64" src="@/assets/rss.svg">
      </a>
    </div>
  </div>
</template>

<script>
import Feature from '@/components/Feature.vue';

export default {
  components: { Feature },
};
</script>

<style lang="scss" scoped>

.img {
  position: relative;
  width: 100%;
  height: 140px;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(black, 0.82);
  }
}

.sources {
  display: flex;
  max-width: 720px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

a {
  margin: 12px;
}
</style>
