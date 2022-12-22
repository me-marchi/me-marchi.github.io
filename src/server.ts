import { config } from 'dotenv';
config()

import cors from 'cors';
import "reflect-metadata";

import express from 'express';
const app = express()

import { registryRouter } from './routes/registryRoute';
app.use(express.json())
app.use(registryRouter)
app.use(cors())

app.get('/', function(req, res) {
    res.send('Olá mundo');
});

app.listen(3333, () => console.log('Server running'))

export { app }

