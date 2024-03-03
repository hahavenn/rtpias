import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./routes";
import { NAVIGATION_SECTIONS } from "@/constants/navSections";
import { INDEX_ROUTE } from "./constants";

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
      props: { sections: NAVIGATION_SECTIONS },
    },
    ...allRoutes,
  ],
  // добавляем историю
  history: createWebHistory(),
});

export default router;
