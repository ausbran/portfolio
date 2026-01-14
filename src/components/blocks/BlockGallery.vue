<template>
  <article class="project-block block-gallery">
    <div class="project-block-inner">
      <div class="gallery-grid">
        <div
          v-for="(image, index) in images"
          :key="image.id || `gallery-${index}`"
          class="project-image"
        >
          <Asset class="draggable" :asset="image" :sizes="gallerySizes" />
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
import Asset from '@/components/Asset.vue';

export default {
  name: 'BlockGallery',
  components: {
    Asset
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasMeta() {
      return Boolean(this.block.title || this.block.description);
    },
    gallerySizes() {
      return this.block.sizes || '(min-width: 1200px) 35vw, 90vw';
    },
    images() {
      return Array.isArray(this.block.images) ? this.block.images : [];
    }
  }
};
</script>
