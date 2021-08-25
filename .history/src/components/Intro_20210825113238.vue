<template>
	<section class="intro">
		<h1>Hi🖐,my name is <span>Tomáš</span></h1>
		<h3>a self-taught front-end developer</h3>
		<svg
			class="blob-motion"
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
					id="blob1"
					d="M170.8 -164.1C220 -121.6 257.5 -60.8 246.2 -11.3C234.9 38.2 174.7 76.4 125.5 126.4C76.4 176.4 38.2 238.2 1.4 236.8C-35.4 235.4 -70.7 170.7 -113.9 120.7C-157 70.7 -208 35.4 -218.4 -10.4C-228.8 -56.1 -198.5 -112.2 -155.4 -154.7C-112.2 -197.2 -56.1 -226.1 2.4 -228.5C60.8 -230.8 121.6 -206.6 170.8 -164.1"
					fill="#001220"
				></path>
			</g>
			<g transform="translate(451.3858583720049 316.0735924284376)">
				<path
					id="blob1"
					d="M179.4 -189.1C219.7 -139.1 230.9 -69.5 221.6 -9.3C212.2 50.9 182.5 101.8 142.2 150.2C101.8 198.5 50.9 244.2 7.8 236.5C-35.4 228.7 -70.7 167.4 -112.7 119C-154.7 70.7 -203.4 35.4 -220.4 -17.1C-237.5 -69.5 -223.1 -139.1 -181.1 -189.1C-139.1 -239.1 -69.5 -269.5 0 -269.5C69.5 -269.5 139.1 -239.1 179.4 -189.1"
					fill="#001220"
				></path>
			</g>
		</svg>
	</section>
</template>

<script>
		<script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>

const tween = KUTE.fromTo(
	"#blob1",
	{ path: "#blob1" },
	{ path: "#blob2" },
	{ repeat: 999, duration: 3000, yoyo: true }
).start();
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
