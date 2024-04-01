/* job_practice маршрут */

const JOB_PRACTICE_ROUTE = {
  PATH: "/job_practice",
  NAME: "job_practice",
};

const job_practice_routes = [
  {
    path: JOB_PRACTICE_ROUTE.PATH,
    name: JOB_PRACTICE_ROUTE.NAME,
    component: () => import("@/views/job_practice/JobPractice.vue"),
  },
];

export default job_practice_routes;
