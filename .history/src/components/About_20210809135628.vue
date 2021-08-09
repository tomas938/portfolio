<template>
	<section class="about">
		<h2>About me 🧑</h2>
		<div class="about__content">
			Hello, my name is <span>Tomáš</span> and i am 21 years old.I'm currently
			studying fire protection 👨‍🚒 at technical University in Zvolen. I know it's
			little bit strange but one day I saw video on youtube about coding and
			that change my life. I'm started to learn and it became more serious after
			I take my first <a href=""> course</a>at Udemy and it was about
			Javascript. Then I decided to take a course to learn css prepocessor
			<a href="scss"></a> and javascript framework<a href="">vue.js</a> and I
			also purchase course about javascript 3D library<a href="">THREE.JS</a
			>which I did not finish yet.I'm also like sport espacialy football ⚽. In
			my free time I like to watch streams at twitch and sometimes I like to
			play video games 🎮.
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>
