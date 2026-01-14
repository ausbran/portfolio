<template>
  <transition appear name="slide-up">
    <div
      class="projectLink"
      :class="category"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave">
      <router-link :to="`/${slug}`">
        <kinesis-container>
          <kinesis-element :strength="18" type="depth">
            <Asset
              class="project-logo"
              :class="slug"
              :asset="logoAsset"
              :lazy="false"
            />
          </kinesis-element>
        </kinesis-container>
        <hr :class="{ active: hover }">
        <div class="text-wrapper" :class="{ active: hover }">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </router-link>
      <div class="video-container">
        <div class="video-underlay" />
        <Asset
          class="project-video"
          :class="{ active: hover }"
          :asset="previewAsset"
          :active="hover"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import Asset from '@/components/Asset.vue';
import KinesisContainer from '@/components/KinesisContainer.vue';
import KinesisElement from '@/components/KinesisElement.vue';

export default {
  name: 'projectLink',
  components: {
    Asset,
    KinesisContainer,
    KinesisElement
  },
  props: {
    description: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    clientLogo: {
      type: Object,
      required: true
    },
    clientName: {
      type: String,
      default: ''
    },
    preview: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    logoAsset() {
      return {
        ...this.clientLogo,
        alt: this.clientLogo.alt || this.clientName || ''
      };
    },
    previewAsset() {
      return {
        ...this.preview,
        autoplay: false
      };
    }
  },
  methods: {
    handleEnter() {
      this.hover = true;
    },
    handleLeave() {
      this.hover = false;
    }
  }
}
</script>
