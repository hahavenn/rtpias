/* LOGGER UTIL */

import { dateToTime_helper } from "@/helpers/time";

export default async function logger_util(task_message) {
  // если у нас прод - не логируем
  if (import.meta.env.PROD) return;

  // фиксируем старт
  const startedTime = dateToTime_helper(new Date());
  console.log(`[${startedTime}] Task: ${task_message}`);
}
