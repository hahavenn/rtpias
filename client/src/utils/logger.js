/* LOGGER UTIL */

import { dateToTime_helper } from "@/helpers/time";

export default async function logger_util(message, options = {}) {
  // если у нас прод - не логируем
  if (import.meta.env.PROD) return;

  const LOGGER_CONFIG = {
    timeStamps: true,
  };

  // если логировать без вывода времени
  if(!Number(import.meta.env.VITE_CONFIG_LOGGER_TIMESTAMPS)) LOGGER_CONFIG.timeStamps = false;

  /* 
    done: вывести что task завершен
    error: у нас ошибка
    error_message: сообщение ошибки
    response: объект response
  */
  const { done = false, error = false, response, error_message = "" } = options;

  // фиксируем старт
  const startedTime = dateToTime_helper(new Date());

  // выводим
  switch (true) {
    case done: {
      console.log(
        (LOGGER_CONFIG.timeStamps ? `[${startedTime}]\n` : '') 
        + `Task done: ${message}`
      );
      break;
    }
    case error: {
      console.log(
        (LOGGER_CONFIG.timeStamps ? `[${startedTime}]` : '') 
        + `\nTask failed: ${message}` 
        + (error_message ? `\nError Message: ${error_message}` : '')
        + (response
          ? `\nStatus: ${response.status}` +
            `\nStatusText: ${response.statusText}` +
            `\nURL: ${response.url}`
          : '')
      );

      break;
    }
    default: {
      console.log(
        (LOGGER_CONFIG.timeStamps ? `[${startedTime}]\n` : '') 
        + `Task started: ${message}`
      );
      break;
    }
  }
}
