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