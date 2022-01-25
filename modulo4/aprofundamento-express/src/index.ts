import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

//exercício 1
app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

//exercício 2
type Execute = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

//exercício 3
const execute: Execute[] = [
  {
    userId: 1,
    id: 1,
    title: 'adsadadsdsadsadads',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'adsadadsdsadsadadgfchms',
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: 'adsadadsdsaddndfsmdmcfhgmsadads',
    completed: true,
  },
  {
    userId: 4,
    id: 4,
    title: 'zdbbfddfadsabdfdznadsdbdfszsadsadads',
    completed: false,
  },
];

//exercício 4
app.get('/list', (req: Request, res: Response) => {
  res.status(200).send(
    execute.filter((complete) => {
      if (complete.completed) {
        return complete;
      }
    })
  );
});

//exercício 5
app.post('/list', (req: Request, res: Response) => {
  const addUserId = req.body.userId;
  const addId = req.body.id;
  const addTitle = req.body.title;
  const addComplete = req.body.completed;
  execute.push({
    userId: addUserId,
    id: addId,
    title: addTitle,
    completed: addComplete,
  });

  res.status(200).send(execute);
});

//exercício 6
app.put('/list/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res
      .status(400)
      .send('ID não encontrado, por favor bote um id válido');
  }

  execute.map((change) => {
    if (change.id === id) {
      return (change.completed = !change.completed);
    }
  });
  res.status(200).send(
    execute.filter((item) => {
      if (item.id === id) {
        return item;
      }
    })
  );
});

//exercício 7
app.delete('/list/:id', (req: Request, res: Response) => {
  const paramId = Number(req.params.id);

  if (!paramId) {
    return res
      .status(400)
      .send('ID não encontrado, por favor bote um id válido');
  }

  res.status(200).send(
    execute.filter((id) => {
      if (id.id !== paramId) {
        return execute;
      }
    })
  );
});

//exercício 8
app.get('/list/:id', (req: Request, res: Response) => {
  const paramId = Number(req.params.id);

  if (!paramId) {
    return res
      .status(400)
      .send('ID não encontrado, por favor bote um id válido');
  }

  res.status(200).send(
    execute.filter((id) => {
      if (id.id === paramId) {
        return execute;
      }
    })
  );
});

//exercício 9
//https://documenter.getpostman.com/view/18385386/UVe9SVQ3
