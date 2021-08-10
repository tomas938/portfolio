<template>
	<div class="grid-item">
		<img :src="image" :alt="altDescription" />
		<a :href="liveWebsite" target="_blank" class="img-wrapper"> </a>
		<div class="links">
			<a :href="githubRepo" target="_blank" class="github">
				<i class="fab fa-github fa-4x"></i>
				<span>Code</span>
			</a>
			<a :href="liveWebsite" target="_blank" class="netlify">
				<i class="fas fa-satellite-dish fa-4x"></i>
				<span>Live website</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ["liveWebsite", "image", "altDescription", "githubRepo"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

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
.img-wrapper {
	position: relative;
	&::before {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(253, 253, 253, 0.274);
	}
}
</style>
