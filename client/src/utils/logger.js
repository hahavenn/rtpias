/* LOGGER UTIL */

import { convertMs_helper } from "@/helpers/time";

export default async function logger_util(task_message) {
  // если у нас прод - не логируем
  if (import.meta.env.PROD) return;

  // фиксируем старт
  const startedTime = convertMs_helper(new Date().getMilliseconds());
  console.log(`[${startedTime}] Task: ${task_message}`);
}
