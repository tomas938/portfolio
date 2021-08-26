<template>
<Preloader.
	<Navigation></Navigation>
	<Intro></Intro>
	<Projects></Projects>
	<About></About>
	<Contact></Contact>
	<Footer></Footer>
</template>

<script>
import Preloader from "./components/Preloader.vue";
import Intro from "./components/Intro.vue";
import Navigation from "./components/Navigation.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default {
	components: {
		Intro,
		Navigation,
		Projects,
		About,
		Contact,
		Footer,
		Preloader,
	},
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
	@media only screen and (max-width: 1850px) {
		font-size: 42.5%;
	}
	@media only screen and (max-width: 650px) {
		font-size: 32.5%;
	}
	@media only screen and (max-width: 400px) {
		font-size: 29.5%;
	}
	@media only screen and (max-width: 353px) {
		font-size: 25.5%;
	}
	@media only screen and (max-width: 306px) {
		font-size: 22.5%;
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
	background: $text-color;
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
li {
	list-style: none;
}
section {
	padding: 15rem 10rem;
	@media only screen and (max-width: 600px) {
		padding: 15rem 0rem;
	}
}
</style>
