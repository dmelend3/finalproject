import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Stores from "../views/Stores.vue";
import Request from "../views/Request.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores
  },
  {
    path: "/request",
    name: "Request",
    component: Request
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
