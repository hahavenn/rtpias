import router from "@/router/router";

// переход на новый маршрут
function routerGoTo_helper(pathToGo) {
  router.push(pathToGo);
}

// получение определенного параметра из маршрута
function getRouteParam(paramName) {
  return router.currentRoute.value.params?.[paramName];
}

export { routerGoTo_helper, getRouteParam };
