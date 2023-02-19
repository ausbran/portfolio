<template>
  <div class="project-block-outer">

    <template v-if="desktopToggle">  
      <article class="project-block desktopToggle">
        <div class="project-block-inner">
          <video
            class="project-video"
            :src="require('@/assets/' + name + '/' + vid)"
            autoplay muted playsinline loop />
            <div
              class="project-image"
              @click="toggle()">
                <img
                  class="draggable"
                  :src="require('@/assets/' + name + '/' + img)"
                  alt="">
            </div>
        </div>
        <aside>
          <h2>{{title}}</h2>
          <toggleButtons @showMock="showMock" @hideMock="hideMock"/>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

    <template v-if="desktopVid">  
      <article class="project-block">
        <div class="project-block-inner">
          <video
            class="project-video"
            :src="require('@/assets/' + name + '/' + vid)"
            autoplay muted playsinline loop />
        </div>
         <aside>
          <h2>{{title}}</h2>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

    <template v-if="desktopImg">  
      <article class="project-block desktopImg">
        <div class="project-block-inner">
          <div class="project-image">
            <img
              class="draggable"
              :src="require('@/assets/' + name + '/' + img)"
              alt="">
          </div>
        </div>
        <aside>
          <h2>{{title}}</h2>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

    <template v-if="mobileImg">  
      <article class="project-block mobileImg">
        <div class="project-block-inner">
          <div class="project-image">
            <img
              class="draggable"
              :src="require('@/assets/' + name + '/' + img)"
              alt="">
          </div>
        </div>
        <aside>
          <h2>{{title}}</h2>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

    <template v-if="desktopAndMobile">  
      <article class="project-block desktopAndMobile">
        <div class="project-block-inner">
          <div class="project-image">
            <img
              v-if="img1"
              class="draggable"
              :src="require('@/assets/' + name + '/' + img1)"
              alt="">
            <video
              v-if="vid1"
              class="project-video"
              :src="require('@/assets/' + name + '/' + vid1)"
              autoplay muted playsinline loop />
          </div>
          <div class="project-image" :vid2="'fa-home'">
            <img
              v-if="img2"
              class="draggable"
              :src="require('@/assets/' + name + '/' + img2)"
              alt="">
              <video
              v-if="vid2"
              class="project-video"
              :src="require('@/assets/' + name + '/' + vid2)"
              autoplay muted playsinline loop />
          </div>
        </div>
        <aside>
          <h2>{{title}}</h2>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

  </div>
</template>

<script>
import toggleButtons from './toggleButtons'
import $ from 'jquery'
export default {
  name: "projectBlock",
  components: {
    toggleButtons
  },
  inject: ['name', 'type', 'projects', 'blocks'],
  props: {
    vid: String,
    img: String,
    title: String,
    desc: String,
    showImg: String,
    desktopToggle: Boolean,
    desktopVid: Boolean,
    desktopImg: Boolean,
    mobileVid: Boolean,
    mobileImg: Boolean,
    // props for desktopAndMobile block
    desktopAndMobile: Boolean,
    img1: String,
    img2: String,
    vid1: String,
    vid2: String
  },
  methods: {
    toggle(value) {
       this.mock = value;
    },
    showMock(value) {
      $('.project-image, .switch-type a:nth-of-type(2)').addClass('active');
      $('.switch-type a:nth-of-type(1)').removeClass('active');
    },
    hideMock(value) {
      $('.project-image, .switch-type a:nth-of-type(2)').removeClass('active');
      $('.switch-type a:nth-of-type(1)').addClass('active');
    }
  },
  mounted() {
    function matchHeight() {
      var height = $('.project-video').height();
      $('.project-block-inner').height(height)
    }
    setTimeout(() => {
      matchHeight();
    }, "200")

    var resized = true;
    var timeout = null;
    var refresh = function(){
      if(resized) {
        requestAnimationFrame(matchHeight);
      }
      clearTimeout(timeout);
      timeout = setTimeout( refresh, 100);
      resized = false;
    };
    window.addEventListener('resize', function() { resized = true; });
    refresh();
  }
}
</script>