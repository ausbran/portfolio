<template>
  <article class="project-block block-video">
    <div class="project-block-inner">
      <video
        class="project-video"
        :src="assetUrl(block.media)"
        autoplay
        muted
        playsinline
        loop
      />
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
  name: 'BlockVideo',
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
    }
  },
  methods: {
    assetUrl(media) {
      return resolveAssetUrl(this.projectSlug, media);
    }
  }
};
</script>
