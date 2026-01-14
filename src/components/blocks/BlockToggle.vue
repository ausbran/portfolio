<template>
  <article class="project-block block-toggle" :class="{ 'is-mock': showMock }">
    <div class="project-block-inner" :class="{ drag: hasImage }">
      <Asset
        v-if="block.media && block.media.video && !showMock"
        class="project-video"
        :asset="block.media.video"
      />
      <div v-if="block.media && block.media.image && showMock" class="project-image">
        <Asset class="draggable" :asset="block.media.image" />
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
import Asset from '@/components/Asset.vue';
import toggleButtons from '@/components/toggleButtons.vue';

export default {
  name: 'BlockToggle',
  components: {
    Asset,
    toggleButtons
  },
  props: {
    block: {
      type: Object,
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
  }
};
</script>
