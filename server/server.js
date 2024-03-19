import Fastify from "fastify";
import "dotenv/config";

import { DEVELOPMENT_CONFIG, PRODUCTION_CONFIG } from "./config/fastify.js";
import { APP_MODE } from "./constants/config.js";
import { ENV_ERRORS } from "./constants/errors.js";

// check mode in .env file
if (!(process.env.APP_MODE in APP_MODE)) {
  throw new Error(ENV_ERRORS.UNKNOWN_APP_MODE);
}

// set fastify instance
const fastify_config =
  process.env.APP_MODE == "DEVELOPMENT" ? DEVELOPMENT_CONFIG : PRODUCTION_CONFIG;
const fastify = Fastify(fastify_config);

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

startServer();
