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
		width: 100%;
		text-align: center;
		font-size: 50px;
		font-weight: 700;
		color: #9b9696;
	}
	h2 {
		width: 100%;
		text-align: center;
		font-size: 50px;
		font-weight: 700;
		color: #000000;
	}
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
