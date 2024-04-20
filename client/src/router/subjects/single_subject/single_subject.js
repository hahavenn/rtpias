/* single subject */
const SINGLE_SUBJECT_PARAMS = {
  SUBJECT_ID: "subject_id",
};

const SINGLE_SUBJECT_ROUTE = {
  PATH: `:${SINGLE_SUBJECT_PARAMS.SUBJECT_ID}`,
  NAME: "single_subject",
};

const single_subject_routes = [
  {
    path: SINGLE_SUBJECT_ROUTE.PATH,
    name: SINGLE_SUBJECT_ROUTE.NAME,
    component: () => import("@/views/subjects/SingleSubject/SingleSubjectView.vue"),
  },
];

export { SINGLE_SUBJECT_PARAMS, SINGLE_SUBJECT_ROUTE };
export default single_subject_routes;
