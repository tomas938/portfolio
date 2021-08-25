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

.green,
.dark {
	display: flex;
	align-items: center;
	padding: 2rem 5rem;
	border-radius: 5rem;
	cursor: pointer;
	animation: pressed-reverse 0.3s ease-in-out;
	animation-fill-mode: backwards;
	@media only screen and (max-width: 650px) {
		justify-content: center;
		padding: 5rem 5rem;
	}

	i {
		margin-right: 2rem;
	}
	i:focus {
		border: 2px solid green;
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
	background-color: $text-color;
	i {
		color: $bg-color;
	}
}
a {
	text-decoration: none;
	color: $bg-color;
	outline: none;
	&:focus {
		border: 2px solid $focus-color;
	}
}
</style>
