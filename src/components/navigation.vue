<template>
	<nav>
	  <ul>
	    <li><router-link to="/work">work</router-link></li>
	    <li><router-link to="/about">about</router-link></li>
	  </ul>
	</nav>
</template>

<style scoped lang="scss">
nav {
  visibility: hidden;
  opacity: 0;
  z-index: 999;
  position: fixed;
  top: 30px;
  left: 30px;
  font-size: .8em;
  font-weight: 600;
  transition: .7s ease;
  * {
    cursor: pointer !important;
  }
  &.visible {
    visibility: visible;
    opacity: 1;
  }
  ul {
    list-style: none;
    li {
      cursor: pointer;
      display: inline-block;
      transition: .28s ease;
      @include translate(0,-15px,0);
      &:first-of-type {
        margin-right: 30px;
      }
      &.visible {
        @include translate(0,0,0);
      }
      &.white {
        color: #fff;
      }
      // &:hover {
      //   @include translate(0,-2px,0);
      // }
    }
  }
}
</style>