import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("stylesStore", () => {
  // состояние темы
  const isLightTheme = ref(true);

  function toggleTheme(state) {
    isLightTheme.value = state !== undefined ? !isLightTheme.value : state;

    return isLightTheme.value;
  }

  // показ модального окна
  const isModalVisible = ref(false);
  function toggleModalVisibility() {
    isModalVisible.value = !isModalVisible.value;

    return isModalVisible.value;
  }

  return {
    isLightTheme,
    toggleTheme,
    isModalVisible,
    toggleModalVisibility,
  };
});
