import { DB_COLLECTION_NAMES } from "../constants/database.js";

class Navigation_service {
  // получить все секции навигации
  static async getNavigationList(fastify) {
    const navigation_collection = fastify.mongo.db.collection(DB_COLLECTION_NAMES.NAVIGATION);

    const sections = navigation_collection.find();
    return sections.toArray();
  }
}

export default Navigation_service;
