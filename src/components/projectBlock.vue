<template>
  <component
    :is="resolvedComponent"
    :block="block"
    :projectSlug="projectSlug"
  />
</template>

<script>
import BlockEmbed from '@/components/blocks/BlockEmbed';
import BlockGallery from '@/components/blocks/BlockGallery';
import BlockImage from '@/components/blocks/BlockImage';
import BlockQuote from '@/components/blocks/BlockQuote';
import BlockSplit from '@/components/blocks/BlockSplit';
import BlockText from '@/components/blocks/BlockText';
import BlockToggle from '@/components/blocks/BlockToggle';
import BlockUnknown from '@/components/blocks/BlockUnknown';
import BlockVideo from '@/components/blocks/BlockVideo';

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
    },
    projectSlug: {
      type: String,
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
