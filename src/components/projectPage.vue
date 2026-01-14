<template>
  <transition appear name="slide-up">
    <div v-if="project" class="project-container" :class="project.category">
      <project-landing
        :slug="project.slug"
        :title="project.title"
        :description="project.description"
        :roles="project.roles"
        :tasks="project.tasks"
        :date="project.date"
        :clientLogo="project.clientLogo"
        :clientName="project.clientName"
        :awards="project.awards"
        :overview="project.overview"
        :hero="project.hero"
      />

      <section v-if="project.blocks && project.blocks.length" id="pin">
        <div class="pin-container">
          <project-block
            v-for="(block, index) in project.blocks"
            :key="block.id || `${project.slug}-${index}`"
            :block="block"
          />
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import ProjectBlock from './projectBlock.vue';
import ProjectLanding from './projectLanding.vue';
import gsapScroll from '@/js/mixins/gsapScroll';
import draggable from '@/js/mixins/draggable';
import { getProjectBySlug } from '@/data/projects';

export default {
  name: 'ProjectPage',
  mixins: [gsapScroll, draggable],
  components: {
    ProjectLanding,
    ProjectBlock
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    project() {
      return getProjectBySlug(this.slug);
    }
  }
};
</script>
