import router from "@/router/router";

// переход на новый маршрут
function routerGoTo_helper(pathToGo) {
  router.push(pathToGo);
}

export { routerGoTo_helper };
