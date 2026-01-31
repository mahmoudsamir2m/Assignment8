import { getDB } from "../../database/connection.js";

export const insertAuthor = async (doc) =>
  await getDB().collection("authors").insertOne(doc);
