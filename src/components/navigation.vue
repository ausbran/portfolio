<template>
  <div>
    <transition appear name="slide-down">
      <nav v-if="$route.meta.home">
        <router-link class="menu" to="/"> austin branham </router-link>
      </nav>
    </transition>

    <transition appear name="slide-down" mode="out-in">
      <nav v-if="$route.meta.notHome">
        <transition appear name="slide-down">
          <a
            class="menu"
            v-on:click="toggleNav = !toggleNav"
            :class="{ hide }"
            @click="hide = !hide"
          >
            menu
          </a>
        </transition>
        <transition appear name="menu">
          <ul
            class="menu-expanded links"
            @click="hide = !hide"
            v-on:click="toggleNav = !toggleNav"
            v-if="!toggleNav"
          >
            <transition name="slide-down-close">
              <li
                class="menu close"
                v-show="!toggleNav"
                v-on:click="!toggleNav"
              >
                close
              </li>
            </transition>
            <transition name="slide-up-close">
              <router-link
                to="/about"
                class="menu about"
                v-show="!toggleNav"
                v-on:click="toggleNav = !toggleNav"
              >
                about austin branham
              </router-link>
            </transition>
            <navigationLinks />
            <transition appear name="video">
              <video
                muted
                playsinline
                autoplay
                loop
                src="@/assets/video/home.mp4"
              />
            </transition>
          </ul>
        </transition>
      </nav>
    </transition>
  </div>
</template>

<script>
import navigationLinks from "./navigationLinks";
export default {
  name: "navigation",
  data() {
    return {
      toggleNav: true,
      hide: false,
    };
  },
  components: {
    navigationLinks,
  },
};
</script>
