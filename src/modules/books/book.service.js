import { getDB } from "../../database/connection.js";


export const createExplicitBooks = async () =>
  await getDB().createCollection("books");


export const insertOneBook = async (doc) =>
  await getDB().collection("books").insertOne(doc);


export const insertManyBooks = async (docs) =>
  await getDB().collection("books").insertMany(docs);


export const updateBookYear = async (title) =>
  await getDB()
    .collection("books")
    .updateOne({ title }, { $set: { year: 2022 } });


export const findTitle = async (title) =>
  await getDB().collection("books").findOne({ title });


export const findYears = async (f, t) =>
  await getDB()
    .collection("books")
    .find({ year: { $gte: Number(f), $lte: Number(t) } })
    .toArray();


export const deleteBefore = async (y) =>
  await getDB()
    .collection("books")
    .deleteMany({ year: { $lt: Number(y) } });


export const agg1 = async () =>
  await getDB()
    .collection("books")
    .aggregate([{ $match: { year: { $gt: 2000 } } }, { $sort: { year: -1 } }])
    .toArray();

    
export const aggLookup = async () =>
  await getDB()
    .collection("books")
    .aggregate([
      {
        $lookup: {
          from: "logs",
          localField: "_id",
          foreignField: "book_id",
          as: "details",
        },
      },
    ])
    .toArray();
