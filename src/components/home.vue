<template>
  <div id="landing-container">
    <!-- <navigationLinks /> -->
    <about />
  </div>
</template>

<script>
import navigationLinks from "./navigationLinks";
import about from "./about";
export default {
  name: "home",
  components: {
    navigationLinks,
    about,
  },
};
</script>

<style scoped lang="scss">
#landing-container {
  height: 100vh;
  align-items: center;
  display: flex;
}
</style>
