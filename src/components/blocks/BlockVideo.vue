<template>
  <article class="project-block block-video">
    <div class="project-block-inner">
      <Asset class="project-video" :asset="block.media" />
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
  name: 'BlockVideo',
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
    }
  }
};
</script>
