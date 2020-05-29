<template>
  <div id="app">
    <navigation />
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
    <videos />
  </div>
</template>

<script>
import VuePageTransition from 'vue-page-transition'
import navigation from '@/components/navigation.vue'
import videos from '@/components/videos.vue'
import home from '@/components/home.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  name: 'App',
  components: {
    home,
    navigation,
    videos
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

.overlay-top, .overlay-right, .overlay-bottom, .overlay-left {
  --overlay-bg: #eee;
    --transition-duration: .28s;
  z-index: 99;
}
</style>
