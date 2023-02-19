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
  name: "bode",
  mixins: [projectProvide],
  components: {
    projectInner
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'bode'),
      name: 'bode',
      type: 'design',
      show: false,
      mock: false,
      blocks: [
        { desktopVid: true,
          title: 'Whole Site',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'bode-home.mp4',
        },
        { desktopImg: true,
          title: 'Whole Site',
          desc: 'A landing point for all film specific info, content and tour stops.',
          img: 'bode-home.jpg',
        }
      ]
    }
  }
};
</script>