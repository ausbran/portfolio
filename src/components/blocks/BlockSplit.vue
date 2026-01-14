<template>
  <article class="project-block block-split">
    <div class="project-block-inner" :class="{ drag: hasDraggable }">
      <template v-if="block.primary">
        <video
          v-if="isVideo(block.primary)"
          class="project-video"
          :src="assetUrl(block.primary)"
          autoplay
          muted
          playsinline
          loop
        />
        <div v-else-if="isImage(block.primary)" class="project-image">
          <img
            class="draggable"
            :src="assetUrl(block.primary)"
            :alt="block.primary.alt || ''"
          >
        </div>
        <vue-plyr v-else-if="isEmbed(block.primary)" class="project-video">
          <div class="plyr__video-embed">
            <iframe
              :src="block.primary.url || block.primary.src"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
      </template>
      <template v-if="block.secondary">
        <video
          v-if="isVideo(block.secondary)"
          class="project-video"
          :src="assetUrl(block.secondary)"
          autoplay
          muted
          playsinline
          loop
        />
        <div v-else-if="isImage(block.secondary)" class="project-image">
          <img
            class="draggable"
            :src="assetUrl(block.secondary)"
            :alt="block.secondary.alt || ''"
          >
        </div>
        <vue-plyr v-else-if="isEmbed(block.secondary)" class="project-video">
          <div class="plyr__video-embed">
            <iframe
              :src="block.secondary.url || block.secondary.src"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
      </template>
    </div>
    <aside v-if="hasMeta">
      <h2 v-if="block.title">{{ block.title }}</h2>
      <p v-if="block.description">{{ block.description }}</p>
    </aside>
  </article>
</template>

<script>
import { resolveAssetUrl, isMediaType } from '@/js/utils/media';

export default {
  name: 'BlockSplit',
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
    hasDraggable() {
      return this.isImage(this.block.primary) || this.isImage(this.block.secondary);
    }
  },
  methods: {
    assetUrl(media) {
      return resolveAssetUrl(this.projectSlug, media);
    },
    isVideo(media) {
      return isMediaType(media, 'video');
    },
    isImage(media) {
      return isMediaType(media, 'image');
    },
    isEmbed(media) {
      return isMediaType(media, 'embed');
    }
  }
};
</script>
