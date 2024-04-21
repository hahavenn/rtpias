import { defineStore } from "pinia";
import { ref } from "vue";

import Navigation_service from "@/services/navigation.js";

import allRoutes from "@/router/routes.js";
import { INDEX_ROUTE } from "@/router/router";

export default defineStore("navigationStore", () => {
  // конфиг
  const storeConfig = {
    INSTANCES_FIELD_NAMES: {
      _id: "_id",
      DESCRIPTION: "DESCRIPTION",
      NAME: "NAME",
      ROUTE_NAME: "ROUTE_NAME",
      ROUTE_PATH: "ROUTE_PATH",
    },
  };

  // список всех секций навигации
  const navigationList = ref([]);

  // запрос всех секций навигации
  async function fetchNavigationList() {
    const response = await Navigation_service.getNavigationList();

    // если у нас пустой ответ - проверяем наличие в сторе, если есть - возвращаем его
    navigationList.value =
      response ?? (navigationList.value.length !== 0 ? navigationList.value : []);

    // добавить поле для каждой секции
    if (navigationList.value.length !== 0) {
      for (const section of navigationList.value) {
        section[storeConfig.INSTANCES_FIELD_NAMES.ROUTE_PATH] =
          allRoutes.find((route) => route?.name === section.ROUTE_NAME)?.path ?? INDEX_ROUTE.PATH;
      }
    }
  }

  return {
    navigationList,
    fetchNavigationList,
  };
});
