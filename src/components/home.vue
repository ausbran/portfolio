<template>
  <div id="landing-container">
    <div class="video-container">
      <video class="landing-video" muted playsinline autoplay loop>
        <source src="@/assets/landing-video.mp4">
      </video>
    </div>

    <div class="text">
      <transition appear name="slide-fade">
        <router-link to="/about">
          <button class="circle" data-dist="10">life</button>
        </router-link>
      </transition>

      <transition appear name="slide-fade">
        <img src="@/assets/text.svg" alt="">
      </transition>

      <transition appear name="slide-fade">
        <router-link to="/work">
          <button class="circle" data-dist="10">work</button>
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped lang="scss">
#landing-container {
  height: 100vh;
  align-items: center;
  display: flex;
  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 19%;
    height: 100vh;
    width: 100vw;
    min-height: 400px;
    transition: .3s ease;
  }
  .landing-video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
  }
  .text {
    padding: 0 5vw;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    img {
      width: 67%;
    }
    .circle {
      font-size: .75em;
      font-weight: 400;
      color: $gray;
      position: relative;
      width: $circle;
      height: $circle;
      border: 1px solid rgba($gray, 0.75);
      background: transparent;
      border-radius: calc(#{$circle} / 2);
      cursor: pointer;
      outline: 0;
      transition: background 0.24s cubic-bezier(0.645, 0.045, 0.355, 1.000);
      &.magnet {
      }
    }
  }
}
</style>