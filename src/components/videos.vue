<template>
  <transition appear name="slide-down">
  	<div class="video-container">
      <transition name="fade">
        <video v-if="$route.meta.motion" class="landing-video motion" muted playsinline autoplay src="@/assets/motion.mp4"></video>
      </transition>
      <video class="landing-video" muted playsinline autoplay loop src="@/assets/new-bg.mp4"></video>
    </div>
  </transition>
</template>

<script>
  export default {        
    name: 'videos',
  }
</script>

<style scoped lang="scss">
.video-container {
  z-index: -1;
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  .landing-video {
    z-index: -2;
    object-fit: fill;
    position: absolute;
    width: 100vw;
    height: 100vh;
    &.motion {
      z-index: -1;
    }
  }
  .link {
    text-shadow: 0px 1px 2px rgba($black, 0.1);
    color: $white;
    font-weight: bold;
    letter-spacing: -.01em;
  }
  .text {
    padding: 0 6vw;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 1;
    .link {
      font-size: 5.3vw;
      position: relative;
      // width: $circle;
      // height: $circle;
      // border: 1px solid rgba($white, 0.75);
      background: transparent;
      // border-radius: calc(#{$circle} / 2);
      text-shadow: 0px 1px 2px rgba($black, 0.1);
      cursor: pointer;
      outline: 0;
      &.magnet {
        text-decoration: underline;
      }
    }
  }
}
</style>