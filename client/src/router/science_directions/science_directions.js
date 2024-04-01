/* science_directions маршрут */

const SCIENCE_DIRECTIONS_ROUTE = {
  PATH: "/science_directions",
  NAME: "science_directions",
};

const science_directions_routes = [
  {
    path: SCIENCE_DIRECTIONS_ROUTE.PATH,
    name: SCIENCE_DIRECTIONS_ROUTE.NAME,
    component: () => import("@/views/science_directions/ScienceDirectionsView.vue"),
  },
];

export default science_directions_routes;
