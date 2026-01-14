<template>
  <article class="project-block block-embed">
    <div class="project-block-inner" v-if="block.url">
      <div class="project-video project-embed">
        <iframe
          :src="block.url"
          allowfullscreen
          allowtransparency
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
    <aside v-if="hasMeta">
      <h2 v-if="block.title">{{ block.title }}</h2>
      <p v-if="block.description">{{ block.description }}</p>
    </aside>
  </article>
</template>

<script>
export default {
  name: 'BlockEmbed',
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
