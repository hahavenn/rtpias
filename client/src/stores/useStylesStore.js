import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("stylesStore", () => {
  // состояние темы
  const isLightTheme = ref(true);

  function toggleTheme(state) {
    isLightTheme.value = state !== undefined ? !isLightTheme.value : state;

    return isLightTheme.value;
  }

  return {
    isLightTheme,
    toggleTheme,
  };
});
