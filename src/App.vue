<template>
  <div id="app">
    <navigation />
    <custom-cursor
      :targets="['.projectLink img', 'a', 'button', 'h1']"
      :circleColor="'#fff'"
      :circleColorHover="'#ddd'"
      :dotColor="'#fff'"
      :dotColorHover="'#ddd'"
      :hoverSize="1.7"
    ></custom-cursor>
    <vue-page-transition name="fade">
      <router-view :key="$route.fullPath"/>
    </vue-page-transition>
    <img class="fallback design" v-if="$route.meta.design" src="@/assets/assets/design-fallback.jpg" alt="">
    <img class="fallback code" v-if="$route.meta.code" src="@/assets/assets/code-fallback.jpg" alt="">
    <img class="fallback motion" v-if="$route.meta.motion" src="@/assets/assets/motion-fallback.jpg" alt="">
    <videos />
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import customCursor from '@/components/customCursor.vue'
import videos from '@/components/videos.vue'

export default {
  name: 'App',
  components: {
    navigation,
    videos,
    customCursor
  }
}
</script>
