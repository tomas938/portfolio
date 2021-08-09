<template>
	<section class="intro">
		<Navigation></Navigation>
		<h1>Hi🖐,my name is Tomáš</h1>
		<h2>a self-taught web developer</h2>
	</section>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
	components: {
		Navigation,
	},
};
</script>

<style lang="scss" scoped>
.intro {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	// h1 {
	// 	width: 100%;
	// 	text-align: center;
	// 	font-size: 50px;
	// 	font-weight: 700;
	// 	position: absolute;
	// 	top: 40%;
	// 	color: #9b9696;
	// }
	// h2 {
	// 	width: 100%;
	// 	text-align: center;
	// 	font-size: 50px;
	// 	font-weight: 700;
	// 	position: absolute;
	// 	top: 50%;
	// 	color: #000000;
	// }
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
