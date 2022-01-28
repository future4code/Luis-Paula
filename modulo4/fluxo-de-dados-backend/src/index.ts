import express, { Request, Response } from 'express';
import { lozItems } from './data';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

//exercício 1
app.get('/teste', (req: Request, res: Response) => {
  res.status(200).send('A api está funcionando');
});

//exercício 3
app.post('/itens', (req: Request, res: Response) => {
  try {
    const id = Date.now().toString();
    const name = req.body.name;
    const price = req.body.price;

    if (!name || (!price && price !== 0)) {
      throw new Error('Nome e/ou preço inválidos, por favor verifique');
    }

    if (typeof name !== 'string') {
      throw new Error('Nome em formato inválido, por favor verifique');
    }

    if (typeof price !== 'number' || price <= 0) {
      throw new Error(
        'Preço em formato inválido e/ou valor menor ou igual a 0, por favor verifique'
      );
    }

    lozItems.push({
      id,
      name,
      price,
    });

    res.status(200).send(lozItems);
  } catch (e: any) {
    switch (e.message) {
      case 'Nome e/ou preço inválidos, por favor verifique':
        res.statusCode = 422;
        break;
      case 'Nome em formato inválido, por favor verifique':
        res.statusCode = 422;
        break;
      case 'Preço em formato inválido e/ou valor menor ou igual a 0, por favor verifique':
        res.statusCode = 422;
        break;
      default:
        res.statusCode = 500;
    }
    res.send(e.message);
  }
});

//exercício 4
app.get('/itens', (req: Request, res: Response) => {
  res.status(200).send(lozItems);
});

//exercício 5
app.put('/itens/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const price = req.body.price;
  try {
    if (!price && price !== 0) {
      throw new Error('Preço não foi recebido, por favor verifique');
    }
    if (typeof price !== 'number' || price <= 0) {
      throw new Error(
        'Preço não é um número e/ou é menor ou igual a zero, por favor verifique'
      );
    }

    let isThereAnItem = false;

    lozItems.filter((item) => {
      if (item.id === id) {
        item.price = price;
        isThereAnItem = true;
        return item;
      }
    });
    if (!isThereAnItem) {
      throw new Error('Item não encontrado, por favor verifique');
    }
    res.status(200).send(lozItems);
  } catch (e: any) {
    switch (e.message) {
      case 'Preço ou id não foi recebido, por favor verifique':
        res.statusCode = 422;
        break;
      case 'Preço não é um número e/ou é menor ou igual a zero, por favor verifique':
        res.statusCode = 422;
        break;
      case 'Item não encontrado, por favor verifique':
        res.statusCode = 404;
        break;
      default:
        res.statusCode = 500;
    }
    res.send(e.message);
  }
});

//exercício 6

app.delete('/itens/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedItems = lozItems.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  res.status(200).send(deletedItems);
});
