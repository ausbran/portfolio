<template>
  <article class="project-block block-toggle" :class="{ 'is-mock': showMock }">
    <div class="project-block-inner" :class="{ drag: hasImage }">
      <video
        v-if="block.media && block.media.video"
        class="project-video"
        :src="assetUrl(block.media.video)"
        autoplay
        muted
        playsinline
        loop
      />
      <div v-if="block.media && block.media.image" class="project-image">
        <img
          class="draggable"
          :src="assetUrl(block.media.image)"
          :alt="block.media.image.alt || ''"
        >
      </div>
    </div>
    <aside v-if="hasMeta">
      <h2 v-if="block.title">{{ block.title }}</h2>
      <toggleButtons v-if="hasToggle" v-model="showMock" />
      <p v-if="block.description">{{ block.description }}</p>
    </aside>
  </article>
</template>

<script>
import toggleButtons from '@/components/toggleButtons';
import { resolveAssetUrl } from '@/js/utils/media';

export default {
  name: 'BlockToggle',
  components: {
    toggleButtons
  },
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
  data() {
    return {
      showMock: false
    };
  },
  computed: {
    hasMeta() {
      return Boolean(this.block.title || this.block.description);
    },
    hasToggle() {
      return Boolean(
        this.block.media &&
          this.block.media.video &&
          this.block.media.image
      );
    },
    hasImage() {
      return Boolean(this.block.media && this.block.media.image);
    }
  },
  methods: {
    assetUrl(media) {
      return resolveAssetUrl(this.projectSlug, media);
    }
  }
};
</script>
