import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/second_login",
    name: "second_login",
    component: () => import("../views/SecondLogin.vue"),
  },
  {
    path: "/third_page",
    name: "third_page",
    component: () => import("../views/ThirdPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
