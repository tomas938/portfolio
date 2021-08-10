import { createApp } from "vue";
import ProjectInformations from "./Base/ProjectInformations";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
const app = createApp(App);
app.use(VueSmoothScroll, {
	duration: 1500,
	updateHistory: false,
});
app.component("base-button", ProjectInformations);
app.mount("#app");
