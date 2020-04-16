import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Stores from "../views/Stores.vue";
import Products from "../views/Products.vue";

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
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Stores",
    name: "Stores",
    component: Stores
  },
  {
    path: "/Products",
    name: "Products",
    component: Products
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
