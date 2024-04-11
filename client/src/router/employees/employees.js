/* employees маршрут */

const EMPLOYEES_ROUTE = {
  PATH: "/employees",
  NAME: "employees",
};

const employees_routes = [
  {
    path: EMPLOYEES_ROUTE.PATH,
    name: EMPLOYEES_ROUTE.NAME,
    component: () => import("@/views/employees/EmployeesView.vue"),
  },
];

export { EMPLOYEES_ROUTE };
export default employees_routes;
