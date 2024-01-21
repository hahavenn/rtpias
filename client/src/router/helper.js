import { SUBJECT_ROUTE } from "./subjects";
import { SCIENCE_DIRECTIONS_ROUTE } from "./science_directions";
import { JOB_PRACTICE_ROUTE } from "./job_practice";
import { JOB_DEPARTMENT_ROUTE } from "./job_department";
import { EXTRA_ACTIVITIES_ROUTE } from "./extra_activities";
import { EMPLOYEES_ROUTE } from "./employees";
import { SCHEDULE_ROUTE } from "./schedule";
import { DEPARTMENT_ROUTE } from "./department_info";

// список всех освновных маршрутов (должен совпадать с порядком в navSections.js)
const allSubPath = [
  SUBJECT_ROUTE.PATH,
  SCIENCE_DIRECTIONS_ROUTE.PATH,
  JOB_PRACTICE_ROUTE.PATH,
  JOB_DEPARTMENT_ROUTE.PATH,
  EXTRA_ACTIVITIES_ROUTE.PATH,
  EMPLOYEES_ROUTE.PATH,
  SCHEDULE_ROUTE.PATH,
  DEPARTMENT_ROUTE.PATH,
];

export { allSubPath };
