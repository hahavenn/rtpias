import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("userStore", () => {
  // авторизован ли пользователь
  const isAuth = ref(false);

  return { isAuth };
});
