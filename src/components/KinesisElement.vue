<template>
  <div class="kinesis-element" :style="transformStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'KinesisElement',
  inject: {
    kinesisState: {
      default: () => ({ x: 0, y: 0 })
    }
  },
  props: {
    strength: {
      type: Number,
      default: 10
    },
    type: {
      type: String,
      default: 'depth'
    }
  },
  computed: {
    transformStyle() {
      const state = this.kinesisState || { x: 0, y: 0 };
      const factor = this.type === 'depth' ? -1 : 1;
      const offsetX = state.x * this.strength * factor;
      const offsetY = state.y * this.strength * factor;
      const rotateStrength = Math.min(this.strength * 0.4, 12);
      const rotateX = state.y * -rotateStrength;
      const rotateY = state.x * rotateStrength;

      return {
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.2s ease-out',
        willChange: 'transform'
      };
    }
  }
};
</script>
