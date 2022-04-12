import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const serverPort = process.env.PORT;

app.listen(serverPort || 3003, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});
