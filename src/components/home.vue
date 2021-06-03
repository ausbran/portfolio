<template>
  <div id="landing-container">
    <div class="text">
      <transition appear name="slide-up">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <router-link to="/design">
              <h1 class="link design">design</h1>
            </router-link>
          </kinesis-element>
        </kinesis-container>
      </transition>

      <transition appear name="slide-up">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <router-link to="/code">
              <h1 class="link code">code</h1>
            </router-link>
          </kinesis-element>
        </kinesis-container>
      </transition>

      <transition appear name="slide-up">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <router-link to="/motion">
              <h1 class="link motion">motion</h1>
            </router-link>
          </kinesis-element>
        </kinesis-container>
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
    text-shadow: $textShadow;
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
      text-shadow: $textShadow;
      outline: 0;
      &.magnet {
        text-decoration: underline;
      }
    }
  }
}
</style>