/* subjects маршрут */
import single_subject_routes from "./single_subject/single_subject";

const SUBJECTS_ROUTE = {
  PATH: "/subjects",
  NAME: "subjects",
};

const subjects_routes = [
  {
    path: SUBJECTS_ROUTE.PATH,
    name: SUBJECTS_ROUTE.NAME,
    component: () => import("@/views/subjects/SubjectsView.vue"),
    children: [...single_subject_routes],
  },
];

export { SUBJECTS_ROUTE };
export default subjects_routes;
