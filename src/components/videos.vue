<template>
	<div class="video-container">
    <transition appear name="fade" v-if="$route.meta.design">
        <Asset class="landing-video design" :asset="siteVideos.design" />
    </transition>
    <transition appear name="fade"  v-if="$route.meta.code">
        <Asset class="landing-video code" :asset="siteVideos.code" />
    </transition>
    <transition appear name="fade" v-if="$route.meta.motion">
        <Asset class="landing-video motion" :asset="siteVideos.motion" />
    </transition>
    <transition appear name="fade" v-if="$route.meta.about">
        <Asset class="landing-video about" :asset="siteVideos.about" />
    </transition>
    <Asset class="landing-video" :asset="siteVideos.home" />
  </div>
</template>

<script>
  import Asset from '@/components/Asset.vue';
  import { siteVideos } from '@/data/siteMedia';

  export default {        
    name: 'videos',
    components: {
      Asset
    },
    data() {
      return {
        siteVideos
      };
    }
  }
</script>
