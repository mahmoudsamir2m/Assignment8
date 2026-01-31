import { getDB } from "../../database/connection.js";




export const createCapped = async () =>
  await getDB().createCollection("logs", { capped: true, size: 1048576 });


export const insertLog = async (doc) =>
  await getDB().collection("logs").insertOne(doc);
