import express, { Request, Response } from 'express';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

app.use(express.urlencoded({ limit: '90mb', extended: true }));
app.use(cors());
app.use(express.json({ limit: '90mb' }));

app.set('views', path.join(__dirname, '/views'));
app.get('/example', (req, res) => {
  res.render('successLoginML', {
    nameUser: 'Erick',
    message: 'Welcome to my application!',
  });
});

app.get('/data', async (req, res) => {
  const users = await mongoose.connection.db
    .collection('movies')
    .find({})
    .toArray();
  res.json(users);
});

app.set('view engine', 'ejs');

export default app;
