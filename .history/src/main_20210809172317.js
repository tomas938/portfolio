import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
createApp(App)
	.use(VueSmoothScroll, {
		duration: 2000,
		updateHistory: false,
	})
	.mount("#app");
