<template>
  <article class="project-block block-image" :class="layoutClass">
    <div class="project-block-inner drag">
      <div class="project-image">
        <img
          class="draggable"
          :src="assetUrl(block.media)"
          :alt="block.media && block.media.alt ? block.media.alt : ''"
        >
      </div>
    </div>
    <aside v-if="hasMeta">
      <h2 v-if="block.title">{{ block.title }}</h2>
      <p v-if="block.description">{{ block.description }}</p>
    </aside>
  </article>
</template>

<script>
import { resolveAssetUrl } from '@/js/utils/media';

export default {
  name: 'BlockImage',
  props: {
    block: {
      type: Object,
      required: true
    },
    projectSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    hasMeta() {
      return Boolean(this.block.title || this.block.description);
    },
    layoutClass() {
      return this.block.layout ? `layout-${this.block.layout}` : '';
    }
  },
  methods: {
    assetUrl(media) {
      return resolveAssetUrl(this.projectSlug, media);
    }
  }
};
</script>
