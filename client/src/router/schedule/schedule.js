/* schedule маршрут */

const SCHEDULE_ROUTE = {
  PATH: "/schedule",
  NAME: "schedule",
};

const schedule_routes = [
  {
    path: SCHEDULE_ROUTE.PATH,
    name: SCHEDULE_ROUTE.NAME,
    component: () => import("@/views/schedule/ScheduleView.vue"),
  },
];

export default schedule_routes;
