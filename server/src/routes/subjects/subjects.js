/* МАРШРУТЫ ПРЕДМЕТОВ */

import Subjects_service from "../../services/subjects.js";

const SUBJECTS_ROUTE_NAMES = {
  BASE_ROUTE: "/subjects",
};

async function Subjects_route(fastify, options) {
  /* handlers */
  async function getSubjects_handler(req, reply) {
    const subjects = await Subjects_service.getSubjects(fastify);
    return subjects;
  }

  /* routes */
  fastify.route({
    method: "GET",
    url: SUBJECTS_ROUTE_NAMES.BASE_ROUTE,
    handler: getSubjects_handler,
  });
}

export default Subjects_route;
