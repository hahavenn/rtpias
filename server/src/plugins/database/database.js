import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";

async function database_plugin(fastify, options) {
  // подключаем mongodb
  fastify.register(fastifyMongo, {
    url: process.env.DATABASE_URL,
  });
}

export default fastifyPlugin(database_plugin);
