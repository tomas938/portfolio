<template>
	<footer>
		<i class="fas fa-copyright"></i> <span>Portfolio.</span> 2021 created by
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
	padding-top: 3rem;
	padding-bottom: 3rem;
	font-size: 2.5rem;
	text-align: center;
	color: $white;
}
span {
	font-weight: $semi-bold;
}
</style>
