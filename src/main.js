import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/bootstrap.css";
import "bootstrap";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
