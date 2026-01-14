<template>
  <section v-if="project" class="project-demo">
    <header class="demo-header">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </header>
    <Asset class="demo-hero" :asset="project.hero" />
    <div v-if="galleryImages.length" class="demo-gallery">
      <div
        v-for="(image, index) in galleryImages"
        :key="image.id || `demo-gallery-${index}`"
        class="demo-image"
      >
        <Asset :asset="image" />
      </div>
    </div>
  </section>
  <section v-else class="project-demo">
    <p>Demo project not found.</p>
  </section>
</template>

<script>
import Asset from '@/components/Asset.vue';
import { getProjectBySlug } from '@/data/projects';

export default {
  name: 'ProjectGalleryDemo',
  components: {
    Asset
  },
  computed: {
    project() {
      return getProjectBySlug('farout');
    },
    galleryImages() {
      if (!this.project || !Array.isArray(this.project.blocks)) {
        return [];
      }
      const galleryBlock = this.project.blocks.find((block) => block.type === 'gallery');
      return galleryBlock && Array.isArray(galleryBlock.images)
        ? galleryBlock.images
        : [];
    }
  }
};
</script>

<style scoped lang="scss">
.project-demo {
  width: min(1200px, 92vw);
  margin: 140px auto 120px;
  color: #fff;
}

.demo-header {
  margin-bottom: 40px;
  h1 {
    font-size: clamp(2rem, 3vw, 3.5rem);
    text-transform: capitalize;
    margin-bottom: 12px;
  }
  p {
    max-width: 600px;
    line-height: 1.6;
  }
}

.demo-hero {
  width: 100%;
  border-radius: 18px;
  display: block;
}

.demo-gallery {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.demo-image {
  border-radius: 16px;
  overflow: hidden;
}

.demo-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}
</style>
