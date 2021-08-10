<template>
	<div class="grid-item">
		<a :href="liveWebsite" target="_blank" class="img-wrapper">
			<img :src="require(`../imgs/${image}`)" :alt="altDescription" />
		</a>
		<div class="links">
			<BaseButton
				:pointTo="githubRepo"
				buttonClass="green"
				:iconName="'fab fa-github fa-4x'"
			>
				<span>Code</span>
			</BaseButton>
			<BaseButton
				:pointTo="liveWebsite"
				buttonClass="dark"
				:iconName="'fas fa-satellite-dish fa-4x'"
			>
				<span>Live website</span>
			</BaseButton>
		</div>
	</div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
	props: ["liveWebsite", "image", "altDescription", "githubRepo"],
	components: {
		BaseButton,
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.grid-item {
	display: flex;
	flex-direction: column;
	grid-gap: 8rem;
}
.links {
	display: flex;
	justify-content: space-around;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		grid-gap: 3rem;
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
		content: "fdfd";
		position: absolute;
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
