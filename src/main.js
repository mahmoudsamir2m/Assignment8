import express from 'express';
import { connectDB } from './database/connection.js';
import bookRouter from './modules/books/book.controller.js';
import authorRouter from './modules/authors/author.controller.js';
import logRouter from './modules/logs/log.controller.js';

const app = express();
app.use(express.json());
await connectDB();

app.use(bookRouter);
app.use(authorRouter);
app.use(logRouter);

app.listen(3000, () => console.log('Server running on 3000'));