/* vonder*/
import { createApp } from "vue";
import { createPinia } from "pinia";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import App from "./components/app.vue"; //.vue必须带o(╥﹏╥)o 不然报错
/* styles*/
import "./assets/css/reset.css";
import "./assets/css/page.css";
import "@arco-design/web-vue/dist/arco.css";

createApp(App).use(createPinia()).use(ArcoVue).use(router).mount("#app");
