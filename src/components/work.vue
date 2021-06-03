<template>
    <div>
      <projectLink
        v-for="project in projects"
        v-bind="project"
      />
    </div>
</template>

<script>
import projectLink from './projectLink';
import json from '@/json/projectLink.json';
import $ from 'jquery'
export default {
  name: 'work',
  props: {
      name: String,
  },
  beforeCreate() {
    var path = location.pathname.slice(1);
    this.$nextTick(function () {
      if (path === 'design') {
        $('.motion, .code').remove();
      }
      if (path === 'code') {
        $('.motion, .design').remove();
      }
      if (path === 'motion') {
        $('.design, .code').remove();
      }
    });
  },
  data() {
      return {
        projects: Object.values(json),
      };
  },
  components: {
      projectLink,
  },
};
</script>