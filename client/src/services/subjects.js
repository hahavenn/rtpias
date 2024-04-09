/* SUBJECTS SERVICE */
import logger_util from "@/utils/logger";

class Subjects_service {
  // эндпойнты
  static #ENDPOINTS = {
    BASE_URL: `${import.meta.env.VITE_SERVER_URL}/subjects`,
  };

  // сообщения для логирования
  static #LOG_MESSAGES = {
    FETCH_ALL: "Запрос всех предметов",
  };

  // получить список всех предметов
  static async getSubjects() {
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

export default Subjects_service;
