<template>
  <div>

    <template v-if="desktopToggle">  
      <article class="project-block">
        <projectVideo
        v-for="vid in blocks" />
          <div
            class="project-image"
            @click="toggle()">
              <img
                class="draggable"
                :src="require('@/assets/' + name + '/' + img)"
                alt="">
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
        <video
          :src="require('@/assets/' + name + '/' + vid)"
          autoplay muted playsinline loop
          ></video>
         <aside>
          <h2>{{title}}</h2>
          <p>{{desc}}</p>
        </aside>
      </article>
    </template>

    <template v-if="desktopImg">  
      <article class="project-block">
          <div class="project-image">
            <img
              class="draggable"
              :src="require('@/assets/' + name + '/' + img)"
              alt="">
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
import projectVideo from './projectVideo'
import $ from 'jquery'
export default {
  name: "projectBlock",
  inject: ['blocks'],
  components: {
    toggleButtons,
    projectVideo
  },
  props: {
    blocks: Array,
    name: String,
    vid: String,
    img: String,
    title: String,
    desc: String,
    showImg: String,
    desktopToggle: Boolean,
    desktopVid: Boolean,
    desktopImg: Boolean
  },
  methods: {
    toggle(value) {
       this.mock = value;
    },
    showMock(value) {
      $(".project-image, .switch-type a:nth-of-type(2)").each(function(){
        $(this).find('.project-image').addClass('active');
      });
      $('.switch-type a:nth-of-type(1)').removeClass('active');
    },
    hideMock(value) {
      $('.project-image, .switch-type a:nth-of-type(2)').removeClass('active');
      $('.switch-type a:nth-of-type(1)').addClass('active');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
template{}
</style>