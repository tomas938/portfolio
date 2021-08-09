<template>
	<Navigation></Navigation>
	<Intro></Intro>
	<Projects></Projects>
</template>

<script>
import Intro from "./components/Intro.vue";
import Navigation from "./components/Navigation.vue";
import Projects from "./components/Projects.vue";
export default {
	components: { Intro, Navigation, Projects },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-size: 62.5%;
	@media only screen and (max-width: 600px) {
		body {
			background-color: lightblue;
		}
	}
}
body {
	font-family: $font-primary;
	background-color: $bg-color;
}
</style>
