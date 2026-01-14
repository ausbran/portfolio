<template>
  <transition appear name="slide-up">
    <div
      class="projectLink"
      :class="category"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave">
      <router-link :to="`/${slug}`">
        <kinesis-container>
          <kinesis-element :strength="18" type="depth">
            <img
            :class="slug"
            :src="require('@/assets/logos/' + clientLogo)"
            :alt="clientName || ''">
          </kinesis-element>
        </kinesis-container>
        <hr :class="{ active: hover }">
        <div class="text-wrapper" :class="{ active: hover }">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </router-link>
      <div class="video-container">
        <div class="video-underlay" />
        <video
          ref="previewVideo"
          :class="{ active: hover }"
          :src="require('@/assets/' + slug + '/' + slug + '.mp4')"
          muted playsinline loop />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'projectLink',
  props: {
    description: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    clientLogo: {
      type: String,
      required: true
    },
    clientName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    handleEnter() {
      this.hover = true;
      const video = this.$refs.previewVideo;
      if (video) {
        const playPromise = video.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(() => {});
        }
      }
    },
    handleLeave() {
      this.hover = false;
      const video = this.$refs.previewVideo;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  }
}
</script>
