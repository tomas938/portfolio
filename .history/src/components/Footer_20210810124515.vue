<template>
	<footer>
		<i class="fas fa-copyright"></i><span> .Portfolio</span> 2021 created by
		<span>Tomáš </span>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
footer {
	background-color: #238636;
	margin-top: 10rem;
	padding-top: 5rem;
	padding-bottom: 5rem;
	font-size: 3rem;
	text-align: center;
	color: $white;
}
span {
	font-weight: $semi-bold;
}
i {
	&::before {
		content: "";
		display: block;
		height: 2px;
		width: 40%;
		position: absolute;
		top: 110%;
		left: 30%;
		background-color: $white;
		opacity: 0;
		transition: 0.3s ease;
	}
	&:hover::before {
		opacity: 1;
		left: 0%;
		right: -10%;
		width: 110%;
	}
}
</style>
