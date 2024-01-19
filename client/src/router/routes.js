// название основного маршрута
const INDEX_ROUTE_NAMES = {
  INDEX: "index",
};

// путь основного маршрута
const INDEX_ROUTE_PATHS = {
  _: "/",
};

// псевдонимы основного маршрута
const INDEX_ROUTE_ALIAS = ["/home", "/index", "/main"];

export { INDEX_ROUTE_NAMES, INDEX_ROUTE_ALIAS, INDEX_ROUTE_PATHS };

// все маршруты закидываются сюда
const routes = [
  // основной маршрут
  {
    path: INDEX_ROUTE_PATHS._,
    // component: async () => await import(""),
    name: INDEX_ROUTE_NAMES.INDEX,
    alias: [...INDEX_ROUTE_ALIAS],
  },
  // другие машруты
];

export default routes;
