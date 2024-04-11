/* NAVIGATION SERVICE */
import logger_util from "@/utils/logger";

class Navigation_service {
  // эндпойнты для навигации
  static #ENDPOINTS = {
    BASE_URL: `${import.meta.env.VITE_SERVER_URL}/navigation`,
  };

  // сообщения для логгирования
  static #LOG_MESSAGES = {
    FETCH_ALL: "Запрос навигационных секций",
  };

  // получить список секций навигации
  static async getNavigationList() {
    try {
      logger_util(this.#LOG_MESSAGES.FETCH_ALL);

      const response = await fetch(this.#ENDPOINTS.BASE_URL, {
        method: "GET",
      });

      // если не ок
      if (!response.ok) throw response;

      logger_util(this.#LOG_MESSAGES.FETCH_ALL, { done: true });
      return response.json();
    } catch (response) {
      logger_util(this.#LOG_MESSAGES.FETCH_ALL, {
        error: true,
        response,
      });

      return null;
    }
  }
}

export default Navigation_service;
