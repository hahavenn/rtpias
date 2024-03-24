/* МАРШРУТЫ НАВИГАЦИИ САЙТА */

import { getNavigationList } from "../../services/navigation/navigation.js";

const NAVIGATION_ROUTE_NAMES = {
  ALL_SECTIONS: "/navigation",
};

async function navigation_routes(fastify, options) {
  /* handlers */
  async function getNavigationList_handler(req, reply) {
    const navSections = await getNavigationList(fastify);
    return navSections;
  }

  /* routes */
  fastify.route({
    method: "GET",
    url: NAVIGATION_ROUTE_NAMES.ALL_SECTIONS,
    handler: getNavigationList_handler,
  });
}

export default navigation_routes;
