<template>
	<div class="grid-item">
		<a :href="liveWebsite" target="_blank" class="img-wrapper" :id="id">
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
	props: ["liveWebsite", "image", "altDescription", "githubRepo", "id"],
	components: {
		BaseButton,
	},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
a {
	text-decoration: none;
	outline: none;
	color: $links-color;
}
a:focus {
	border: 2px dotted $text-color;
}
.grid-item {
	display: flex;
	flex-direction: column;
	grid-gap: 8rem;
}
.links {
	display: flex;
	justify-content: space-around;
	@media only screen and (max-width: 650px) {
		flex-direction: column;
		grid-gap: 3rem;
	}
}

.img-wrapper,
img {
	width: 100%;
	height: 100%;
	box-shadow: 5px 5px 12px -4px rgba(0, 0, 0, 0.68);
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
}
#job-filter,
#todo-app,
#restapi,
#loopstudios,
#three,
#vuecarousel {
	&::before {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 3rem;
		font-weight: $semi-bold;
		height: 100%;
		width: 100%;
		transition: all 0.4s ease-in-out;
		background-color: rgba(17, 17, 17, 0.856);
		opacity: 0;
	}
	&:hover::before {
		opacity: 1;
	}
}
#job-filter {
	&::before {
		content: "VUE.JS, HTML, SASS";
	}
}
#todo-app {
	&::before {
		content: "VUE.JS, HTML, SASS, Sortable.js, LocalStorage";
	}
}
#restapi {
	&::before {
		content: "VUE.JS, HTML, SASS, REST API";
	}
}
#loopstudios {
	&::before {
		content: "HTML, SASS, GSAP";
	}
}
#three {
	&::before {
		content: "THREE.JS, DAT.GUI";
	}
}
#vuecarousel {
	&::before {
		content: "VUE.JS-composition API, HTML, SASS";
	}
}
</style>
