<template>
	<section class="projects">
		<div class="heading">
			<h2>My projects</h2>
		</div>
		<div class="grid">
			<div class="grid-item ">
				<img src="../imgs/project.1.png" alt="restapiProject" />
				<div class="links">
					<a href="#" class="button code">Code</a>
					<a href="#" class="button live">Live website</a>
				</div>
			</div>
			<div class="grid-item">
				<img src="../imgs/project.2.png" alt="restapiProject" />
				<div class="links">
					<a href="#" class="link code">Code</a>
					<a href="#" class="link live">Live website</a>
				</div>
			</div>
			<div class="grid-item">
				<img src="../imgs/project.1.png" alt="restapiProject" />
				<div class="links">
					<div class="github">
						<a href="#" class="">Code</a>
					</div>
					<a href="#" class="button live">Live website</a>
				</div>
			</div>
			<div class="grid-item">
				<img src="../imgs/project.1.png" alt="restapiProject" />
				<div class="links">
					<a href="#" class="button code">Code</a>
					<a href="#" class="button live">Live website</a>
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
}
img {
	width: 100%;
	height: 100%;
}
.links {
	display: flex;
	justify-content: space-around;
}
a {
	font-size: 3rem;
	text-decoration: none;
	color: $black;
}
</style>
