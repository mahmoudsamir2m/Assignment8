import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);


let db;


export const connectDB = async () => {
    await client.connect();
    db = client.db('Assignment8');
    console.log('MongoDB Connected');
};


export const getDB = () => db;