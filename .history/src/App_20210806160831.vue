<template>
	<Navigation></Navigation>
	<Intro></Intro>
</template>

<script>
import Intro from "./components/Intro.vue";
export default {
	components: { Intro, Navigation },
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-size: 62.5%;
}
</style>
