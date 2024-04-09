/* SUBJECTS SERVICE */

import { DB_COLLECTION_NAMES } from "../constants/database.js";

class Subjects_service {
  // получить все предметы
  static async getSubjects(fastify) {
    const subjects_collection = fastify.mongo.db.collection(DB_COLLECTION_NAMES.SUBJECTS);

    const sections = subjects_collection.find();
    return sections.toArray();
  }
}

export default Subjects_service;
