<template>
    <div class="projectLink" v-bind:class="type">
      <router-link v-if="projectName" :to="{ name: 'work', params: { name: projectName }}">
      <div uk-parallax="opacity: 1,1; viewport: .5;" class="text-wrapper">
        <p>{{ description }}</p>
        <h1>{{ title }}</h1>
        <transition appear name="slide-fade">
          <div class="role">
            <span>{{ designRole }}</span>
            <span></span>
          </div>
        </transition>
        <transition appear name="slide-fade">
          <div class="role">
            <span>{{ codeRole }}</span>
            <span></span>
          </div>
        </transition>
        <transition appear name="slide-fade">
          <div class="role">
            <span>{{ motionRole }}</span>
            <span></span>
          </div>
        </transition>
      </div>
      </router-link>
      <video :src="video" uk-video="autoplay: inview" muted playsinline loop></video>
    </div>
</template>

<script>
  import projectDetails from '@/components/projectDetails.vue'
export default {
  name: 'projectLink',
  props: {
    description: String,
    title: String,
    type: String,
    designRole: String,
    codeRole: String,
    motionRole: String,
    video: String,
    projectName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .projectLink {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 50vh;
    &:after {
      content: '';
      mix-blend-mode: color;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
    video {
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      margin-left: 50% !important;
      @include translate(-50%,0,0);
      z-index: -1;
      filter: brightness(0.7);
      // -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), color-stop(1, black));
      opacity: .6;
    }
    a:hover {
      color: #fff;
      text-decoration: none;
      h1 {
        text-decoration: underline;
      }
    }
    .text-wrapper {
      padding: 5vw;
      font-size: 16px;
      * {
        color: #fff;
      }
      p {
        font-size: .86em;
        font-weight: bold;
      }
      h1 {
        font-size: 8.5em;
        text-transform: uppercase;
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