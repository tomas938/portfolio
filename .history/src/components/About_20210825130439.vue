<template>
	<section class="about" id="about">
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
				href="https://www.udemy.com/course/the-complete-javascript-course/?gclid=EAIaIQobChMI_uTN89Om8gIVA6p3Ch2U1wyQEAAYASAAEgLw8PD_BwE&matchtype=b&utm_campaign=LongTail-New_la.EN_cc.ROWMTA-B&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_100862011616_._ad_537607962144_._kw_%2Bjavascript+%2Bcourse_._de_c_._dm__._pl__._ti_kwd-329721740124_._li_9062581_._pd__._"
				>Javascript</a
			>. Then I decided to take a course to learn css prepocessor
			<a
				class="sass"
				target="_blank"
				href="https://www.udemy.com/course/advanced-css-and-sass/"
				>Sass</a
			>
			and javascript framework
			<a
				class="vuejs"
				target="_blank"
				href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
				>Vue.js</a
			>
			and I also purchase course about 3D javascript library
			<a class="threejs" target="_blank" href="https://threejs-journey.xyz/"
				>Three.js</a
			>
			which I didn't finish yet.I'm also like sports espacialy football ⚽. In
			my free time I like to watch live-streams at twitch and I also like video
			games 🎮.
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.about {
	@media only screen and (max-width: 600px) {
		padding: 0rem 10rem;
	}
	&__content {
		padding: 0rem 10rem;
		font-size: 3rem;
		max-width: 140rem;
		line-height: 5rem;
		margin: auto;
		text-align: center;
		@media only screen and (max-width: 1000px) {
			padding: 10rem 0rem;
		}
	}
}

h2 {
	text-align: center;
	margin-bottom: 15rem;
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
.js {
	color: rgb(245, 150, 27);
	&:hover {
		color: rgb(206, 121, 10);
	}
}
.sass {
	a {
		outline: none;
	}
	&:focus {
		border: 2px dotted rgb(231, 82, 194);
	}
}
.vuejs {
	a {
		outline: none;
	}
	&:focus {
		border: 2px dotted rgb(29, 187, 8);
	}
}
.threejs {
	a {
		outline: none;
	}
	&:focus {
		border: 2px dotted rgb(101, 14, 136);
	}
}
</style>
