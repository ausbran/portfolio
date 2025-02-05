<template>
	<div class="video-container">
    <transition appear name="fade" v-if="$route.meta.design">
        <video class="landing-video design" muted playsinline autoplay src="@/assets/video/design.mp4" />
    </transition>
    <transition appear name="fade"  v-if="$route.meta.code">
        <video class="landing-video code" muted playsinline autoplay src="@/assets/video/code.mp4" />
    </transition>
    <transition appear name="fade" v-if="$route.meta.motion">
        <video class="landing-video motion" muted playsinline autoplay src="@/assets/video/motion.mp4" />
    </transition>
    <transition appear name="fade" v-if="$route.meta.about">
        <video class="landing-video about" muted playsinline autoplay loop src="@/assets/video/about.mp4" />
    </transition>
    <video class="landing-video" muted playsinline autoplay loop src="@/assets/video/home.mp4" />
  </div>
</template>

<script>
  export default {        
    name: 'videos',
  }
</script>