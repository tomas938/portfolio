import { createApp } from "vue";
import BaseButton from "./Base/BaseButton.vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
createApp(App)
	.use(VueSmoothScroll, {
		duration: 1500,
		updateHistory: false,
	})
	.mount("#app");
App.component("Base-button", BaseButton);
