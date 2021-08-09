<template>
	<section class="about">
		<h2>About me 🧑</h2>
		<div class="about__content">
			Hello, my name is <span>Tomáš</span> and i am 21 years old.I'm currently
			studying fire protection 👨‍🚒 at technical University in Zvolen. I know it's
			little bit strange but one day I saw video on youtube about coding and
			that change my life. I started to learn and it became more serious after I
			take my first course at Udemy and it was about
			<a class="js" href="">Javascript</a>. Then I decided to take a course to
			learn css prepocessor <a class="sass" href="">sass</a> and javascript
			framework <a class="vuejs" href="">vue.js</a> and I also purchase course
			about 3D javascript library <a class="threejs" href="">THREE.JS</a>
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
}
.js {
	color: rgb(250, 149, 16);
	font-weight: $semi-bold;
}
</style>
