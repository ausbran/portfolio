<template>
  <transition appear name="slide-up">
<!--   <div ref="scrollSections"> commenting out scroll effect until alternative found--> 
      <section data-scroll-section class="project-container design">
        <projectLanding
        v-for="project in projects"
        v-bind="project"/>
        <div class="project-body">
          <div class="block project-image">
            <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
            <p>14x24 movie poster. Unconventional slim width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
          <div class="block project-video">
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
            <p>14x24 movie poster. Unconventional slim width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
          <div class="block project-image">
              <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
            <p>14x24 poster. Went slim on width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
        </div>
      </section>
<!--   </div> -->
  </transition>
</template>

<script>
// import locoScroll from '@/js/mixins/locoScroll'
import photoSwipe from '@/js/mixins/photoSwipe'
import projectLanding from './projectLanding'
import json from '@/json/projects.json'
import $ from 'jquery'
export default {
  name: "breakingthrough",
  mixins: [photoSwipe],
  components: {
    projectLanding
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'breakingthrough'),
    }
  },
};
</script>

<style lang="scss">
template{}
</style>