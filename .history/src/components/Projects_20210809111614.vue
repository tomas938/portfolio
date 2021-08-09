<template>
	<section class="projects">
		<div class="heading">
			<h2>My projects</h2>
		</div>
		<div class="grid">
			<div class="grid-item">
				<a
					href="https://tomasflagsapi.netlify.app/#/"
					target="_blank"
					class="img-wrapper"
				>
					<img src="../imgs/project.1.png" alt="restapiProject" />
				</a>
				<div class="links">
					<a
						href="https://github.com/tomas938/restapiproject"
						target="_blank"
						class="github"
					>
						<i class="fab fa-github fa-4x"></i>
						<span>Code</span>
					</a>
					<a
						href="https://tomasflagsapi.netlify.app/#/"
						target="_blank"
						class="netlify"
					>
						<i class="fas fa-satellite-dish fa-4x"></i>
						<span>Live website</span>
					</a>
				</div>
			</div>
			<div class="grid-item">
				<a
					href="https://tomaspage2.netlify.app"
					target="_blank"
					class="img-wrapper"
				>
					<img src="../imgs/project.2.png" alt="loopstudios project" />
				</a>
				<div class="links">
					<a
						href="https://github.com/tomas938/loopstudios-landing-page-main"
						target="_blank"
						class="github"
					>
						<i class="fab fa-github fa-4x"></i>
						<span>Code</span>
					</a>
					<a
						href="https://tomaspage2.netlify.app"
						target="_blank"
						class="netlify"
					>
						<i class="fas fa-satellite-dish fa-4x"></i>
						<span>Live website</span>
					</a>
				</div>
			</div>
			<div class="grid-item">
				<a
					href="https://tomaspage2.netlify.app"
					target="_blank"
					class="img-wrapper"
				>
					<img src="../imgs/project.3.png" alt="three.js sphere" />
				</a>
				<div class="links">
					<a
						href="https://github.com/tomas938/18"
						target="_blank"
						class="github"
					>
						<i class="fab fa-github fa-4x"></i>
						<span>Code</span>
					</a>
					<a
						href="https://threejssphere.netlify.app/"
						target="_blank"
						class="netlify"
					>
						<i class="fas fa-satellite-dish fa-4x"></i>
						<span>Live website</span>
					</a>
				</div>
			</div>
			<div class="grid-item">
				<a
					href="https://tomaspage2.netlify.app"
					target="_blank"
					class="img-wrapper"
				>
					<img src="../imgs/project.4.png" alt="vue carousel" />
				</a>
				<div class="links">
					<a
						href="https://github.com/tomas938/18"
						target="_blank"
						class="github"
					>
						<i class="fab fa-github fa-4x"></i>
						<span>Code</span>
					</a>
					<a
						href="https://vuecarousel.netlify.app/"
						target="_blank"
						class="netlify"
					>
						<i class="fas fa-satellite-dish fa-4x"></i>
						<span>Live website</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.projects {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	.heading {
		font-size: 4rem;
		padding-bottom: 10rem;
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
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 5rem;
	}
	.grid-item {
		display: flex;
		flex-direction: column;
		grid-gap: 5rem;
	}
	.links {
		display: flex;
		justify-content: space-around;
	}
	.github,
	.netlify {
		display: flex;
		align-items: center;
		padding: 2rem 5rem;
		border-radius: 5rem;
		cursor: pointer;
		animation: pressed-reverse 0.3s ease-in-out;
		animation-fill-mode: backwards;

		i {
			margin-right: 2rem;
		}
		&:hover,
		&:active {
			box-shadow: 0px 9px 5px 1px rgba(0, 0, 0, 0.26);
			animation: pressed 0.3s ease-in-out;
			animation-fill-mode: forwards;
		}
	}
	.github {
		background-color: #238636;

		i {
			color: white;
		}
	}
	.netlify {
		background-color: #0e1e25;
		i {
			color: white;
		}
	}
}

.img-wrapper,
img {
	width: 100%;
	height: 100%;
	box-shadow: 5px 5px 19px 11px rgba(0, 0, 0, 0.47);
}

a {
	text-decoration: none;
	color: $white;
}
span {
	font-size: 3rem;
}
</style>
