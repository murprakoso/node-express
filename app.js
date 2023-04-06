import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();
const port = parseInt(process.env.PORT ?? 4000);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('🚀 DB Connection Successfull!'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`🚀 Server is listening on http://localhost:${port}`);
});
