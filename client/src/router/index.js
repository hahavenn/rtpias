import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { NAVIGATION_SECTIONS } from "@/constants/navSections";

// основной маршрут
const INDEX_ROUTE = {
  ALIASES: {
    HOME: "/home",
    INDEX: "/index",
    MAIN: "/main",
  },
  PATH: "/",
  NAME: "index",
};

export { INDEX_ROUTE };

// создаем экземпляр роутера
const router = createRouter({
  // все маршруты
  routes: [
    // основной маршрут
    {
      path: INDEX_ROUTE.PATH,
      component: () => import("@/components/Navigation/IndexSections.vue"),
      name: INDEX_ROUTE.NAME,
      alias: [...Object.values(INDEX_ROUTE.ALIASES)],
      props: { sections: NAVIGATION_SECTIONS },
    },
    ...routes,
  ],
  // добавляем историю
  history: createWebHistory(),
});

export default router;
