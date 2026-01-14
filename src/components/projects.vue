<template>
  <div class="projectLinks">
    <projectLink
      v-for="project in filteredProjects"
      :key="project.slug"
      :slug="project.slug"
      :category="project.category"
      :title="project.title"
      :description="project.description"
      :clientLogo="project.clientLogo"
      :clientName="project.clientName"
    />
  </div>
</template>

<script>
import projectLink from './projectLink';
import { projects } from '@/data/projects';
export default {
  name: 'projects',
  components: {
    projectLink,
  },
  data() {
    return {
      projects,
    };
  },
  computed: {
    activeCategory() {
      const categories = ['design', 'code', 'motion'];
      return categories.includes(this.$route.name) ? this.$route.name : null;
    },
    filteredProjects() {
      if (!this.activeCategory) {
        return this.projects;
      }
      return this.projects.filter((project) => project.category === this.activeCategory);
    }
  }
};
</script>


<!-- need to figure this out somehow to fix scrolling when going back / state change -->
<style scoped>
  .has-scroll-smooth body, html.has-scroll-smooth {
    overflow: scroll !important;
  }
</style>
