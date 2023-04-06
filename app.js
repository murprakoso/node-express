import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();
const port = parseInt(process.env.PORT ?? 4000);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log('🚀 DB Connection Successfull!');
    console.log(`-- MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is listening on http://localhost:${port}`);
  });
});
