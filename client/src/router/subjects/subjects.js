/* subjects маршрут */

const SUBJECTS_ROUTE = {
  PATH: "/subjects",
  NAME: "subjects",
};

const subjects_routes = [
  {
    path: SUBJECTS_ROUTE.PATH,
    name: SUBJECTS_ROUTE.NAME,
    component: () => import("@/views/subjects/SubjectsView.vue"),
  },
];

export { SUBJECTS_ROUTE };
export default subjects_routes;
