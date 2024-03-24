import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "@/router/routes.js";

// основной маршрут
export const INDEX_ROUTE = {
  ALIASES: {
    HOME: "/home",
    INDEX: "/index",
    MAIN: "/main",
  },
  PATH: "/",
  NAME: "index",
};

// создаем экземпляр роутера
const router = createRouter({
  // все маршруты
  routes: [
    // основной маршрут
    {
      path: INDEX_ROUTE.PATH,
      component: () => import("@/components/Navigation/IndexSections.vue"),
      name: INDEX_ROUTE.NAME,
      alias: Object.values(INDEX_ROUTE.ALIASES),
    },
    ...allRoutes,
  ],
  // добавляем историю
  history: createWebHistory(),
});

export default router;
