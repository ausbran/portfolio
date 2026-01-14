<template>
  <article class="project-block block-embed">
    <div class="project-block-inner" v-if="block.url">
      <vue-plyr class="project-video">
        <div class="plyr__video-embed">
          <iframe
            :src="block.url"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
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
  }
};
</script>
