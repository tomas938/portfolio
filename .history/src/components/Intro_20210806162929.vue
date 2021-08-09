<template>
	<section class="intro">
		<h1>Hi🖐,my name is Tomáš</h1>
		<h2>a self-taught web developer</h2>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.intro {
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 20vh;

	h1 {
		font-size: 5rem;
	}
	h2 {
		font-size: 4rem;
	}
	h1,
	h2 {
		font-weight: ;
	}
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
