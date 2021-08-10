import { createApp } from "vue";
import BaseButton from "./Base/BaseButton.vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
const app = createApp(App);
// createApp(App)
app.use(VueSmoothScroll, {
	duration: 1500,
	updateHistory: false,
});
app.component("base-button", BaseButton);
app.mount("#app");
