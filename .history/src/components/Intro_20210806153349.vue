<template>
	<video autoplay loop controls>
		<source src="../assets/video/video.mp4" type="video/mp4" />
	</video>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
video {
        width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;}
</style>
