/* subjects маршрут */

const SUBJECT_ROUTE = {
  PATH: "/subjects",
  NAME: "subjects",
};

const subjects_routes = [
  {
    path: SUBJECT_ROUTE.PATH,
    name: SUBJECT_ROUTE.NAME,
    component: () => import("@/views/subjects/SubjectsView.vue"),
  },
];

export { SUBJECT_ROUTE };
export default subjects_routes;
