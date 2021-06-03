<template>
  <div id="app">
    <navigation />
    <custom-cursor
      :targets="['a', 'button', 'h1', 'v-photoswipe-thumbnail']"
      :circleColor="'#fff'"
      :circleColorHover="'#ddd'"
      :dotColor="'#fff'"
      :dotColorHover="'#ddd'"
      :hoverSize="1.7"
    ></custom-cursor>
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
    <videos />
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
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
