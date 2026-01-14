<template>
  <img
    v-if="isImage"
    ref="media"
    class="asset asset-image"
    :src="imageSrc"
    :srcset="imageSrcSet || null"
    :sizes="imageSizes || null"
    :alt="assetAlt"
    :loading="imageLoading"
    decoding="async"
    :width="assetWidth"
    :height="assetHeight"
    :style="mediaStyle"
  >
  <video
    v-else-if="isVideo"
    ref="media"
    class="asset asset-video"
    :muted="videoMuted"
    :loop="videoLoop"
    :playsinline="videoPlaysInline"
    :autoplay="videoAutoplay"
    :controls="videoControls"
    :preload="videoPreload"
    :poster="videoPoster"
    :width="assetWidth"
    :height="assetHeight"
    :style="mediaStyle"
    @loadedmetadata="handleMetadata"
  >
    <source v-if="hasSource" :src="videoSrc" :type="videoMime">
  </video>
  <div v-else class="asset asset-unknown" />
</template>

<script>
import {
  buildSrcSet,
  DEFAULT_SRCSET_WIDTHS,
  imageUrl,
  isVectorAsset,
  mediaUrl
} from '@/js/utils/media';

const DEFAULT_IMAGE_WIDTH = 1200;

export default {
  name: 'Asset',
  props: {
    asset: {
      type: Object,
      required: true
    },
    sizes: {
      type: String,
      default: ''
    },
    srcsetWidths: {
      type: Array,
      default: null
    },
    lazy: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: null
    },
    rootMargin: {
      type: String,
      default: '200px 0px'
    },
    threshold: {
      type: [Number, Array],
      default: 0.25
    }
  },
  data() {
    return {
      hasSource: false,
      isVisible: false,
      hasLoadedSource: false,
      observer: null
    };
  },
  computed: {
    isImage() {
      return this.asset && this.asset.type === 'image';
    },
    isVideo() {
      return this.asset && this.asset.type === 'video';
    },
    isControlled() {
      return this.active !== null && this.active !== undefined;
    },
    assetAlt() {
      return this.asset.alt || '';
    },
    assetWidth() {
      return this.asset.width || null;
    },
    assetHeight() {
      return this.asset.height || null;
    },
    assetAspect() {
      if (this.asset.width && this.asset.height) {
        return this.asset.width / this.asset.height;
      }
      if (typeof this.asset.aspect === 'string') {
        return this.asset.aspect;
      }
      if (Number.isFinite(this.asset.aspect)) {
        return this.asset.aspect;
      }
      return null;
    },
    mediaStyle() {
      if (!this.assetAspect) {
        return null;
      }
      return {
        aspectRatio: this.assetAspect
      };
    },
    imageLoading() {
      return this.lazy ? 'lazy' : 'eager';
    },
    imageSizes() {
      const baseSrc = this.asset.src || '';
      if (this.asset.responsive === false || isVectorAsset(baseSrc)) {
        return '';
      }
      return this.sizes || this.asset.sizes || '100vw';
    },
    imageSrcSet() {
      if (!this.isImage || this.asset.responsive === false) {
        return '';
      }
      const baseSrc = this.asset.src || '';
      if (isVectorAsset(baseSrc)) {
        return '';
      }
      const widths = this.srcsetWidths || this.asset.srcsetWidths || DEFAULT_SRCSET_WIDTHS;
      const maxWidth = this.asset.width || null;
      const filtered = maxWidth
        ? widths.filter((width) => width <= maxWidth)
        : widths;
      return buildSrcSet(this.asset, filtered, {
        fit: this.asset.fit,
        quality: this.asset.quality,
        format: this.asset.format
      });
    },
    imageSrc() {
      if (!this.isImage) {
        return '';
      }
      const baseSrc = this.asset.src || '';
      if (this.asset.responsive === false || isVectorAsset(baseSrc)) {
        return mediaUrl(this.asset);
      }
      const width = this.asset.width || DEFAULT_IMAGE_WIDTH;
      return imageUrl(this.asset, {
        width,
        fit: this.asset.fit,
        quality: this.asset.quality,
        format: this.asset.format
      });
    },
    videoSrc() {
      return mediaUrl(this.asset);
    },
    videoMime() {
      const src = this.asset.src || '';
      const ext = src.split('.').pop().toLowerCase();
      if (ext === 'webm') {
        return 'video/webm';
      }
      if (ext === 'mp4') {
        return 'video/mp4';
      }
      return '';
    },
    videoMuted() {
      if (typeof this.asset.muted === 'boolean') {
        return this.asset.muted;
      }
      return true;
    },
    videoLoop() {
      if (typeof this.asset.loop === 'boolean') {
        return this.asset.loop;
      }
      return true;
    },
    videoPlaysInline() {
      if (typeof this.asset.playsinline === 'boolean') {
        return this.asset.playsinline;
      }
      return true;
    },
    videoAutoplay() {
      if (this.isControlled) {
        return false;
      }
      if (typeof this.asset.autoplay === 'boolean') {
        return this.asset.autoplay;
      }
      return true;
    },
    videoControls() {
      return Boolean(this.asset.controls);
    },
    videoPreload() {
      return this.asset.preload || 'none';
    },
    videoPoster() {
      if (!this.asset.poster) {
        return null;
      }
      return mediaUrl(this.asset.poster);
    },
    shouldPlay() {
      if (!this.isVideo) {
        return false;
      }
      const isActive = this.isControlled ? this.active : this.isVisible;
      return Boolean(isActive) && (this.isControlled ? true : this.videoAutoplay);
    }
  },
  watch: {
    isVisible() {
      this.updatePlayback();
    },
    active() {
      this.updatePlayback();
    }
  },
  mounted() {
    if (this.isVideo) {
      this.initObserver();
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    initObserver() {
      if (!('IntersectionObserver' in window)) {
        this.isVisible = true;
        this.hasSource = true;
        this.updatePlayback();
        return;
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (this.isVisible && !this.hasSource) {
              this.hasSource = true;
            }
          });
        },
        {
          rootMargin: this.rootMargin,
          threshold: this.threshold
        }
      );
      this.observer.observe(this.$el);
    },
    handleMetadata() {
      if (!this.shouldPlay) {
        this.seekToStart();
      }
    },
    seekToStart() {
      const video = this.$refs.media;
      if (!video) {
        return;
      }
      try {
        video.currentTime = 0;
      } catch (error) {
        // Ignored to avoid browser-specific seeking errors.
      }
    },
    playVideo() {
      const video = this.$refs.media;
      if (!video) {
        return;
      }
      const playPromise = video.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {});
      }
    },
    pauseVideo() {
      const video = this.$refs.media;
      if (!video) {
        return;
      }
      video.pause();
      this.seekToStart();
    },
    syncPlayback() {
      if (this.shouldPlay) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    },
    updatePlayback() {
      if (!this.isVideo) {
        return;
      }
      const video = this.$refs.media;
      if (!video) {
        return;
      }
      if (this.isVisible && !this.hasSource) {
        this.hasSource = true;
        this.$nextTick(() => {
          const media = this.$refs.media;
          if (!media || this.hasLoadedSource === true) {
            return;
          }
          media.load();
          this.hasLoadedSource = true;
          this.syncPlayback();
        });
        return;
      }
      if (this.hasSource && !this.hasLoadedSource) {
        this.$nextTick(() => {
          const media = this.$refs.media;
          if (!media || this.hasLoadedSource === true) {
            return;
          }
          media.load();
          this.hasLoadedSource = true;
          this.syncPlayback();
        });
        return;
      }
      this.syncPlayback();
    }
  }
};
</script>
