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
            :name="name" />

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
import json from '@/json/projects.json'
import $ from 'jquery'
export default {
  name: "tgrsite",
  mixins: [photoSwipe, gsapScroll, draggable],
  components: {
    projectLanding,
    projectBlock
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'tgrsite'),
      name: 'tgrsite',
      type: 'design',
      show: false,
      mock: false,
      blocks: [
        { desktopToggle: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'tgrsite-film-proto.mp4',
          img: 'tgrsite-film-mock.jpg'
        },
        { desktopVid: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'tgrsite-film-proto.mp4',
          img: 'tgrsite-film-mock.jpg'
        },
        { desktopImg: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'tgrsite-film-proto.mp4',
          img: 'tgrsite-film-mock.jpg'
        }
      ]
    }
  },
  // provide: {
  //   name: 'tgrsite',
  //   blocks: [
  //       {
  //         vid: 'tgrsite-film-proto.mp4',
  //         img: '/tgrsite-film-mock.jpg'
  //       }
  //     ]
  // },
  provide() {
    return {
      name: this.name,
      title: 'hello',
      vid: this.blocks[0].vid,
      blocks: this.blocks[0].vid
    }
  }
};
</script>