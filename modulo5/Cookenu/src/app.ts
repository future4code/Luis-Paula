import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});
