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
		return {};
	},
	mounted() {
		function mymap() {
			leaflet.map("mapid").setView([51.505, -0.09], 13);

			leaflet
				.tileLayer(
					"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
					{
						attribution:
							'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
						maxZoom: 18,
						id: "mapbox/streets-v11",
						tileSize: 512,
						zoomOffset: -1,
						accessToken: "your.mapbox.access.token",
					}
				)
				.addTo(mymap);
		}
	},
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
