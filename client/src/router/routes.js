import department_info_routes from "@/router/department_info/department_info.js";
import employees_routes from "@/router/employees/employees.js";
import extra_activities_routes from "@/router/extra_activities/extra_activities.js";
import job_department_routes from "@/router/job_department/job_department.js";
import job_practice_routes from "@/router/job_practice/job_practice.js";
import schedule_routes from "@/router/schedule/schedule.js";
import science_directions_routes from "@/router/science_directions/science_directions.js";
import subjects_routes from "@/router/subjects/subjects.js";

// все маршруты закидываются сюда
const routes = [
  // другие машруты
  ...subjects_routes,
  ...science_directions_routes,
  ...schedule_routes,
  ...job_practice_routes,
  ...job_department_routes,
  ...extra_activities_routes,
  ...employees_routes,
  ...department_info_routes,
];

export default routes;
