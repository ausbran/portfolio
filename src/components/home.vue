<template>
  <div id="landing-container">
    <div class="text">
      <transition appear name="slide-up">
        <router-link to="/design">
          <h1 class="link">design</h1>
        </router-link>
      </transition>

      <transition appear name="slide-up">
        <router-link to="/code">
          <h1 class="link">code</h1>
        </router-link>
      </transition>

      <transition appear name="slide-up">
        <router-link to="/motion">
          <h1 class="link">motion</h1>
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style scoped lang="scss">
#landing-container {
  height: 100vh;
  align-items: center;
  display: flex;
  .link {
    text-shadow: 0px 1px 2px rgba($black, 0.1);
    color: $white;
    font-weight: bold;
    letter-spacing: -.01em;
  }
  .text {
    padding: 0 6vw;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 1;
    .link {
      font-size: 5.3vw;
      position: relative;
      // width: $circle;
      // height: $circle;
      // border: 1px solid rgba($white, 0.75);
      background: transparent;
      // border-radius: calc(#{$circle} / 2);
      text-shadow: 0px 1px 2px rgba($black, 0.1);
      cursor: pointer;
      outline: 0;
      &.magnet {
        text-decoration: underline;
      }
    }
  }
}
</style>