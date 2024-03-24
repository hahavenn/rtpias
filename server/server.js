import Fastify from "fastify";
import "dotenv/config";

import { DEVELOPMENT_CONFIG, PRODUCTION_CONFIG } from "./config/fastify.js";

import { APP_MODE } from "./src/constants/config.js";
import { ENV_ERRORS } from "./src/constants/errors.js";

import allPlugins from "./src/plugins/index.js";
import allRoutes from "./src/routes/index.js";

// check mode in .env file
if (!(process.env.APP_MODE in APP_MODE)) {
  throw new Error(ENV_ERRORS.UNKNOWN_APP_MODE);
}

// set fastify instance
const fastify_config =
  process.env.APP_MODE == "DEVELOPMENT" ? DEVELOPMENT_CONFIG : PRODUCTION_CONFIG;
const fastify = Fastify(fastify_config);

/* plugins */
for (const plugin of allPlugins) {
  await fastify.register(plugin);
}

/* routes */
for (const route of allRoutes) {
  await fastify.register(route);
}

const startServer = async () => {
  try {
    fastify.listen({
      port: process.env.APP_PORT,
      host: process.env.APP_HOST,
    });

    console.log(
      `server started on ${process.env.APP_HOST}:${process.env.APP_PORT}, app mode is ${process.env.APP_MODE}`
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

await startServer();
