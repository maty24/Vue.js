import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router"; //llamo el router

//hay que poner el router aca en la raiz
createApp(App).use(router).mount("#app");
