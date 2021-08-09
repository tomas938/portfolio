<template>
	<section class="projects">
		<div class="heading">
			<h2>My projects</h2>
		</div>
		<div class="grid">
			<div class="grid-item">
				<img src="../imgs/project.1.png" alt="restapiProject" />
				<div class="links">
					<a href="#" class="button code">Code</a>
					<a href="#" class="button live">Live website</a>
				</div>
			</div>
			<div class="grid-item">
				<img src="../imgs/project.2.png" alt="restapiProject" />
				<div class="links">
					<a href="#" class="button code">Code</a>
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
.projects {
	height: 100vh;
	.grid {
		width: 80%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
img {
	width: 100%;
	height: 100%;
}
</style>
