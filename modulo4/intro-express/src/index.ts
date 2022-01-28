//exercício 1

import express from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get('/', (req, res) => {
    res.status(200).send('Estou usando o express')
})

//exercício 2

type Users = {
  id:number,
  name:string,
  phone:string,
  email:string,
  website:string}
  
//exercício 3

const users:Users[] = [
  {id: 1,
  name: 'luis',
  phone: '1111-111-111-11',
  email:'luis@email.com',
  website:'luis.com'},
  {id: 2,
  name: 'gabi',
  phone: '2222-222-222-22',
  email:'gabi@email.com',
  website:'gabi.com'},
  {id: 3,
  name: 'maria',
  phone: '3333-333-333-33',
  email:'maria@email.com',
  website: 'maria.com'},
  {id: 4,
  name: 'joão',
  phone: '4444-444-444-44',
  email:'joao@email.com',
  website:'joao.com'
}
]

//exercício 4

app.get('/users', (req, res) => {
  res.status(200).send(users)
})

//exercício 5

type Posts = {
  id:number,
  title:string,
  body:string,
  userId:number
}

//exercício 6

const posts:Posts[] = [
  {
    id:1,
    title:'oi',
    body:'olá, me chamo Luis',
    userId:1
  },
  {
    id:2,
    title:'oi',
    body:'olá, me chamo Gabi',
    userId:2
  },
  {
    id:3,
    title:'oi',
    body:'olá, me chamo Maria',
    userId:3
  },
  {
    id:4,
    title:'oi',
    body:'olá, me chamo João',
    userId:4
  },
]
// acho melhor criar fora da array de usuários, pois uma array dentro da outra pode ficar mais confuso pra quem for utilizar a API, como tive dificuldades com isso acho que seria melhor ter um espaço separado para cada array.

//exercício 7

app.get('/posts', (req, res) => {
  res.status(200).send(posts)
})

//exercício 8

app.get('/user', (req, res) => {
  res.status(200).send(posts.filter((id) => {
    if(id.id === 1){
      return id
    }
  }))
})
