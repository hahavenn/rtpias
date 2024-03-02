import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { SECTIONS_DESCRIPTION, SECTIONS_TITLE } from "@/constants/navSections";
import { allSubPath } from "./helper";

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

// названия+описания разделов на главной странице
const props_NavSectionsVue = {
  list_title: [...Object.values(SECTIONS_TITLE)],
  list_description: [...Object.values(SECTIONS_DESCRIPTION)],
  list_path: [...allSubPath],
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
      alias: [...Object.values(INDEX_ROUTE.ALIASES)],
      props: () => ({ ...props_NavSectionsVue }),
    },
    ...routes,
  ],
  // добавляем историю
  history: createWebHistory(),
});

export default router;
