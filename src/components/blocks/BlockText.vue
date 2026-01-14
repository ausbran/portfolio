<template>
  <article class="project-block block-text">
    <div class="project-block-inner">
      <span v-if="block.eyebrow" class="eyebrow">{{ block.eyebrow }}</span>
      <h2 v-if="block.title">{{ block.title }}</h2>
      <p v-if="block.body">{{ block.body }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlockText',
  props: {
    block: {
      type: Object,
      required: true
    }
  }
};
</script>
