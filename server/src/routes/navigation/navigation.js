/* МАРШРУТЫ НАВИГАЦИИ САЙТА */

import Navigation_service from "../../services/navigation.js";

const NAVIGATION_ROUTE_NAMES = {
  ALL_SECTIONS: "/navigation",
};

async function Navigation_route(fastify, options) {
  /* handlers */
  async function getNavigationList_handler(req, reply) {
    const navSections = await Navigation_service.getNavigationList(fastify);
    return navSections;
  }

  /* routes */
  fastify.route({
    method: "GET",
    url: NAVIGATION_ROUTE_NAMES.ALL_SECTIONS,
    handler: getNavigationList_handler,
  });
}

export default Navigation_route;
