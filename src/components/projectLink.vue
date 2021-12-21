<template>
  <transition appear name="slide-up">
    <div class="projectLink" :class="type">
      <router-link :to="name">
        <kinesis-container>
          <kinesis-element :strength="15" type="depth">
            <div class="text-wrapper"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              >
              <p>{{ description }}</p>
              <h1>{{ title }}</h1>
            </div>
          </kinesis-element>
        </kinesis-container>
      </router-link>
      <div class="video-container">
        <div class="video-underlay"></div>
        <video :class="{ active: hover }" uk-video="autoplay: inview" :src="require('@/assets/' + name + '/' + video)" muted playsinline loop></video>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'projectLink',
  props: {
    description: String,
    title: String,
    type: String,
    video: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .projectLink {
    @include flexCenter;
    width: calc(100vw - 250px);
    height: calc(100vh - 250px);
    margin: 125px auto;
    position: relative;
    overflow: hidden;
    &:last-of-type{
      .video-overlay {
        display: none !important;
      }
    }
    a {
      z-index: 1;
    }
    .video-container {
      @include flexCenter;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    video {
      opacity: .3;
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
      z-index: 0;
      mix-blend-mode: luminosity;
      transition: .3s ease;
      &.active {
        opacity: .9;
        mix-blend-mode: normal;
      }
    }
    .video-underlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    a:hover {
      color: #fff;
      text-decoration: none;
      h1 {
        text-decoration: underline;
      }
    }
    .text-wrapper {
      font-size: 16px;
      * {
        color: #fff;
      }
      p {
        font-size: .86em;
        font-weight: bold;
      }
      h1 {
        letter-spacing: -.025em;
        font-size: 8.5em;
        font-weight: 600;
        line-height: .8em;
        margin: 20px 0 15px -6px;
      }
      .role {
        font-size: 0.55em;
        min-width: 225px;
        display: inline-block;
        margin-right: 30px;
        border-bottom: 1px solid #fff;
      }
    }
  }
</style>