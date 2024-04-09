/* LOGGER UTIL */

import { dateToTime_helper } from "@/helpers/time";

export default async function logger_util(message, options = {}) {
  // если у нас прод - не логируем
  if (import.meta.env.PROD) return;

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
      console.log(`[${startedTime}]\n` + `Task done: ${message}`);
      break;
    }
    case error: {
      console.log(
        `[${startedTime}]` +
          `\nTask failed: ${message}` +
          (error_message ? `\nError Message: ${error_message}` : ``) +
          (response
            ? `\nStatus: ${response.status}` +
              `\nStatusText: ${response.statusText}` +
              `\nURL: ${response.url}`
            : ``)
      );

      break;
    }
    default: {
      console.log(`[${startedTime}]\n` + `Task started: ${message}`);
      break;
    }
  }
}
