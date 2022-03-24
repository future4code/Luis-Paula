import dotenv from 'dotenv';
import { AddressInfo } from 'net';
import express from 'express';
import { pizzaRouter } from './Routes/Router';
dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', pizzaRouter);
const { PORT = 3003 } = process.env;

const server = app.listen(PORT, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
