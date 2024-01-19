import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// создаем экземпляр роутера
const router = createRouter({
  // всек маршруты
  routes,
  // добавляем историю
  history: createWebHistory(),
});

export default router;
