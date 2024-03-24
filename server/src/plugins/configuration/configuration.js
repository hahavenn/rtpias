import fastifyPlugin from "fastify-plugin";
import fastifyCors from "@fastify/cors";

async function Configuration_plugin(fastify, options) {
  // добавить политику CORS только для CLIENT_URL
  fastify.register(fastifyCors, {
    origin: process.env.CLIENT_URL,
    credentials: true,
  });
}

export default fastifyPlugin(Configuration_plugin);
