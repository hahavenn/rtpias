import { DB_COLLECTION_NAMES } from "../constants/database.js";

// получить все секции навигации
async function getNavigationList(fastify) {
  const navigation_collection = fastify.mongo.db.collection(DB_COLLECTION_NAMES.NAVIGATION);

  const sections = navigation_collection.find();
  return sections.toArray();
}

const Navigation_service = {
  getNavigationList,
};

export default Navigation_service;
