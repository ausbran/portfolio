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
      projects: Object.values(json).filter(x => x.name == 'tgrsite'),
      name: 'tgrsite',
      type: 'design',
      show: false,
      mock: false,
      blocks: [
        { desktopVid: true,
          title: 'TGRtv',
          desc: 'An immersive video content experience.',
          vid: 'tgrsite-tv-desktop.mp4'
        },
        { desktopVid: true,
          title: 'The Stash',
          desc: 'An immersive video content experience.',
          vid: 'tgrsite-stash.mp4'
        },
        { desktopVid: true,
          title: 'Tour',
          desc: 'An immersive video content experience.',
          vid: 'tgrsite-tour.mp4'
        },
        { desktopVid: true,
          title: 'All Films',
          desc: 'An immersive video content experience.',
          vid: 'tgrsite-films.mp4'
        },
        { desktopAndMobile: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid1: 'tgrsite-film-desktop.mp4',
          img2: 'tgrsite-film-mobile.jpg'
        },
        { desktopAndMobile: true,
          title: 'Category Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid1: 'tgrsite-category-desktop.mp4',
          vid2: 'tgrsite-category-mobile.mp4'
        },
        { desktopVid: true,
          title: 'About Page',
          desc: 'Second description text goes here and tells about project.',
          vid: 'tgrsite-post.mp4'
        },
        { desktopToggle: true,
          title: 'Film Page',
          desc: 'A landing point for all film specific info, content and tour stops.',
          vid: 'tgrsite-film-desktop.mp4',
          img: 'tgrsite-film-desktop.jpg'
        },
      ]
    }
  }
};
</script>