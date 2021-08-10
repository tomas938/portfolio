<template>
	<div class="links">
		<a
			href="https://github.com/tomas938/restapiproject"
			target="_blank"
			class="github"
		>
			<i class="fab fa-github fa-4x"></i>
			<slot>
				<span>Code</span>
			</slot>
		</a>
		<a
			href="https://tomasflagsapi.netlify.app/#/"
			target="_blank"
			class="netlify"
		>
			<i class="fas fa-satellite-dish fa-4x"></i>
			<slot>
				<span></span>
			</slot>
		</a>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.links {
	display: flex;
	justify-content: space-around;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		grid-gap: 3rem;
	}
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
	@media only screen and (max-width: 600px) {
		justify-content: center;
	}

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
</style>
