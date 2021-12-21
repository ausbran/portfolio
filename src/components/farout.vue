<template>
  <transition appear name="slide-up">
    <div class="project-container">
      <projectLanding
        v-for="project in projects"
        v-bind="project"/>

      <section id="sectionPin">
        <div class="pin-wrap">
          <h2>Text goes here.</h2>
          <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                src="https://www.youtube.com/embed/28x9EQOxhSs?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              ></iframe>
            </div>
          </vue-plyr>
          <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
        </div>
      </section>
  </div>

 
  </transition>
</template>

<script>
import projectLanding from './projectLanding'
import json from '@/json/projects.json'
import photoSwipe from '@/js/mixins/photoSwipe'
import gsapScroll from '@/js/mixins/gsapScroll'
export default {
  name: "farout",
  mixins: [photoSwipe, gsapScroll],
  components: {
    projectLanding
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'farout'),
    }
  }
};
</script>