<template>
  <div
    ref="container"
    class="kinesis-container"
    :style="containerStyle"
    @pointermove="handleMove"
    @pointerleave="reset"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'KinesisContainer',
  props: {
    perspective: {
      type: Number,
      default: 700
    }
  },
  data() {
    return {
      state: {
        x: 0,
        y: 0
      }
    };
  },
  provide() {
    return {
      kinesisState: this.state
    };
  },
  computed: {
    containerStyle() {
      return {
        perspective: `${this.perspective}px`,
        transformStyle: 'preserve-3d'
      };
    }
  },
  methods: {
    handleMove(event) {
      const container = this.$refs.container;
      if (!container) {
        return;
      }
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rawX = (event.clientX - centerX) / (rect.width / 2);
      const rawY = (event.clientY - centerY) / (rect.height / 2);

      this.state.x = Math.max(-1, Math.min(1, rawX));
      this.state.y = Math.max(-1, Math.min(1, rawY));
    },
    reset() {
      this.state.x = 0;
      this.state.y = 0;
    }
  }
};
</script>
