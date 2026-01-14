<template>
  <article class="project-block block-image" :class="layoutClass">
    <div class="project-block-inner drag">
      <div class="project-image">
        <Asset class="draggable" :asset="block.media" />
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
  name: 'BlockImage',
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
    layoutClass() {
      return this.block.layout ? `layout-${this.block.layout}` : '';
    }
  }
};
</script>
