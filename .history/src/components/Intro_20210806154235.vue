<template>
	<section class="intro">
		<video loop autoplay muted>
			<source src="../assets/video/video.mp4" type="video/mp4" />
		</video>
		<h1>Hi,my name is Tomáš</h1>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
	height: 100vh;
	width: 100%;
	display: flex;
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
