<template>
	<Navigation></Navigation>
	<Intro></Intro>
	<Projects></Projects>
	<About></About>
</template>

<script>
import Intro from "./components/Intro.vue";
import Navigation from "./components/Navigation.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
export default {
	components: { Intro, Navigation, Projects, About },
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
	@media only screen and (max-width: 1700px) {
		font-size: 52.5%;
	}
	@media only screen and (max-width: 1300px) {
		font-size: 42.5%;
	}
}
body {
	font-family: $font-primary;
	background-color: $bg-color;
	overflow-x: hidden;
}
::-webkit-scrollbar {
	width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: red;
	border-radius: 10px;
}
h1 {
	font-size: 6rem;
	padding: 1.5rem;
}
h2 {
	font-size: 5rem;
}
h3 {
	font-size: 4rem;
}
section {
	padding: 15rem 10rem;
}
</style>
