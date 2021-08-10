import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
const app = createApp(App);
app.use(VueSmoothScroll, {
	duration: 1500,
	updateHistory: false,
});
app.mount("#app");
