<template>
  <div class="feature" :class="size">
    <div class="bg" :style="{ backgroundImage: `url(${img})` }"></div>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    text: String,
    size: {
      type: String,
      default: 'large',
    },
  },
};
</script>

<style lang="scss" scoped>
.feature {
  position: relative;
  display: block;
  color: white;
  height: 240px;
  overflow: hidden;

  @media (max-width: 540px) {
    height: 200px;
  }

  @media (max-width: 400px) {
    height: 160px;
  }

  &:hover {

    &::after {
      transition-duration: 0.5s;
      background: rgba(black, 0.85);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition-property: background;
    transition-duration: 2s;
    background: rgba(black, 0.82);
  }

  &.small {
    height: 140px;

    @media (max-width: 540px) {
      height: 120px;
    }

    @media (max-width: 400px) {
      height: 100px;
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
