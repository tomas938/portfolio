<template>
	<section class="contact" id="contact">
		<h2>Contact Me</h2>
		<div class="contact__items">
			<div class="socials">
				<div class="contact__buttons">
					<BaseButton
						buttonClass="dark"
						iconName="fas fa-envelope fa-3x"
						pointTo="https://mail.google.com/mail/?view=cm&fs=1&to=tomasalbert9387182@gmail.com"
						><span>Send me a message</span></BaseButton
					>
					<BaseButton
						buttonClass="green"
						iconName="fas fa-phone fa-3x"
						pointTo="tel:+421-904-453-789"
						><span>Telephone</span></BaseButton
					>
				</div>
				<div class="icons">
					<a href="https://www.facebook.com/tomas.albert.5" target="_blank"
						><i class="fab fa-facebook-square fa-5x"></i
					></a>
					<a href="https://twitter.com/TomAlbe45589332" target="_blank"
						><i class="fab fa-twitter fa-5x"></i
					></a>
					<a
						href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-albert-872bb0202/"
						target="_blank"
						><i class="fab fa-linkedin fa-5x"></i
					></a>
					<a
						href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-albert-872bb0202/"
						target="_blank"
						><i class="fab fa-github fa-5x"></i>
					</a>
				</div>
			</div>
			<div id="mapid"></div>
		</div>
	</section>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";
import leaflet from "leaflet";
export default {
	components: {
		BaseButton,
	},
	data() {
		return {
			mymap: null,
		};
	},
	mounted() {
		this.mymap = leaflet
			.map("mapid")
			.setView([48.57563859006568, 19.95319623480288], 14);
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
		leaflet.marker([48.57540887637532, 19.952371940114375]).addTo(this.mymap);
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.contact {
	@media only screen and (max-width: 1200px) {
		padding: 0 10rem;
	}
	@media only screen and (max-width: 1000px) {
		padding: 0 5rem;
	}
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	&__items {
		display: flex;
		height: 50rem;
		@media only screen and (max-width: 1200px) {
			flex-direction: column-reverse;
			align-items: center;
			width: 100%;
			height: auto;
		}
		grid-gap: 10rem;
	}
	&__buttons {
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-gap: 2rem;
	}
	.socials {
		flex-direction: column;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50rem;
	}
	.icons {
		display: flex;
		grid-gap: 2rem;
		cursor: pointer;
	}
}
h2 {
	text-align: center;
	margin-bottom: 15rem;
}
#mapid {
	width: 80rem;
	box-shadow: 5px 5px 19px 11px rgba(0, 0, 0, 0.47);
	@media only screen and (max-width: 1200px) {
		width: 80%;
	}
	@media only screen and (max-width: 1200px) {
		height: 80rem;
	}
}
span {
	font-size: 3rem;
}
.icons,
a {
	position: relative;
	text-decoration: none;
	color: black;
	&::before {
		content: "";
		position: absolute;
		top: 140%;
		left: 0;
		width: 0;
		height: 2px;
		background-color: black;
		transition: 0.2s ease-out;
	}
	&:hover::before {
		width: 100%;
	}
}
i {
	color: #0e1e25;
}
</style>
