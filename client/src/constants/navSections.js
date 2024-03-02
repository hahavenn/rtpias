import { DEPARTMENT_INFO_ROUTE } from "@/router/department_info";
import { EMPLOYEES_ROUTE } from "@/router/employees";
import { EXTRA_ACTIVITIES_ROUTE } from "@/router/extra_activities";
import { JOB_DEPARTMENT_ROUTE } from "@/router/job_department";
import { JOB_PRACTICE_ROUTE } from "@/router/job_practice";
import { SCHEDULE_ROUTE } from "@/router/schedule";
import { SCIENCE_DIRECTIONS_ROUTE } from "@/router/science_directions";
import { SUBJECT_ROUTE } from "@/router/subjects";

export const SUBJECT = {
  TITLE: "Предметы",
  DESCRIPTION: "Дисциплины, которым обучают на кафедре",
  NAME: SUBJECT_ROUTE.NAME,
  PATH: SUBJECT_ROUTE.PATH,
};
export const SCIENCE_DIRECTIONS = {
  TITLE: "Научные направления",
  DESCRIPTION: "Темы НИР и диплома",
  NAME: SCIENCE_DIRECTIONS_ROUTE.NAME,
  PATH: SCIENCE_DIRECTIONS_ROUTE.PATH,
};
export const JOB_PRACTICE = {
  TITLE: "Практики на предприятиях",
  DESCRIPTION: "Предприятия для прохождения практики",
  NAME: JOB_PRACTICE_ROUTE.NAME,
  PATH: JOB_PRACTICE_ROUTE.PATH,
};
export const JOB_DEPARTMENT = {
  TITLE: "Работа на кафедре",
  DESCRIPTION: "",
  NAME: JOB_DEPARTMENT_ROUTE.NAME,
  PATH: JOB_DEPARTMENT_ROUTE.PATH,
};
export const EXTRA_ACTIVITIES = {
  TITLE: "Внеурочная деятельность",
  DESCRIPTION: "",
  NAME: EXTRA_ACTIVITIES_ROUTE.NAME,
  PATH: EXTRA_ACTIVITIES_ROUTE.PATH,
};
export const EMPLOYEES = {
  TITLE: "Сотрудники",
  DESCRIPTION: "Список сотрудников, работающих на кафедре",
  NAME: EMPLOYEES_ROUTE.NAME,
  PATH: EMPLOYEES_ROUTE.PATH,
};
export const SCHEDULE = {
  TITLE: "Расписание",
  DESCRIPTION: "Расписание отработок, дополнительных занятий",
  NAME: SCHEDULE_ROUTE.NAME,
  PATH: SCHEDULE_ROUTE.PATH,
};
export const DEPARTMENT_INFO = {
  TITLE: "Информация о кафедре",
  DESCRIPTION: "Деятельность, дисциплины, связь с кафедрой",
  NAME: DEPARTMENT_INFO_ROUTE.NAME,
  PATH: DEPARTMENT_INFO_ROUTE.PATH,
};

export const NAVIGATION_SECTIONS = {
  SUBJECT,
  SCIENCE_DIRECTIONS,
  JOB_PRACTICE,
  JOB_DEPARTMENT,
  EXTRA_ACTIVITIES,
  EMPLOYEES,
  SCHEDULE,
  DEPARTMENT_INFO,
};
