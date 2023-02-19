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
  name: "revive",
  mixins: [projectProvide],
  components: {
    projectInner
  },
  data() {
    return {
      projects: Object.values(json).filter(x => x.name == 'revive'),
      name: 'revive',
      type: 'design',
      show: false,
      mock: false,
      blocks: [
        { desktopVid: true,
          title: 'Home Page',
          desc: 'Combining the Revive branding mark, with subtle product animation and video texture.',
          vid: 'revive-home-1920px.mp4'
        }
      ]
    }
  }
};
</script>