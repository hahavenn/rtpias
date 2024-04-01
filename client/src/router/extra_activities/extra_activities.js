/* extra_activities маршрут */

const EXTRA_ACTIVITIES_ROUTE = {
  PATH: "/extra_activities",
  NAME: "extra_activities",
};

const extra_activities_routes = [
  {
    path: EXTRA_ACTIVITIES_ROUTE.PATH,
    name: EXTRA_ACTIVITIES_ROUTE.NAME,
    component: () => import("@/views/extra_activities/ExtraActivitiesView.vue"),
  },
];

export default extra_activities_routes;
