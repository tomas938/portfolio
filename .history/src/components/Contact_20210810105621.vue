<template>
	<section class="contact">
		<h2>Contact Me</h2>
		<div class="contact__items">
			<div class="socials">
				<a
					class="gmail"
					href="https://mail.google.com/mail/?view=cm&fs=1&to=tomasalbert9387182@gmail.com"
					target="_blank"
				>
					<span>Send me a message</span>
					<i class="fas fa-envelope fa-3x"></i>
				</a>
				<i class="fab fa-facebook-square fa-7x"></i>
				<i class="fab fa-twitter fa-7x"></i>
				<i class="fab fa-linkedin fa-7x"></i>
			</div>
			<div id="mapid"></div>
		</div>
	</section>
</template>

<script>
import leaflet from "leaflet";
export default {
	data() {
		return {
			mymap: null,
		};
	},
	mounted() {
		this.mymap = leaflet
			.map("mapid")
			.setView([48.57521267667082, 19.9536683038964], 13);
		leaflet
			.tileLayer(
				"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9tYXM5MzgiLCJhIjoiY2tzNTJ4bTFuMmF1NTJxbXNhdjRyZjVwMCJ9.eDM8j5Kmd8NmugoXxPChOA",
				{
					attribution:
						'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
					maxZoom: 18,
					id: "mapbox/streets-v11",
					tileSize: 512,
					zoomOffset: -1,
					accessToken:
						"pk.eyJ1IjoidG9tYXM5MzgiLCJhIjoiY2tzNTJ4bTFuMmF1NTJxbXNhdjRyZjVwMCJ9.eDM8j5Kmd8NmugoXxPChOA",
				}
			)
			.addTo(this.mymap);
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.contact {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	&__items {
		display: flex;
		grid-gap: 10rem;
	}
	.socials {
		display: flex;
	}
}
h2 {
	text-align: center;
}
#mapid {
	height: 48rem;
	width: 68rem;
}
a {
	font-size: 3rem;
}
</style>
