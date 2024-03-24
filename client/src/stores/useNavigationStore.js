import { defineStore } from "pinia";
import { ref } from "vue";

import useStylesStore from "@/stores/useStylesStore.js";

import Navigation_service from "@/services/navigation.js";
import allRoutes from "@/router/routes.js";

const useStyles = useStylesStore();

export default defineStore("navigationStore", () => {
  // список всех секций навигации
  const _navigationList = ref([]);

  // получение всех секций навигации
  async function getNavigationList(options = {}) {
    /* 
      force - флаг принудительной загрузки новых секций
    */
    const { force = false } = options;

    useStyles.isContentLoaded = false;

    // если мы не загружали список секций
    if (_navigationList.value.length === 0 || force) {
      const response = await Navigation_service.getNavigationList();

      for (const section of response) {
        _navigationList.value.push({
          ...section,
          ROUTE_PATH: allRoutes.find((route) => route.name === section.ROUTE_NAME).path,
        });
      }
    }

    useStyles.isContentLoaded = true;

    return _navigationList.value;
  }

  return {
    getNavigationList,
  };
});
