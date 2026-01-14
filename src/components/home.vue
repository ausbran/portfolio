<template>
  <div id="landing-container">
    <navigationLinks />
  </div>
</template>

<script>
import navigationLinks from "./navigationLinks";
export default {
  name: "home",
  components: {
    navigationLinks,
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
