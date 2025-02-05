<template>
  <transition appear name="slide-up">
    <div
      class="projectLink"
      :class="type"
      onmouseover="this.querySelector('video').play()"
      onmouseout="this.querySelector('video').pause();">
      <router-link :to="name">
        <kinesis-container>
          <kinesis-element :strength="18" type="depth">
            <img
            :class="name"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :src="require('@/assets/logos/' + client)">
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
          :class="{ active: hover }"
          :src="require('@/assets/' + name + '/' + name + '.mp4')"
          muted playsinline loop />
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
    name: String,
    client: String
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>