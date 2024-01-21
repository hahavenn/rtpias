// основной маршрут
const INDEX_ROUTE = {
  ALIASES: {
    HOME: "/home",
    INDEX: "/index",
    MAIN: "/main",
  },
  PATH: {
    _: "/",
  },
  NAME: {
    INDEX: "index",
  },
};

export { INDEX_ROUTE };

// все маршруты закидываются сюда
const routes = [
  // основной маршрут
  {
    path: INDEX_ROUTE.PATH._,
    component: () => import("@/components/Navigation/NavSections.vue"),
    name: INDEX_ROUTE.NAME.INDEX,
    alias: [...Object.values(INDEX_ROUTE.ALIASES)],
    props: () => ({
      list_title: ["Предметы"],
      list_description: ["Перечень дисциплин, которым обучают на кафедре"],
      list_path: ["subjects"],
    }),
  },
  // другие машруты
];

export default routes;
