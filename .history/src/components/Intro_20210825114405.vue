<template>
	<section class="intro">
		<h1>Hi🖐,my name is <span>Tomáš</span></h1>
		<h3>a self-taught front-end developer</h3>
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
	color: #001220;

	h1,
	h3 {
		font-weight: $light;
	}
	span {
		font-weight: $semi-bold;
	}
}
</style>
