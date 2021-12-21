<template>
  <transition appear name="slide-up">
    <div class="project-container" :class="type">
      <projectLanding
        v-for="project in projects"
        v-bind="project"/>

        <section id="pin">
          <div class="pin-container">

            <article class="project-block" :class="{ active: show }">
              <video
                :src="require('@/assets/' + name + '/tgrsite-film-proto.mp4')"
                autoplay muted playsinline loop
                ></video>
              <div
                class="project-image"
                @click="doSomething()">
                  <img
                    class="draggable"
                    :src="require('@/assets/' + name + '/tgrsite-film-mock.jpg')"
                    alt="">
              </div>
              <p class="long">
                The film page acts a landing point for all film specific info and content. Athletes, partners, descriptions, related articles and tour dates serve users everything they need in one place.
              </p>
              <aside>
                <h2>Film Page</h2>
                <toggleButtons @showMock="showMock" @hideMock="hideMock"/>
                <p>
                  The film page acts a landing point for all film specific info and content.
                  <span class="read-more" @click="show = true">
                    Read More
                  </span>
                </p>
              </aside>
            </article>

            <article class="project-block" :class="{ active: show }">
              <video
                :src="require('@/assets/' + name + '/tgrsite-film-proto.mp4')"
                autoplay muted playsinline loop
                ></video>
              <div
                class="project-image"
                @click="doSomething()">
                  <img
                    class="draggable"
                    :src="require('@/assets/' + name + '/tgrsite-film-mock.jpg')"
                    alt="">
              </div>
              <p class="long">
                The film page acts a landing point for all film specific info and content. Athletes, partners, descriptions, related articles and tour dates serve users everything they need in one place.
              </p>
              <aside>
                <h2>Film Page</h2>
                <toggleButtons @showMock="showMock" @hideMock="hideMock"/>
                <p>
                  The film page acts a landing point for all film specific info and content.
                  <span class="read-more" @click="show = true">
                    Read More
                  </span>
                </p>
              </aside>
            </article>

            

          </div>
        </section>

    </div>
  </transition>
</template>

<script>
import toggleButtons from './toggleButtons'
import projectLanding from './projectLanding'
import photoSwipe from '@/js/mixins/photoSwipe'
import gsapScroll from '@/js/mixins/gsapScroll'
import draggable from '@/js/mixins/draggable'
import json from '@/json/projects.json'
import $ from 'jquery'
export default {
  name: "tgrsite",
  mixins: [photoSwipe, gsapScroll, draggable],
  components: {
    projectLanding,
    toggleButtons
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'tgrsite'),
      name: 'tgrsite',
      type: 'design',
      show: false
    }
  },
  methods: {
    showMock(value) {
      $('.project-image').addClass('active');
      var obj = $(this);
      obj.hide();
    },
    hideMock(value) {
      $('.project-image').removeClass('active');
    }
  }
};
</script>