<template>
	<section class="contact">
		<h2>Contact Me</h2>
		<div id="mapid"></div>
	</section>
</template>

<script>
import leaflet from "leaflet";
export default {
	data() {
		return {

		};
	},
	mounted() {mymap: L.map("mapid").setView([51.505, -0.09], 13),},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.contact {
	height: 100vh;
}
h2 {
	text-align: center;
}
#mapid {
	height: 180px;
}
</style>
