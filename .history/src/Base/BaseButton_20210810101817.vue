<template>
	<a :href="githubRepo" target="_blank" class="github">
		<i class="fab fa-github fa-4x"></i>
		<span>Code</span>
	</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
a {
	text-decoration: none;
	color: $white;
}
span {
	font-size: 3rem;
}
</style>
