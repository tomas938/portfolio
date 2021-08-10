<template>
	<a :href="pointTo" target="_blank" :class="buttonClass">
		<i :class="iconName"></i>
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: ["buttonClass", "iconName", "pointTo"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

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
.green {
	background-color: #238636;

	i {
		color: white;
	}
}
.dark {
	background-color: #0e1e25;
	i {
		color: white;
	}
}
a {
	text-decoration: none;
	color: $white;
}
</style>
