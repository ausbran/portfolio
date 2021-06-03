<template>
  <div>
  <transition appear name="slide-down">
  	<nav v-if="$route.meta.home">
  	  <ul>
        <li><router-link to="/about">austin branham</router-link></li>
  	  </ul>
  	</nav>
  </transition>

  <nav v-if="$route.meta.notHome">
    <transition appear name="slide-down">
      <span v-on:click="toggleNav = !toggleNav">menu</span>
    </transition>
    <transition appear name="menu">
    <ul class="menu" v-if="!toggleNav">
      <li><router-link to="/design">design</router-link></li>
      <li><router-link to="/code">code</router-link></li>
      <li><router-link to="/motion">motion</router-link></li>
    </ul>
  </transition>
  </nav>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        toggleNav: true
      };
    }
  }
</script>

<style scoped lang="scss">
nav {
  text-align: center;
  z-index: 999;
  position: fixed;
  top: 15px;
  font-size: 1em;
  left: 0;
  right: 0;
  margin: auto;
  &.visible {
    visibility: visible;
    opacity: 1;
  }
  .menu {
    z-index: 999;
    background: white;
    width: 100vw;
    height: 100vh;
    right: 0;
    top: 0;
    position: fixed;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  span, ul a {
      // text-shadow: 0px 1px 2px rgba($black, 0.1);
      color: $white;
      font-weight: bold;
      letter-spacing: -.01em;
      display: inline-block;
      transition: .28s $ease;
      &:hover {
        opacity: .9;
        @include scale(.98);
      }
    }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
}
</style>