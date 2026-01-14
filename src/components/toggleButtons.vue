<template>
  <div class="switch-type">
    <a :class="{ active: !value }" @click="$emit('input', false)">Proto</a>
    <a :class="{ active: value }" @click="$emit('input', true)">Mock</a>
  </div>
</template>

<script>
export default {
  name: "toggleButtons",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>
