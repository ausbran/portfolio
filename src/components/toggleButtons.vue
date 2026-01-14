<template>
  <div class="switch-type">
    <a :class="{ active: !modelValue }" @click="$emit('update:modelValue', false)">Proto</a>
    <a :class="{ active: modelValue }" @click="$emit('update:modelValue', true)">Mock</a>
  </div>
</template>

<script>
export default {
  name: "toggleButtons",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
}
</script>
