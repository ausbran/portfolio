<template>
  <article class="project-block block-gallery">
    <div class="project-block-inner">
      <div class="gallery-grid">
        <div
          v-for="(image, index) in images"
          :key="image.id || `${projectSlug}-gallery-${index}`"
          class="project-image"
        >
          <img
            class="draggable"
            :src="assetUrl(image)"
            :alt="image.alt || ''"
          >
        </div>
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
  name: 'BlockGallery',
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
    images() {
      return Array.isArray(this.block.images) ? this.block.images : [];
    }
  },
  methods: {
    assetUrl(media) {
      return resolveAssetUrl(this.projectSlug, media);
    }
  }
};
</script>
