<template>
  <component
    :is="resolvedComponent"
    :block="block"
  />
</template>

<script>
import BlockEmbed from '@/components/blocks/BlockEmbed.vue';
import BlockGallery from '@/components/blocks/BlockGallery.vue';
import BlockImage from '@/components/blocks/BlockImage.vue';
import BlockQuote from '@/components/blocks/BlockQuote.vue';
import BlockSplit from '@/components/blocks/BlockSplit.vue';
import BlockText from '@/components/blocks/BlockText.vue';
import BlockToggle from '@/components/blocks/BlockToggle.vue';
import BlockUnknown from '@/components/blocks/BlockUnknown.vue';
import BlockVideo from '@/components/blocks/BlockVideo.vue';

const blockRegistry = {
  video: BlockVideo,
  image: BlockImage,
  split: BlockSplit,
  quote: BlockQuote,
  toggle: BlockToggle,
  embed: BlockEmbed,
  text: BlockText,
  gallery: BlockGallery
};

export default {
  name: 'ProjectBlock',
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  computed: {
    blockType() {
      const rawType = typeof this.block.type === 'string' ? this.block.type : '';
      return rawType.toLowerCase();
    },
    resolvedComponent() {
      return blockRegistry[this.blockType] || BlockUnknown;
    }
  }
};
</script>
