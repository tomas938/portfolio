<template>
	<video autoplay loop controls>
		<source src="../assets/video/video.mp4" controls="false" type="video/mp4" />
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
