<template>
  <transition appear name="slide-down">
  	<div class="video-container">
      <transition name="fade" v-if="$route.meta.design">
          <video class="landing-video design" muted playsinline autoplay src="@/assets/video/design.mp4" />
      </transition>
      <transition name="fade"  v-if="$route.meta.code">
          <video class="landing-video code" muted playsinline autoplay src="@/assets/video/code.mp4" />
      </transition>
      <transition name="fade" v-if="$route.meta.motion">
          <video class="landing-video motion" muted playsinline autoplay src="@/assets/video/motion.mp4" />
      </transition>
      <transition name="fade" v-if="$route.meta.about">
          <video class="landing-video motion" muted playsinline autoplay loop src="@/assets/video/about.mp4" />
      </transition>
      <video class="landing-video" muted playsinline autoplay loop src="@/assets/video/home.mp4" />
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
  z-index: -2;
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  .landing-video {
    z-index: -3;
    object-fit: fill;
    position: absolute;
    width: 100vw;
    height: 100vh;
    &.motion, &.code, &.design {
      z-index: -2;
    }
  }
}
</style>