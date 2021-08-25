<template>
	<section class="intro">
		<h1>Hi🖐,my name is <span>Tomáš</span></h1>
		<h3>a self-taught front-end developer</h3>
		<svg
			id="visual"
			viewBox="0 0 900 600"
			width="900"
			height="600"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
		>
			<g transform="translate(436.1156509953193 295.9135157750883)">
				<path
					d="M170.8 -164.1C220 -121.6 257.5 -60.8 246.2 -11.3C234.9 38.2 174.7 76.4 125.5 126.4C76.4 176.4 38.2 238.2 1.4 236.8C-35.4 235.4 -70.7 170.7 -113.9 120.7C-157 70.7 -208 35.4 -218.4 -10.4C-228.8 -56.1 -198.5 -112.2 -155.4 -154.7C-112.2 -197.2 -56.1 -226.1 2.4 -228.5C60.8 -230.8 121.6 -206.6 170.8 -164.1"
					fill="#001220"
				></path>
			</g>
		</svg>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.intro {
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1,
	h3 {
		font-weight: $light;
	}
	span {
		font-weight: $semi-bold;
	}
}
</style>
