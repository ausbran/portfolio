<template>
  <transition appear name="slide-up">
  <div ref="scrollSections">
      <section data-scroll-section class="project-container">
        <div class="project-landing">
          <h1>Far Out</h1>
          <h2>Teton Gravity Research’s 33rd Annual Ski & Snowboard film</h2>
          <div class="client-date">
            <span class="client">Client<img src="@/assets/farout/tgr-logo.svg" alt=""></span>
            <span class="date">Date<span>Winter 2018</span></span>
          </div>
          <hr>
          <span>powder film of the year 2018</span>
          <div class="project-details">
            <ul class="tasks">
              <li>Tasks</li>
              <li>movie poster</li>
              <li>film branding system</li>
              <li>motion graphics</li>
              <li>web design</li>
              <li>digital series development</li>
              <li>print and digital ads</li>
            </ul>
            <ul class="roles">
              <li>Roles</li>
              <li>print</li>
              <li>ui</li>
              <li>ux</li>
              <li>front end dev</li>
              <li>animator</li>
            </ul>
            <p class="description">
              <span>Description</span>
              Create a visual interpretation of the film, Far Out. Each film process starts with a movie poster. From that, the project takes life and evolves into an all encompassing campaign - print & digital. From magazine ads to motion graphics, we intended to capture the essence of Far Out.
            </p>
          </div>
        </div>
        <div class="project-body">
          <div class="block project-image">
              <img v-preview:scope-a src="@/assets/farout/far-out-poster.jpg" alt="">
            <p>14x24 poster. Went slim on width to strengthen compositional constraints. Some text here to talk about the poster a bit.</p>
          </div>
          <div class="block project-video">
              <video src="@/assets/farout/far-out-trailer.mp4" autoplay muted playsinline loop></video>
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
export default {
  name: "farout",
  mixins: [locoScroll, photoSwipe],
};
</script>

<style scoped lang="scss">
template{}
</style>

