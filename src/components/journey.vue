<template>
  <transition appear name="slide-up">
    <projectInner
      :projects="projects"
      :blocks="blocks"
      :type="type"
      :name="name"/>
  </transition>
</template>

<script>
import projectInner from './projectInner'
import projectProvide from '@/js/mixins/projectProvide'
import json from '@/json/projects.json'
export default {
  name: "tgrsite",
  mixins: [projectProvide],
  components: {
    projectInner
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'journey'),
      name: 'journey',
      type: 'motion',
      show: false,
      mock: false,
      blocks: [
        { desktopVid: true,
          title: 'Episode 1',
          desc: 'The first content piece in the series',
          vid: 'tgrsite-tv-desktop.mp4'
        },
        { desktopImg: true,
          title: 'Ad Units',
          desc: 'Set of ads for the TGR website to promote the series launch.',
          img: 'journey-ads.jpg'
        }
      ]
    }
  }
};
</script>