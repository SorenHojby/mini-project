import Vue from "vue";
import Router from "vue-router";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product
    }
  ]
});
