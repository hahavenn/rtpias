/* job_department маршрут */

const JOB_DEPARTMENT_ROUTE = {
  PATH: "/job_department",
  NAME: "job_department",
};

const job_department_routes = [
  {
    path: JOB_DEPARTMENT_ROUTE.PATH,
    name: JOB_DEPARTMENT_ROUTE.NAME,
    component: () => import("@/views/job_department/JobDepartmentView.vue"),
  },
];

export default job_department_routes;
