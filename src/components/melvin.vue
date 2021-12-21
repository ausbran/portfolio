<template>
  <transition appear name="slide-up">
  <div ref="scrollSections">
      <section data-scroll-section class="project-container design">
        <projectLanding
        v-for="project in projects"
        v-bind="project"/>
        <div class="project-body">
          <div class="block project-image">
              <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
            <p>14x24 poster. Went slim on width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
          <div class="block project-video">
              <vue-plyr :options="options">
                <video
                  crossorigin
                  playsinline
                  autoplay
                  muted
                  loop
                >
                  <source
                    size="1080"
                    src="@/assets/farout/far-out-trailer.mp4"
                    type="video/mp4"
                  />
                </video>
              </vue-plyr>
            <p>14x24 poster. Went slim on width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
          <div class="block project-image">
              <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
            <p>14x24 poster. Went slim on width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
        </div>
      </section>
  </div>
  </transition>
</template>

<script>
import locoScroll from '@/js/mixins/locoScroll'
import photoSwipe from '@/js/mixins/photoSwipe'
import projectLanding from './projectLanding'
import json from '@/json/projects.json'
import $ from 'jquery'
export default {
  name: "melvin",
  mixins: [locoScroll, photoSwipe],
  components: {
    projectLanding
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'melvin'),
    }
  },
  beforeCreate() {
    this.$nextTick(function () {
      if ($(".awards").text().length == 0) {
        $('.awards').remove();
      }   
    });
  },
};
</script>

<style lang="scss">
template{}
</style>