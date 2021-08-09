<template>
	<section class="about">
		<h2>About me 🧑</h2>
		<div class="about__content">
			Hello, my name is <span>Tomáš</span> and i am 21 years old.I'm currently
			studying fire protection 👨‍🚒 at technical University in Zvolen. I know it's
			little bit strange but one day I saw video on youtube about coding and
			that change my life. I started to learn and it became more serious after I
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
			which I did not finish yet.I'm also like sports espacialy football ⚽. In
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
	&__content {
		padding: 10rem;
		font-size: 3rem;
		max-width: 140rem;
		line-height: 5rem;
		margin: auto;
	}
}

h2 {
	text-align: center;
}
a {
	// text-decoration: none;
	font-weight: $semi-bold;
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
		color: rgb(206, 121, 10);
	}
}
.sass {
	color: rgb(235, 22, 182);
	&:hover {
		color: rgb(206, 121, 10);
	}
}
.threejs {
	color: rgb(173, 14, 236);
	&:hover {
		color: rgb(206, 121, 10);
	}
}
</style>
