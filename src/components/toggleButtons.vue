<template>
  <div class="switch-type">
    <a @click="$emit('hideMock', false)">Proto</a>
    <a @click="$emit('showMock', true)">Mock</a>
  </div>
</template>

<script>
export default {
  name: "toggleButtons"
};
</script>