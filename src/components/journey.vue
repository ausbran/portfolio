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
        { desktopToggle: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'tgrsite-film-proto.mp4',
          img: 'tgrsite-film-mock.jpg'
        },
        { mobileImg: true,
          title: 'Film Page Mobile',
          desc: 'A landing point for all film specific info, content and tour stops.',
          img: 'tgrsite-film-mobile.jpg'
        },
        { desktopVid: true,
          title: 'About Page',
          desc: 'Second description text goes here and tells about project.',
          vid: 'tgrsite-post.mp4'
        },
        { desktopImg: true,
          title: 'Post Page',
          desc: 'Third description text goes here and tells about project.',
          img: 'tgrsite-film-mock.jpg'
        }
      ]
    }
  }
};
</script>