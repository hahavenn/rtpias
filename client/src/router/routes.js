import department_info_routes from "./department_info";
import employees_routes from "./employees";
import extra_activities_routes from "./extra_activities";
import job_department_routes from "./job_department";
import job_practice_routes from "./job_practice";
import missed_classes_routes from "./missed_classes";
import schedule_routes from "./schedule";
import science_directions_routes from "./science_directions";
import subjects_routes from "./subjects";

// все маршруты закидываются сюда
const routes = [
  // другие машруты
  ...subjects_routes,
  ...science_directions_routes,
  ...schedule_routes,
  ...missed_classes_routes,
  ...job_practice_routes,
  ...job_department_routes,
  ...extra_activities_routes,
  ...employees_routes,
  ...department_info_routes,
];

export default routes;
