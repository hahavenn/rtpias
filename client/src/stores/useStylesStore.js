import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("stylesStore", () => {
  // показ модального окна
  const isModalVisible = ref(false);
  function toggleModalVisibility() {
    isModalVisible.value = !isModalVisible.value;

    return isModalVisible.value;
  }

  return {
    isModalVisible,
    toggleModalVisibility,
  };
});
