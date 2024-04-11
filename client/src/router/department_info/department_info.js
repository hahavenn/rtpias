/* department_info маршрут */

const DEPARTMENT_INFO_ROUTE = {
  PATH: "/department_info",
  NAME: "department_info",
};

const department_info_routes = [
  {
    path: DEPARTMENT_INFO_ROUTE.PATH,
    name: DEPARTMENT_INFO_ROUTE.NAME,
    component: () => import("@/views/department_info/DepartmentInfoView.vue"),
  },
];

export { DEPARTMENT_INFO_ROUTE };
export default department_info_routes;
