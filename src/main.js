import Vue from "vue";
import { firestorePlugin } from "vuefire";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./plugins/firebase";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBaInD-Dt7choROBCG3TWuaF0nNXTMEhDY",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
