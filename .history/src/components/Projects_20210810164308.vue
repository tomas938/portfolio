<template>
	<section class="projects" id="projects">
		<div class="heading">
			<h2>My projects</h2>
		</div>
		<div class="grid">
			<Project-Informations
				liveWebsite="https://tomasflagsapi.netlify.app/#/"
				altDescription="flags api project"
				image="project.1.png"
				githubRepo="https://github.com/tomas938/restapiproject"
				id="first"
			></Project-Informations>
			<Project-Informations
				liveWebsite="https://tomaspage2.netlify.app"
				altDescription="loopstudios project"
				image="project.2.png"
				githubRepo="https://github.com/tomas938/loopstudios-landing-page-main"
				id="second"
			></Project-Informations>
			<Project-Informations
				liveWebsite="https://threejssphere.netlify.app/"
				altDescription="three.js sphere"
				image="project.3.png"
				githubRepo="https://github.com/tomas938/18"
				id="third"
			></Project-Informations>
			<Project-Informations
				liveWebsite="https://vuecarousel.netlify.app/"
				altDescription="vue carousel"
				image="project.4.png"
				githubRepo="https://github.com/tomas938/vue-3-carousel-main"
				id="fourth"
			></Project-Informations>
		</div>
	</section>
</template>

<script>
import ProjectInformations from "../Base/ProjectInformations.vue";

export default {
	components: {
		ProjectInformations,
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.projects {
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	.heading {
		padding-bottom: 15rem;
		h2 {
			font-size: 6rem;
		}
	}
	.grid {
		width: 80%;
		@media only screen and (max-width: 1300px) {
			width: 90%;
		}
		margin: auto;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(2, 1fr);
		@media only screen and (max-width: 1200px) {
			grid-template-columns: 1fr;
		}
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 10rem;
		grid-row-gap: 20rem;
	}
}
#first,
#second,
#third,
#fourth {
	&::before {
		content: "VUE.JS, HTML, SASS";
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		font-weight: $semi-bold;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: all 0.4s ease-in-out;
		opacity: 0;
		background-color: rgba(17, 17, 17, 0.856);
	}
	&:hover::before {
		opacity: 1;
	}
}
#first {
	&::before {
		content: "VUE.JS, HTML, SASS";
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		font-weight: $semi-bold;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: all 0.4s ease-in-out;
		opacity: 0;
		background-color: rgba(17, 17, 17, 0.856);
	}
	&:hover::before {
		opacity: 1;
	}
}

#second {
	&::before {
		content: "HTML, SASS, GSAP";
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		font-weight: $semi-bold;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: all 0.4s ease-in-out;
		opacity: 0;
		background-color: rgba(17, 17, 17, 0.856);
	}
	&:hover::before {
		opacity: 1;
	}
}
#first,
#second,
#third,
#fourth {
	&::before {
		content: "VUE.JS, HTML, SASS";
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		font-weight: $semi-bold;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: all 0.4s ease-in-out;
		opacity: 0;
		background-color: rgba(17, 17, 17, 0.856);
	}
	&:hover::before {
		opacity: 1;
	}
}
</style>
