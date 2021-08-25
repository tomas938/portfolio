<template>
	<section class="intro">
		<Navigation></Navigation>
		<h1>Hi🖐,my name is <span>Tomáš</span></h1>
		<h3>a self-taught front-end developer</h3>
	</section>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
	components: {
		Navigation,
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.intro {
	background-image: url("../imgs/header.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	width: 100%;
	color: white;
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
