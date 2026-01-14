<template>
  <div id="app">
    <navigation />
    <custom-cursor
      :targets="['.projectLink img', 'a', 'button', 'h1']"
      :circleColor="'#fff'"
      :circleColorHover="'#ddd'"
      :dotColor="'#fff'"
      :dotColorHover="'#ddd'"
      :hoverSize="1.7"
    ></custom-cursor>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
    <Asset
      v-if="$route.meta.design"
      class="fallback design"
      :asset="fallbackImages.design"
      :lazy="false"
    />
    <Asset
      v-if="$route.meta.code"
      class="fallback code"
      :asset="fallbackImages.code"
      :lazy="false"
    />
    <Asset
      v-if="$route.meta.motion"
      class="fallback motion"
      :asset="fallbackImages.motion"
      :lazy="false"
    />
    <videos />
  </div>
</template>

<script>
import Asset from "@/components/Asset.vue";
import navigation from "@/components/navigation.vue";
import customCursor from "@/components/customCursor.vue";
import videos from "@/components/videos.vue";
import { fallbackImages } from "@/data/siteMedia";

export default {
  name: "App",
  components: {
    Asset,
    navigation,
    videos,
    customCursor,
  },
  data() {
    return {
      fallbackImages,
    };
  },
};
</script>
