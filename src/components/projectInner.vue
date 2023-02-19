<template>
  <transition appear name="slide-up">
    <div class="project-container" :class="type">
      <projectLanding
        v-for="project in projects"
        v-bind="project"/>

      <section id="pin">
        <div class="pin-container">
          <projectBlock
            v-for="block in blocks"
            :desc="block.desc"
            :title="block.title"
            :vid="block.vid"
            :img="block.img"
            :desktopToggle="block.desktopToggle"
            :desktopVid="block.desktopVid"
            :desktopImg="block.desktopImg"
            :mobileImg="block.mobileImg"
            :mobileVid="block.mobileVid"
            :desktopAndMobile="block.desktopAndMobile"
            :img1="block.img1"
            :img2="block.img2"
            :vid1="block.vid1"
            :vid2="block.vid2"/>
        </div>
      </section>

    </div>
  </transition>
</template>

<script>
import projectBlock from './projectBlock'
import projectLanding from './projectLanding'
import photoSwipe from '@/js/mixins/photoSwipe'
import gsapScroll from '@/js/mixins/gsapScroll'
import draggable from '@/js/mixins/draggable'
import $ from 'jquery'
export default {
  name: "projectInner",
  inject: ['name', 'type', 'projects', 'blocks'],
  mixins: [photoSwipe, gsapScroll, draggable],
  components: {
    projectLanding,
    projectBlock
  }
};
</script>