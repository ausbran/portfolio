<template>
  <article class="project-block block-quote">
    <blockquote>{{ block.quote }}</blockquote>
  </article>
</template>

<script>
export default {
  name: 'BlockQuote',
  props: {
    block: {
      type: Object,
      required: true
    }
  }
};
</script>
