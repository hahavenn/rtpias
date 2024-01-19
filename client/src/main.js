import { createApp } from "vue";
import App from "./App.vue";

// import Vue Router instance
import router from "./router";

// import function to create Pinia's middleware
import { createPinia } from "pinia";

// creating app
const app = createApp(App);

// define Pinia store
const store = createPinia();

// connect Pinia store
app.use(store);

// connect Vue Router instance
app.use(router);

// mount app into div#app
app.mount("#app");
