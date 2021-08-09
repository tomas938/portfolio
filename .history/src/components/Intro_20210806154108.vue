<template>
	<section class="intro">
		<video loop muted>
			<source src="../assets/video/video.mp4" type="video/mp4" />
		</video>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
	height: 100vh;
	width: 100%;
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
