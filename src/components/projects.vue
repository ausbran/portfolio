<template>
  <div class="projectLinks">
    <projectLink
      v-for="project in projects"
      v-bind="project"
    />
  </div>
</template>

<script>
import projectLink from './projectLink';
import json from '@/json/projects.json';
import $ from 'jquery'
export default {
  name: 'projects',
  components: {
    projectLink,
  },
  props: {
      name: String,
  },
  beforeCreate() {
    var path = location.pathname.slice(1);
    this.$nextTick(function () {
      if (path === 'design')
        $('.motion, .code').remove();
    
      if (path === 'code') 
        $('.motion, .design').remove();
      
      if (path === 'motion') 
        $('.code, .design').remove();
    });
  },
  beforeRouteEnter (to, from, next) {
    if(from.matched.some(route => route.meta.fromHome)){
      next(vm => {
        console.log('hide fallback')
        $('.fallback').hide();
      })
    } else {
      next(vm => {
        console.log('show fallback')
        $('.fallback').show();
      })
    }
  },
  data() {
    return {
      projects: Object.values(json),
    };
  }
};
</script>


<!-- need to figure this out somehow to fix scrolling when going back / state change -->
<style scoped>
  .has-scroll-smooth body, html.has-scroll-smooth {
    overflow: scroll !important;
  }
</style>
