<template>
	<video loop autoplay="autoplay">
		<source src="../assets/video/video.mp4" type="video/mp4" />
		<source src="movie.ogg" type="video/ogg" />
	</video>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
