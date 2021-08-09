<template>
	<section class="about">
		<h2>About me 🧑</h2>
		<div class="about__content">
			Hello, my name is <span>Tomáš</span> and i am 21 years old.I'm currently
			studying fire protection 👨‍🚒 at technical University in Zvolen. I know it's
			little bit strange but one day I saw video on youtube about coding and
			that change my life. I started to learn and it became more serious after I
			take my first course at Udemy and it was about
			<a class="js" target="_blank" href="">Javascript</a>. Then I decided to
			take a course to learn css prepocessor
			<a class="sass" target="_blank" href="">Sass</a> and javascript framework
			<a class="vuejs" target="_blank" href="">Vue.js</a> and I also purchase
			course about 3D javascript library
			<a class="threejs" target="_blank" href="">Three.js</a>
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
	text-decoration: none;
	font-weight: $semi-bold;
}
.js {
	color: rgb(253, 144, 2);
}
.vuejs {
	color: rgb(29, 187, 8);
}
.sass {
	color: rgb(235, 22, 182);
}
.threejs {
	color: rgb(173, 14, 236);
}
</style>
