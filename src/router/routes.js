const routes = [
  // Always leave this as last one,
  {
    path: "",
    component: () => import("pages/QuasarTest.vue"),
  },
  {
    path: "/about",
    component: () => import("pages/About.vue"),
  },
  {
    path: "/weather",
    component: () => import("pages/Weather.vue"),
  },
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
