<template>
	<section class="projects">
		<div class="heading">
			<h2>My projects</h2>
		</div>
		<div class="grid">
			<div class="grid-item ">
				<img src="../imgs/project.1.png" alt="restapiProject" />
				<div class="links">
					<div class="github">
						<i class="fab fa-github fa-4x"></i>
						<a href="#">Code</a>
					</div>
					<div class="netlify">
						<i class="fas fa-satellite-dish fa-4x"></i>
						<a href="#">Live website</a>
					</div>
				</div>
			</div>
			<div class="grid-item">
				<img src="../imgs/project.2.png" alt="restapiProject" />
				<div class="links">
					<a href="#">Code</a>
					<a href="#">Live website</a>
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
		padding-bottom: 5rem;
	}
	.grid {
		width: 80%;
		margin: auto;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 5rem;
	}
	.grid-item {
		cursor: pointer;
	}
	.links {
		display: flex;
		justify-content: space-around;
	}
	.github {
	}
}

img {
	width: 100%;
	height: 100%;
}
i {
	margin: 1rem;
}
a {
	font-size: 3rem;
	text-decoration: none;
	color: $black;
}
</style>
