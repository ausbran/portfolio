<template>
	<div>
	<video
		:src="require('@/assets/' + name + '/' + vid)"
		autoplay muted playsinline loop />
	</div>
</template>

<script>
export default {
  name: "projectVideo",
  inject: ['title', 'vid', 'name']
}
</script>