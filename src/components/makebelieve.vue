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
  name: "makebelieve",
  mixins: [projectProvide],
  components: {
    projectInner
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'makebelieve'),
      name: 'makebelieve',
      type: 'motion',
      show: false,
      mock: false,
      blocks: [
        { desktopVid: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'makebelieve.mp4',
        }
      ]
    }
  }
};
</script>