import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入图标css
import './assets/fontawesome-free-5.11.2-web/css/all.min.css'

createApp(App)
.use(router)
.use(store)
.mount("#juejin");
