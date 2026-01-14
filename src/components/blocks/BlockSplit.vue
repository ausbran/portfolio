<template>
  <article class="project-block block-split">
    <div class="project-block-inner" :class="{ drag: hasDraggable }">
      <template v-if="block.primary">
        <Asset
          v-if="isVideo(block.primary)"
          class="project-video"
          :asset="block.primary"
        />
        <div v-else-if="isImage(block.primary)" class="project-image">
          <Asset class="draggable" :asset="block.primary" />
        </div>
        <div v-else-if="isEmbed(block.primary)" class="project-video project-embed">
          <iframe
            :src="block.primary.url || block.primary.src"
            allowfullscreen
            allowtransparency
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </template>
      <template v-if="block.secondary">
        <Asset
          v-if="isVideo(block.secondary)"
          class="project-video"
          :asset="block.secondary"
        />
        <div v-else-if="isImage(block.secondary)" class="project-image">
          <Asset class="draggable" :asset="block.secondary" />
        </div>
        <div v-else-if="isEmbed(block.secondary)" class="project-video project-embed">
          <iframe
            :src="block.secondary.url || block.secondary.src"
            allowfullscreen
            allowtransparency
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </template>
    </div>
    <aside v-if="hasMeta">
      <h2 v-if="block.title">{{ block.title }}</h2>
      <p v-if="block.description">{{ block.description }}</p>
    </aside>
  </article>
</template>

<script>
import Asset from '@/components/Asset.vue';
import { isMediaType } from '@/js/utils/media';

export default {
  name: 'BlockSplit',
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
    hasDraggable() {
      return this.isImage(this.block.primary) || this.isImage(this.block.secondary);
    }
  },
  methods: {
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
