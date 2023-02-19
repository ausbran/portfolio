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
  name: "united",
  mixins: [projectProvide],
  components: {
    projectInner
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'united'),
      name: 'united',
      type: 'design',
      show: false,
      mock: false,
      blocks: [
        { desktopToggle: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'united.mp4',
          img: 'united.jpg'
        }
      ]
    }
  }
};
</script>