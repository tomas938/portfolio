<template>
	<section class="about" id="sec-3">
		<h2>About me 🧑</h2>
		<div class="about__content">
			Hello, my name is <span>Tomáš</span> and I am 21 years old.I'm currently
			studying fire protection 👨‍🚒 at technical University in Zvolen.I know it's
			little bit strange but one day I saw video on youtube about coding and I
			found new hobby .I started to learn and it became more serious after I
			take my first course at Udemy and it was about
			<a
				class="js"
				target="_blank"
				href="https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649535?start=900#overview"
				>Javascript</a
			>. Then I decided to take a course to learn css prepocessor
			<a
				class="sass"
				target="_blank"
				href="https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8312878?start=0#overview"
				>Sass</a
			>
			and javascript framework
			<a
				class="vuejs"
				target="_blank"
				href="https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21880122?start=240#overview"
				>Vue.js</a
			>
			and I also purchase course about 3D javascript library
			<a class="threejs" target="_blank" href="https://threejs-journey.xyz/"
				>Three.js</a
			>
			which I didn't finish yet.I'm also like sports espacialy football ⚽. In
			my free time I like to watch live-streams at twitch and I also like play
			video games 🎮.
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.about {
	height: 100vh;
	@media only screen and (max-width: 600px) {
		padding: 0rem 10rem;
	}
	&__content {
		padding: 10rem;
		font-size: 3rem;
		max-width: 140rem;
		line-height: 5rem;
		margin: auto;
		text-align: center;
		@media only screen and (max-width: 1000px) {
			text-align: center;
			padding: 10rem 0rem;
		}
	}
}

h2 {
	text-align: center;
}
a {
	// text-decoration: none;
	font-weight: $semi-bold;
	transition: 0.3s ease-in-out;
}
.js {
	color: rgb(245, 150, 27);
	&:hover {
		color: rgb(206, 121, 10);
	}
}
.vuejs {
	color: rgb(29, 187, 8);
	&:hover {
		color: rgb(23, 145, 7);
	}
}
.sass {
	color: rgb(231, 82, 194);
	&:hover {
		color: rgb(196, 76, 166);
	}
}
.threejs {
	color: rgb(163, 21, 219);

	&:hover {
		color: rgb(101, 14, 136);
	}
}
</style>
