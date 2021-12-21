<template>
  <div id="app">
    <navigation />
    <custom-cursor
      :targets="['a', 'button', 'h1', 'v-photoswipe-thumbnail, .close-container']"
      :circleColor="'#fff'"
      :circleColorHover="'#ddd'"
      :dotColor="'#fff'"
      :dotColorHover="'#ddd'"
      :hoverSize="1.7"
    ></custom-cursor>
    <!-- <loading v-if="$root.loading"></loading>  commented out - not using the loader right now -->
    <vue-page-transition name="fade">
      <router-view :key="$route.fullPath"/>
    </vue-page-transition>
    <img class="fallback design" v-if="$route.meta.design" src="@/assets/design-fallback.jpg" alt="">
    <img class="fallback code" v-if="$route.meta.code" src="@/assets/code-fallback.jpg" alt="">
    <img class="fallback motion" v-if="$route.meta.motion" src="@/assets/motion-fallback.jpg" alt="">
    <videos />
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
// import loading from '@/components/loading.vue'
import customCursor from '@/components/customCursor.vue'
import videos from '@/components/videos.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  name: 'App',
  components: {
    navigation,
    videos,
    customCursor
    // loading
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

.pswp__bg, .pswp__top-bar {
  background-color: rgba(255,255,255,.75);
}

.overlay-top, .overlay-right, .overlay-bottom, .overlay-left {
  --overlay-bg: #eee;
  --transition-duration: .28s;
  z-index: 99;
}
* { cursor: none !important; }
</style>
