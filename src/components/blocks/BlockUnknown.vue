<template>
  <article class="project-block block-unknown">
    <div class="project-block-inner">
      <p>Unknown block type.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlockUnknown',
  props: {
    block: {
      type: Object,
      required: true
    },
    projectSlug: {
      type: String,
      required: true
    }
  }
};
</script>
